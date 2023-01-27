import Image from 'next/image';

export default function About() {
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  let dialog: string = 'asdasdasd';

  dialog = 'asd';

  console.log(dialog);
  return (
    <div>
      Page
      <Image src='/vercel.svg' width='64' height='64' alt='asd' />
    </div>
  );
}
