/*
 * @Author:  qiuwenbin <qiuwenbin@wshifu.com>
 * @Date: 2022-11-15 16:26:50
 * @LastEditors: qiuwenbin
 * @LastEditTime: 2022-11-15 16:28:08
 * @Description: 
 */
import { isEmpty,multiply } from "lodash";
export function test(a,b){
  if(!isEmpty(a)&&!isEmpty(b)){
    return multiply(a,b)
  }
}