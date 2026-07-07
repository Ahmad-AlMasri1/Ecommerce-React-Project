import React from 'react'
import * as yup from "yup"
export const loginSchema = yup.object({
              Email:yup.string().required(),
              Password:yup.string().required(),
            })
