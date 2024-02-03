---
title: List.ReplaceRange
---

# List.ReplaceRange


## Description

Substitúe o número de valores de conta comezando na posición cos valores de substitución.


## Syntax

```powerquery
List.ReplaceRange(
    list as list,
    index as number,
    count as number,
    replaceWith as list
) as list
```


## Details

Substitúe os valores <code>count</code> na <code>list</code> coa lista <code>replaceWith</code>, comezando na posición especificada, <code>index</code>.


## Examples

### Example #1 
Substituír \{7, 8, 9} da lista \{1, 2, 7, 8, 9, 5} con \{3, 4}.
```powerquery
List.ReplaceRange({1, 2, 7, 8, 9, 5}, 2, 3, {3, 4})
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
