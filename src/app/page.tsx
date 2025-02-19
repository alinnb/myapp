import { addTodo, getTodo } from "@/actions";

const userID = '123';

export default async function Page() {
  const data:string[] = await getTodo();

  return (
    <div className="p-10">
      <form action={async (formData) => {
        'use server'
        await addTodo(userID, formData);
      }}>
        <input type="text" name="todo" className="border p-2"/>
        <button type="submit" className="border p-2">提交</button>
      </form>
      <ul className='leading-8 mt-4'>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
