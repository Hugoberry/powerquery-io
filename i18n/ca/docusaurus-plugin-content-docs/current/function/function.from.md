---
title: Function.From
---

# Function.From


Crea una funció amb una signatura de paràmetre específica afegida a una funció que inclou un únic argument de llista.


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Remarks

Utilitza una funció d'unari `function` i crea una funció nova amb el tipus `functionType`, que construeix una llista a partir dels seus arguments i la transmet a `function`.


## Examples

### Example #1
Converteix List.Sum en una funció de dos arguments que se sumen.
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2
Converteix una funció a partir d'una llista en una funció de dos arguments.
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
