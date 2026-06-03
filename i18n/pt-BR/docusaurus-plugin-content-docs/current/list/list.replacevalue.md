---
title: List.ReplaceValue
---

# List.ReplaceValue


Procura o valor especificado em uma lista e a substitui.


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

Procura o valor `oldValue` em uma lista de valores, `list`, e substitui cada ocorrência pelo valor de substituição `newValue`.


## Examples

### Example #1
Substitua todos os valores "a" na lista \{"a", "B", "a", "a"\} por "A".
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
