"use client";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';

const loginSchema = z.object({
  email: z.string().email("Invalid email").nonempty("Email is required"),
  password: z
    .string()
    .min(5, "Password must be at least 5 characters")
    .max(10, "Password must be at most 10 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
      "Must contain at least one uppercase letter and one number"
    )
    .nonempty("Password is required"),
});

const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    // Implement your backend login logic here
    // For example, send data to your API

    // Assuming login is successful
    router.push("/"); // Redirect after successful login
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-md mx-auto bg-white p-8 my-10 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <input
              type="email"
              {...register("email")}
              placeholder="Email"
              className="w-full p-3 border border-blue-300 rounded"
            />
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="relative">
            <input
              type="password"
              {...register("password")}
              placeholder="Password"
              className="w-full p-3 border border-blue-300 rounded"
            />
            {errors.password && (
              <p className="text-red-600 text-sm">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >
            Submit
          </button>
          <p className="text-black">
            Don't Have an Account Yet? 
            <button
              type="button"
              className="font-bold"
              onClick={() => router.push("/signup")}
            >
              SignUp
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

