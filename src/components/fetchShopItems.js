export default async function fetchShopItems() {
  // fetch API to get the shop items
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  const data = await response.json();
  //   console.log(data);
  return data;
}
