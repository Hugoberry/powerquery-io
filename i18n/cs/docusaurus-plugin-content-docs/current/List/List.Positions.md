---
title: List.Positions
---

# List.Positions


## Description

Vrátí seznam posunutí pro daný vstup.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Details

Vrátí seznam posunutí pro daný vstupní seznam <code>list</code>.    Při použití funkce List.Transform ke změně seznamu lze použít seznam pozic a poskytnout tak transformační funkci přístup k dané pozici.


## Examples

### Example #1 
Zjistí posunutí hodnot v seznamu \{1, 2, 3, 4, null, 5}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```




## Category
List.Selection
