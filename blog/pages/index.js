import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [route, setRoute] = useState("");

  function handleChange(e) {
    const { value } = e.target;
    setRoute(value);
  }

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <div>
        <Link href={`prueba/${route}`}>
          <div>Ir a /prueba/{route}</div>
        </Link>
      </div>
    </div>
  );
}
