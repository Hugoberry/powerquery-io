---
title: Function.From
---

# Function.From


Crea una función con una firma de parámetro específica encima de una función que toma un único argumento de lista.


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Remarks

Utiliza una función de unario `function` y crea una función nueva con el tipo `functionType`, que construye una lista a partir de sus argumentos y la pasa a `function`.


## Examples

### Example #1
Convierte List.Sum en una función de dos argumentos cuyos argumentos se agregan juntos.
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2
Convierte una función que toma una lista en una función de dos argumentos.
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
