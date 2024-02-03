---
title: List.RemoveNulls
---

# List.RemoveNulls


## Description

Verwijdert alle null-waarden uit de opgegeven lijst.


## Syntax

```powerquery
List.RemoveNulls(
    list as list
) as list
```


## Details

Verwijdert alle instanties van null-waarden in de <code>list</code>. Als er geen null-waarden in de lijst staan, wordt de oorspronkelijke lijst geretourneerd.


## Examples

### Example #1 
De null-waarden uit de lijst \{1, 2, 3, null, 4, 5, null, 6} verwijderen.
```powerquery
List.RemoveNulls({1, 2, 3, null, 4, 5, null, 6})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6}
```




## Category
List.Transformation functions
