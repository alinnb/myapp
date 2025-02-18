'use client'
import {useState, useEffect} from "react";

interface Todo {
  title: string;
  id: number;
}

export default function Home() {

  const [data, setData] = useState([])
  
  const fetchData = async () => {
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

  useEffect(() => {
    fetchData().then((res) => {
      setData(res)
    })
  }, [])

  const handleRefresh = () => {
    fetchData().then((res) => {
      setData(res)
    })
  }

  return (
    <div className="p-4">
      <div className="flex items-center gap-4 mb-4">
        <h1 className="text-2xl font-bold">Todo列表 (随机{data.length}条)</h1>
        <button 
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleRefresh}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          刷新
        </button>
      </div>
      <ul className="space-y-2">
        {data.map(({ title, id }: Todo) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
}
