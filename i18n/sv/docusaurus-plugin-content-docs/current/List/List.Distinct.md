---
title: List.Distinct
---

# List.Distinct


## Description

Returnerar en lista med värden med borttagna dubbletter.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

Returnerar en lista som innehåller alla värdena i listan <code>list</code> med borttagna dubbletter. Om listan är tom är resultatet en tom lista.


## Examples

### Example #1 
Ta bort dubbletter från listan \{1, 1, 2, 3, 3, 3}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
List.Selection
