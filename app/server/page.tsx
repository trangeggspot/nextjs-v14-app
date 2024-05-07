import Navigation from '../Navigation';
import SimpleGreeter from '../simple-greeter';

export default function Home() {
  return (
    <main>
      <Navigation></Navigation>
      <SimpleGreeter name="Friend" />
    </main>
  );
}
