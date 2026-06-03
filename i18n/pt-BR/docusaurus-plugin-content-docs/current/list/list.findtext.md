---
title: List.FindText
---

# List.FindText


Retorna uma lista de valores (incluindo os campos de registro) que contêm o texto especificado.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Remarks

Retorna uma lista de valores da lista `list` que continha o valor `text`.


## Examples

### Example #1
Localize os valores de texto da lista \{"a", "b", "ab"\} que correspondam a "a".
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
