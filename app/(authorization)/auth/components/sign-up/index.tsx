import React from 'react'
import { motion } from 'framer-motion'
import InputField from '@/app/(authorization)/auth/components/InputField'

const SignUp = () => {
  return (
      <motion.div
          className="w-96 bg-white rounded-xl shadow-2xl px-12 py-8 z-10"
          initial={{ x: -425 }}
          animate={{ x: 0, transition: { duration: 0.5 } }}
      >
        <p className="text-2xl text-center">Create your account</p>
        <form className="mt-6 text-sm">
          <div className="flex gap-2">
            <InputField
                title="First Name"
                type="text"
                placeholder="Enter your first name"
            />
            <InputField
                title="Last Name"
                type="text"
                placeholder="Enter your last name"
            />
          </div>
          <InputField
              title="Email"
              type="email"
              placeholder="Enter your email"
          />
          <InputField
              title="Password"
              type="password"
              placeholder="Enter a password"
          />
          <InputField
              title="Confirm password"
              type="password"
              placeholder="Confirm password"
          />
          <button className="w-full text-white font-bold bg-violet-700 rounded-3xl p-2 mt-4">
            Create account
          </button>
        </form>
      </motion.div>
  )
}

export default SignUp