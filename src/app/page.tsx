import ClientComponent from './components/client-component'
import ServerComponent from './components/server-component'

export default function Home() {
  return (
    <div>
      <ClientComponent>
        <ServerComponent/>
      </ClientComponent>
    </div>
  );
}
