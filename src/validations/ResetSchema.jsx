import React from 'react'
import * as yup from "yup"
export const resetSchema = yup.object({
    
              code:yup.string().required(),
              email:yup.string().required(),
              newPassword:yup.string().required(),
              
            })
