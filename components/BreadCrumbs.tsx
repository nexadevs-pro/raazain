'use client'
import { getProductDetails } from '@/lib/actions/actions'
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react'
import React from 'react'


const BreadCrumbs = ({ productInfo }: { productInfo: ProductType }) => {
  return (
    <Breadcrumbs>
        <BreadcrumbItem color='primary'>Home</BreadcrumbItem>
        <BreadcrumbItem color='primary'>{productInfo.category}</BreadcrumbItem>
        <BreadcrumbItem className='line-clamp-1'>{productInfo.title}</BreadcrumbItem>
    </Breadcrumbs>
  )
}

export default BreadCrumbs