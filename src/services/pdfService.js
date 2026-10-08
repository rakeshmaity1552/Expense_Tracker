import * as Print from 'expo-print';
import { File, Paths } from 'expo-file-system';
import { formatCurrency } from '../utils/currencyUtils';
import { displayDate, monthLabel } from '../utils/dateUtils';
import { summarizeExpenses } from './reportService';

const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (character) => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}[character]));

export async function createPdfReport(month, expenses) {
  const summary = summarizeExpenses(expenses);
  const categories = summary.categories
    .map(([name, amount]) => `<tr><td>${escapeHtml(name)}</td><td>${formatCurrency(amount)}</td></tr>`)
    .join('');
  const transactions = expenses
    .map((expense) => `<tr>
      <td>${displayDate(expense.expense_date)}</td>
      <td>${escapeHtml(expense.store_name)}</td>
      <td>${escapeHtml(expense.category_name)}</td>
      <td>${escapeHtml(expense.payment_method)}</td>
      <td>${formatCurrency(expense.amount)}</td>
      <td>${escapeHtml(expense.description)}</td>
    </tr>`)
    .join('');

  const html = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Expense Statement - ${escapeHtml(monthLabel(month))}</title>
        <style>
          @page { margin: 24px; }
          body { font: 12px Arial, sans-serif; color: #20223A; }
          h1 { color: #5B5CE2; }
          h2 { margin-top: 24px; }
          table { width: 100%; border-collapse: collapse; margin-top: 12px; }
          th, td { border-bottom: 1px solid #ddd; padding: 7px; text-align: left; }
          th { background: #f1f1fa; }
          thead { display: table-header-group; }
          tr { page-break-inside: avoid; }
        </style>
      </head>
      <body>
        <h1>Expense Tracker</h1>
        <h2>Expense Statement · ${escapeHtml(monthLabel(month))}</h2>
        <p>Total: ${formatCurrency(summary.total)} &nbsp; Transactions: ${summary.count}
          &nbsp; Average: ${formatCurrency(summary.average)}
          &nbsp; Highest: ${formatCurrency(summary.highest)}</p>
        <h2>Category Summary</h2>
        <table><thead><tr><th>Category</th><th>Amount</th></tr></thead><tbody>${categories}</tbody></table>
        <h2>Transactions</h2>
        <table>
          <thead><tr><th>Date</th><th>Store</th><th>Category</th><th>Payment</th><th>Amount</th><th>Description</th></tr></thead>
          <tbody>${transactions}</tbody>
        </table>
        <h2>Grand total: ${formatCurrency(summary.total)}</h2>
      </body>
    </html>`;

  const result = await Print.printToFileAsync({
    html,
    base64: true,
    margins: { top: 24, right: 24, bottom: 24, left: 24 },
  });
  if (!result?.base64) {
    throw new Error('Android did not return PDF data.');
  }

  // Expo Print's temporary URI can be unreadable to Android's share intent.
  // Put the PDF in the app cache, which Expo Sharing can grant access to.
  const file = new File(Paths.cache, `Expense_Statement_${month}.pdf`);
  file.create({ overwrite: true });
  file.write(result.base64, { encoding: 'base64' });
  return file.uri;
}
