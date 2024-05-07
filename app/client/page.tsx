import SimpleGreeterReact from '../../src/simple-greeter-react';
import Navigation from '../Navigation';

export default function Home() {
  return (
    <main>
      <Navigation></Navigation>
      <SimpleGreeterReact name="React" />
    </main>
  );
}
