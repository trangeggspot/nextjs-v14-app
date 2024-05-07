import styles from './Home.module.css';
import SimpleGreeter from './simple-greeter';
import SimpleGreeterReact from '../src/simple-greeter-react';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://lit.dev">Lit</a> and{' '}
          <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <SimpleGreeter name="Friend" />
        {/* <SimpleGreeterReact name="React" /> */}
      </main>
    </div>
  );
}
