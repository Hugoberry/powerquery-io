---
title: List.Positions
---

# List.Positions


## Description

Returnerer en liste over forskydninger for inputtet.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Details

Returnerer en liste over forskydninger for inputlisten <code>list</code>.    Når du bruger List.Transform til at ændre en liste, kan listen over positioner bruges til at give transformationens adgang til positionen.


## Examples

### Example #1 
Find forskydningerne for værdier på listen \{1, 2, 3, 4, null, 5}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```




## Category
List.Selection
