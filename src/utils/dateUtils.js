export const toDateKey = (date) => { const d = new Date(date); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; };
export const currentMonthKey = () => toDateKey(new Date()).slice(0,7);
export const monthLabel = (key) => { const [y,m]=key.split('-').map(Number); return new Date(y,m-1,1).toLocaleDateString(undefined,{month:'long',year:'numeric'}); };
export const displayDate = (key) => { const [y,m,d]=key.split('-').map(Number); return new Date(y,m-1,d).toLocaleDateString(undefined,{day:'2-digit',month:'short',year:'numeric'}); };
export const shiftMonth = (key, delta) => { const [y,m]=key.split('-').map(Number); const d=new Date(y,m-1+delta,1); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`; };
export function datePresetRange(preset, now=new Date()) {
  const today=new Date(now.getFullYear(),now.getMonth(),now.getDate());
  if(preset==='today') return {from:toDateKey(today),to:toDateKey(today)};
  if(preset==='yesterday'){const d=new Date(today);d.setDate(d.getDate()-1);return {from:toDateKey(d),to:toDateKey(d)};}
  if(preset==='week'){const start=new Date(today);start.setDate(start.getDate()-((start.getDay()+6)%7));return {from:toDateKey(start),to:toDateKey(today)};}
  if(preset==='month') return {from:`${toDateKey(today).slice(0,7)}-01`,to:toDateKey(today)};
  if(preset==='lastMonth'){const first=new Date(today.getFullYear(),today.getMonth()-1,1),last=new Date(today.getFullYear(),today.getMonth(),0);return {from:toDateKey(first),to:toDateKey(last)};}
  return {from:'',to:''};
}
