
async function fetchImg () {
  const r = await (await fetch('http://dog.ceo/api/breeds/image/random', {
    cache: 'force-cache', 
    next: {
      revalidate: 10
    }
  })).json()
  return r
}

export default async function Page() {
  const img = await fetchImg()  
  console.log('😀');
  return (
    <div>
      <img src={img.message} alt="Random dog" />
    </div>
  );
}
