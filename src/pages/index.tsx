import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
  return (
    <div>
      <p>Hello World</p>
      <Image src="/public/favicon.ico" alt="" />
    </div>
  );
}
