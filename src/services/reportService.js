export function summarizeExpenses(expenses) {
  const total=expenses.reduce((sum,e)=>sum+Number(e.amount),0), categories={};
  for(const e of expenses) categories[e.category_name]=(categories[e.category_name]||0)+Number(e.amount);
  return {total,count:expenses.length,average:expenses.length?total/expenses.length:0,highest:expenses.reduce((max,e)=>Math.max(max,Number(e.amount)),0),categories:Object.entries(categories).sort((a,b)=>b[1]-a[1])};
}
