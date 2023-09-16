"use strict"
/*   oop classes  */
//? OOP: Object Oriented Programming
//? DRY: Don't Repeat Yourself
//? BLUEPRINT: Taslak (Mimarların kullandığı mavi şablon kağıdı)
//? CLASS: Obje türetmek için kullanılacak şablon.

                //CLASS OLUŞTURMA
//1Class Declaration:
//----- class PascalNamedClassName{...}


//2Class Expression:
const PascalNamedClassName = class{
    undefinedProperty
    extraField="field-value"
    methodName1(){
        return this
    }
    methodName2(){
        return this.extraField
    }
   }
  
//? Instance
const instance = new PascalNamedClassName()
console.log(instance)
console.log(instance.methodName2())