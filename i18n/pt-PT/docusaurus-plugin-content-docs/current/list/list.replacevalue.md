---
title: List.ReplaceValue
---

# List.ReplaceValue


Pesquisa um valor especificado numa lista e substitui-o.


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

Pesquisa o valor `oldValue` numa lista de valores, `list`, e substitui cada ocorrência pelo valor de substituição `newValue`.


## Examples

### Example #1
Substituir todos os valores "a" existentes na lista \{"a", "B", "a", "a"\} por "A".
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
