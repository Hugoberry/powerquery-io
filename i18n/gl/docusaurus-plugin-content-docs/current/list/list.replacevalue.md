---
title: List.ReplaceValue
---

# List.ReplaceValue


Busca o valor especificado nunha lista e o substitúe.


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

Busca o valor especificado `oldValue` na lista de valores `list` e substitúe cada ocorrencia co valor de substitución `newValue`.


## Examples

### Example #1
Substituír todos os valores "a" na lista \{"a", "B", "a", "a"\} con "A".
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
