---
title: List.Select
---

# List.Select


## Description

Retourneert een lijst met waarden die overeenkomen met de voorwaarde.


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Details

Retourneert een lijst met waarden uit de lijst <code>list</code> die overeenkomen met de selectievoorwaarde <code>selection</code>.


## Examples

### Example #1 
De waarden in de lijst \{1, -3, 4, 9, -2} opzoeken die groter zijn dan 0.
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```




## Category
List.Selection
