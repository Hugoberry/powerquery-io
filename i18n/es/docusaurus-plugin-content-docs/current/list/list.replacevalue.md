---
title: List.ReplaceValue
---

# List.ReplaceValue


Busca en una lista el valor especificado y lo sustituye.


## Syntax

```powerquery
List.ReplaceValue(
    list as list,
    oldValue as any,
    newValue as any,
    replacer as function
) as list
```


## Remarks

Busca en una lista de valores `list` el valor `oldValue` y sustituye cada coincidencia con el valor de reemplazo `newValue`.


## Examples

### Example #1
Reemplaza todos los valores "a" de la lista \{"a", "B", "a", "a"\} con "A".
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
