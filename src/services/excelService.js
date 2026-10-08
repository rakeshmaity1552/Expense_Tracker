import * as XLSX from 'xlsx';
import { File, Paths } from 'expo-file-system';
import { formatCurrency } from '../utils/currencyUtils';
import { displayDate, monthLabel } from '../utils/dateUtils';
import { summarizeExpenses } from './reportService';
export async function createExcelReport(month,expenses) {
  const summary=summarizeExpenses(expenses), wb=XLSX.utils.book_new();
  const rows=[['Expense Statement',monthLabel(month)],['Total Expenses',formatCurrency(summary.total)],['Transactions',summary.count],['Average',formatCurrency(summary.average)],['Highest Expense',formatCurrency(summary.highest)],[],['Date','Store','Category','Payment','Amount','Description'],...expenses.map(e=>[displayDate(e.expense_date),e.store_name,e.category_name,e.payment_method,Number(e.amount),e.description||'']),[],['Grand Total',summary.total]];
  const sheet=XLSX.utils.aoa_to_sheet(rows); XLSX.utils.book_append_sheet(wb,sheet,'Expenses');
  const base64=XLSX.write(wb,{type:'base64',bookType:'xlsx'});
  const file = new File(Paths.cache, `Expense_Statement_${month}.xlsx`);
  file.create({ overwrite: true });
  file.write(base64, { encoding: 'base64' });
  return file.uri;
}
