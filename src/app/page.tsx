
export default function Home() {
  console.log('toLocaleTimeString 😀');
  return (
    <div>
      <h1>{new Date().toLocaleTimeString()}</h1>
    </div>
  );
}
