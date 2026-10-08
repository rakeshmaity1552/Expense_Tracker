import { getDatabase } from './database';
const joined = `SELECT e.*, c.name AS category_name, c.icon AS category_icon FROM expenses e JOIN categories c ON c.id=e.category_id`;
export async function getCategories() { return (await getDatabase()).getAllAsync('SELECT * FROM categories ORDER BY name COLLATE NOCASE'); }
export async function addCategory(name, icon='🏷️') { const db=await getDatabase(); await db.runAsync('INSERT INTO categories(name,icon) VALUES(?,?)',name.trim(),icon); }
export async function getExpense(id) { return (await getDatabase()).getFirstAsync(`${joined} WHERE e.id=?`,Number(id)); }
export async function listExpenses(filters={}) {
  const db=await getDatabase(); const where=[], args=[];
  if(filters.search){ where.push('(e.store_name LIKE ? OR e.description LIKE ?)'); const q=`%${filters.search.trim()}%`; args.push(q,q); }
  if(filters.category_id){ where.push('e.category_id=?'); args.push(Number(filters.category_id)); }
  if(filters.payment_method){ where.push('e.payment_method=?'); args.push(filters.payment_method); }
  if(filters.from){ where.push('e.expense_date>=?'); args.push(filters.from); }
  if(filters.to){ where.push('e.expense_date<=?'); args.push(filters.to); }
  if(filters.min){ where.push('e.amount>=?'); args.push(Number(filters.min)); }
  if(filters.max){ where.push('e.amount<=?'); args.push(Number(filters.max)); }
  const sorts={newest:'e.expense_date DESC,e.id DESC',oldest:'e.expense_date ASC,e.id ASC',high:'e.amount DESC',low:'e.amount ASC',az:'e.store_name COLLATE NOCASE ASC',za:'e.store_name COLLATE NOCASE DESC'};
  return db.getAllAsync(`${joined} ${where.length?`WHERE ${where.join(' AND ')}`:''} ORDER BY ${sorts[filters.sort]||sorts.newest}`, ...args);
}
export async function saveExpense(expense,id) {
  const db=await getDatabase(); const values=[Number(expense.amount),expense.store_name.trim(),Number(expense.category_id),expense.payment_method||'Cash',(expense.description||'').trim(),expense.expense_date];
  if(id) await db.runAsync('UPDATE expenses SET amount=?,store_name=?,category_id=?,payment_method=?,description=?,expense_date=?,updated_at=? WHERE id=?',...values,new Date().toISOString(),Number(id));
  else await db.runAsync('INSERT INTO expenses(amount,store_name,category_id,payment_method,description,expense_date,created_at) VALUES(?,?,?,?,?,?,?)',...values,new Date().toISOString());
}
export async function deleteExpense(id) { return (await getDatabase()).runAsync('DELETE FROM expenses WHERE id=?',Number(id)); }
