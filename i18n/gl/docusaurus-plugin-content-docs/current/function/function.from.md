---
title: Function.From
---

# Function.From


Crea unha función cunha sinatura de parámetro específica sobre unha función que acepta un único argumento de lista.


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Remarks

Toma unha función unaria `function` e crea unha función co tipo `functionType` que constrúe unha lista a partir dos seus argumentos e a pasa a `function`.


## Examples

### Example #1
Converte List.Sum nunha función de dous argumentos cuxos argumentos se suman.
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2
Converte unha función que toma unha lista nunha función de dous argumentos.
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
