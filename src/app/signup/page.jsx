"use client"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


const signUpSchema = z.object({
  name: z.string().nonempty("Please enter your name"),
  email: z.string().email('Invalid email').nonempty('Email is required'),
  contactnumber: z.string().nonempty('Contact number is required'),
  password: z.string()
    .min(5, "Password must be at least 5 characters")
    .max(10, "Password must be at most 10 characters")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, 'Must contain at least one uppercase letter and one number')
    .nonempty('Password is required'),
  confirmPassword: z.string()
    .nonempty('Confirm Password is required')
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords must match",
  path: ["confirmPassword"]
});

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(signUpSchema)
  });
  const router = useRouter();

  const onSubmit = (data) => {
    console.log("Form Submission Data:", data);
    
    router.push("/login"); 
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-md mx-auto bg-white p-8 my-10 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <input type="text" {...register('name')} placeholder="Enter your Name" className="w-full p-3 border border-blue-300 rounded" />
            {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}
          </div>
          <div>
            <input type="email" {...register('email')} placeholder="Email" className="w-full p-3 border border-blue-300 rounded" />
            {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
          </div>
          <div>
            <input type="text" {...register('contactnumber')} placeholder="Contact Number" className="w-full p-3 border border-blue-300 rounded" />
            {errors.contactnumber && <p className="text-red-600 text-sm">{errors.contactnumber.message}</p>}
          </div>
          <div className="relative">
            <input type={showPassword ? "text" : "password"} {...register('password')} placeholder="Password" className="w-full p-3 border border-blue-300 rounded pr-10" />
            <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>}
          </div>
          <div className="relative">
            <input type={showConfirmPassword ? "text" : "password"} {...register('confirmPassword')} placeholder="Confirm Password" className="w-full p-3 border border-blue-300 rounded pr-10" />
            <button type="button" onClick={toggleConfirmPasswordVisibility} className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.confirmPassword && <p className="text-red-600 text-sm">{errors.confirmPassword.message}</p>}
          </div>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Submit
          </button>
          <p className="text-black"> Already have an account?{' '}
            <button className="font-bold" onClick={() => router.push('/login')}>Login</button>
          </p>
       
        </form>
      </div>
    </div>
  );
};

export default SignUp;
