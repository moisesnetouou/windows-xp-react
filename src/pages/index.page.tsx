import Image from 'next/image';

import logoImg from '@/assets/images/windows-xp-big-logo.png';
import { BlueBox, Container, Stack } from './start/styles';

export default function Home() {
  return (
    <Container>
      <section>
        <picture>
          <Image src={logoImg} alt="logo windows xp" width={393} height={227} />
        </picture>

        <div>
          <Stack>
            <BlueBox />
            <BlueBox />
            <BlueBox />
          </Stack>
        </div>
      </section>

      <footer>
        <span>
          <p>Copyright © 1985-2001</p>
          <p>Microsoft Corporation</p>
        </span>

        <h1>Microsoft ©</h1>
      </footer>
    </Container>
  );
}
