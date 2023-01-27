export default function Head({ pageTitle }: { pageTitle: string }) {
  console.log(true);
  console.log(pageTitle);
  return (
    <>
      <title>{(pageTitle && pageTitle) || 'artur.dev'}</title>
      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <link rel='icon' href='/favicon.ico' />
    </>
  );
}
