import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#5187b4', color: '#fff', display: 'flex', gap: '1rem', fontfamily: 'Tahoma, sans-serif' }}>
      <Link href="/">Home</Link>
      <Link href="/recipes">Recipes</Link>
      <Link href="/favorites">Favorites</Link>
    </nav>
  );
};

export default Navbar;


