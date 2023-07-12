import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <p>Hello World</p>
      <Image src="/public/favicon.ico" alt="" />
    </div>
  );
}
