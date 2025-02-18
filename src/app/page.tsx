

export default async function Page() {
  const r = await(await fetch('https://jsonplaceholder.typicode.com/todos/1',{
    cache: 'no-cache',
  })).json()
  console.log(r);
  console.log('toLocaleTimeString 😀');
  return (
    <div>
      <h1>{new Date().toLocaleTimeString()}</h1>
    </div>
  );
}
