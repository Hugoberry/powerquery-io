---
title: List.Positions
---

# List.Positions


## Description

Vraća listu pomaka za unos.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Details

Vraća listu pomaka za listu unosa <code>list</code>.    Kada se za promenu liste koristi List.Transform, može se koristiti lista položaja da bi se transformaciji omogućio pristup položaju.


## Examples

### Example #1 
Pronalaženje pomaka za vrednosti sa liste \{1, 2, 3, 4, null, 5}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```




## Category
List.Selection
