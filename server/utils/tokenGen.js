// simple token: T + YYMMDD + random 4 digits
export function generateToken() {
  const d = new Date();
  const y = String(d.getFullYear()).slice(-2);
  const m = String(d.getMonth()+1).padStart(2,"0");
  const day = String(d.getDate()).padStart(2,"0");
  const rnd = Math.floor(1000 + Math.random()*9000);
  return `T${y}${m}${day}${rnd}`;
}