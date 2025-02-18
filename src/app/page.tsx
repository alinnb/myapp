interface Todo {
  title: string;
  id: number;
}

async function getTodos() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (!response.ok) {
      throw new Error('网络请求失败');
    }
    const todos = await response.json();
    const randomCount = Math.floor(Math.random() * 10) + 1; // 1-10的随机数
    return todos.slice(0, randomCount);
  } catch (error) {
    console.error('获取数据失败:', error);
    throw new Error(`获取数据失败: ${error instanceof Error ? error.message : '未知错误'}`);
  }
}

export default async function Home() {
  const data = await getTodos();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Todo列表 (随机{data.length}条)</h1>
      <ul className="space-y-2">
        {data.map(({ title, id }: Todo) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
}
