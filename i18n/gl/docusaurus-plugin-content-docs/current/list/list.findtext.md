---
title: List.FindText
---

# List.FindText


Devolve unha lista de valores (incluíndo campos de rexistro) que conteñen o texto indicado.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Remarks

Devolve unha lista de valores da lista `list` que contiñan o valor `text`.


## Examples

### Example #1
Buscar os valores de texto na lista \{"a", "b", "ab"\} que coincidan con "a".
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
