---
title: Function.From
---

# Function.From


## Description

Crea unha función cunha sinatura de parámetro específica na parte superior dunha función que toma un argumento de lista única


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Details

Toma unha función unaria <code>function</code> e crea unha función co tipo <code>functionType</code> que constrúe unha lista a partir dos seus argumentos e a pasa a <code>function</code>.


## Examples

### Example #1 
Converte List.Sum nunha función de dous argumentos que se engaden xuntos
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2 
Converte unha función que toma unha lista nunha función de dous argumentos
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
