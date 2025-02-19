import { addTodo, getTodo } from "@/actions";

export default async function Page() {
  console.log('😀');

  const data:string[] = await getTodo();

  return (
    <div className="p-10">
      <form>
        <input type="text" name="todo" className="border p-2"/>
        <button formAction={addTodo} type="submit" className="border p-2">提交</button>
      </form>
      <ul className='leading-8 mt-4'>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
