
// 定义表单数据接口
export interface RedFormData {
    name: string;
    email: string;
    phone: string;
    age: number;
    gender: 'male' | 'female' | 'other';
    occupation: string;
    interests: string[];
    address: {
        street: string;
        city: string;
        country: string;
        postalCode: string;
    };
    newsletter: boolean;
    comments: string;
}

// 定义状态接口
export interface FormState {
    message: string
    error?: string | null
    status: 'idle' | 'loading' | 'success' | 'error'
}