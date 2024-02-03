---
title: Json.FromValue
---

# Json.FromValue


## Description

Produce una representación JSON de un determinado valor.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Details

Produce una representación JSON de un valor especificado <code>value</code> con una codificación de texto que especifica <code>encoding</code>. Si <code>encoding</code> se omite, se usa UTF8. Los valores se representan de la siguiente manera:<br /> <ul>        <li>Los valores nulos, de texto y lógicos se representan con los tipos JSON correspondientes</li>        <li>Los números se representan con números en JSON, excepto <code>#infinity</code>, <code>-#infinity</code> y <code>#nan</code>, que se convierten en nulos</li>        <li>Las listas se representan con matrices JSON</li>        <li>Los registros se representan con objetos JSON</li>        <li>Las tablas se representan con una matriz de objetos</li>        <li>Los valores de date, time, datetime, datetimezone y duration se representan con texto ISO-8601</li>        <li>Los valores binarios se representan con texto con codificación base 64</li>        <li>Los tipos y las funciones generan un error</li> </ul>    


## Examples

### Example #1 
Convertir un valor complejo a JSON.
```powerquery
Text.FromBinary(Json.FromValue([A = {1, true, "3"}, B = #date(2012, 3, 25)]))
```

Result: 
```powerquery
"{""A"":[1,true,""3""],""B"":""2012-03-25""}"
```




## Category
Text.Conversions from and to text
