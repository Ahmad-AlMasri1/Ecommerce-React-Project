import React from 'react'
import * as yup from "yup"
export const registerSchema = yup.object({
              UserName:yup.string().required().min(3).max(20),
              Email:yup.string().required(),
              Password:yup.string().required(),
              FullName:yup.string().required(),
              PhoneNumber:yup.string().required(),
            })
