export default function Head({ pageTitle }: { pageTitle: string }) {
  console.log(true);
  console.log(pageTitle);
  return (
    <>
      <title>About</title>
      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <link rel='icon' href='/facivon.ico' />
    </>
  );
}
