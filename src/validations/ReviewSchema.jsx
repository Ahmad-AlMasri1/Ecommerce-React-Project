import React from 'react'
import * as yup from "yup"
export const ReviewSchema = yup.object({
              Comment:yup.string().required(),
            })
