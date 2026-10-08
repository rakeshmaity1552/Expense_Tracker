export function validateExpense(expense) {
  const amount=Number(expense.amount);
  if (!String(expense.amount ?? '').trim() || !Number.isFinite(amount) || amount <= 0) return 'Enter an amount greater than zero.';
  if (!String(expense.store_name ?? '').trim()) return 'Enter a store or recipient.';
  if (!expense.category_id) return 'Choose a category.';
  if (!expense.expense_date || !/^\d{4}-\d{2}-\d{2}$/.test(expense.expense_date) || Number.isNaN(Date.parse(`${expense.expense_date}T00:00:00`))) return 'Choose a valid date.';
  return '';
}
