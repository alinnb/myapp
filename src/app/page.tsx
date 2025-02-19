import { addTodo, getTodo } from "@/actions";
import FormButton from "./components/client/formbutton";

export default async function Page() {
  const data: string[] = await getTodo();

  return (
    <div className="p-10">
      <div className="flex">
        <form action={addTodo}>
          <input type="text" name="todo" className="border p-2" />
          <button type="submit" className="border p-2">提交</button>
        </form>
        <FormButton>按钮</FormButton>
      </div>
      <div>
        <ul className='leading-8 mt-4'>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
