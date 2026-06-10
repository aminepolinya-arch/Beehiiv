import got from 'got';
const COUPON_URL = 'https://www.beehiiv.com?via=Amine-Menad';

async function checkDeal() {
  try {
    const res = await got.head(COUPON_URL, { timeout: { request: 10000 }, followRedirect: false });
    console.log(`Deal page status: ${res.statusCode}`);
    if (res.headers.location) console.log(`Redirect: ${res.headers.location}`);
  } catch {
    console.log('Deal page check skipped (network).');
  }
}

checkDeal();

console.log('\n--- Beehiiv API Simulation ---');
console.log('Use cases: newsletter creation, subscriber management, ad monetization');
if (process.env.BEEHIIV_API_KEY) {
  console.log('API key detected. Ready for newsletter operations.');
} else {
  console.log('Set BEEHIIV_API_KEY env var to enable live API calls.');
}
