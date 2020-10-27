import {cityAxios} from '@/network/publicAxios'

export function localCity(type){
  return cityAxios.get('',{params:{
    type:type
  }})
}

