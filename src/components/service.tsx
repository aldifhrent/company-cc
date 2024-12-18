import { Services } from '@/types/service'
import React from 'react'
import { AnimatedServices } from './ui/animated-service'

interface Service {
    service: Services[]
}
export default function Service({service}: Service) {
  return <AnimatedServices services={service}/>
}
