import React from 'react'
import * as yup from "yup"
export const forgotSchema = yup.object({
              email:yup.string().required(),
            })
