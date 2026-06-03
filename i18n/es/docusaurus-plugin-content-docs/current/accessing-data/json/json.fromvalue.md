---
title: Json.FromValue
---

# Json.FromValue


Produce una representación JSON de un determinado valor.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Remarks

Produce una representación JSON de un valor especificado `value` con una codificación de texto que especifica `encoding`. Si `encoding` se omite, se usa UTF8. Los valores se representan de la siguiente manera:

-   Los valores nulos, de texto y lógicos se representan con los tipos JSON correspondientes
-   Los números se representan con números en JSON, excepto `#infinity`, `-#infinity` y `#nan`, que se convierten en nulos
-   Las listas se representan como matrices JSON
-   Los registros se representan como objetos JSON
-   Las tablas se representan con una matriz de objetos
-   Los valores de date, time, datetime, datetimezone y duration se representan con texto ISO-8601
-   Los valores binarios se representan con texto con codificación base 64
-   Los tipos y las funciones generan un error


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
