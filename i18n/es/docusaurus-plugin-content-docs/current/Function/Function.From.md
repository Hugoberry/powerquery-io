---
title: Function.From
---

# Function.From


Crea una función con una firma de parámetro específica agregada a una función que utiliza un único argumento de lista.


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Remarks

Utiliza una función de unario <code>function</code> y crea una función nueva con el tipo <code>functionType</code>, que construye una lista a partir de sus argumentos y la pasa a <code>function</code>.


## Examples

### Example #1 
Convierte List.Sum en una función de dos argumentos que se agregan.
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2 
Convierte una función a partir de una lista en una función de dos argumentos.
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
