---
title: List.Positions
---

# List.Positions


## Description

Returnează o listă de decalaje pentru datele introduse.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Details

Returnează o listă de decalaje pentru lista de intrare <code>list</code>.    Când se utilizează List.Transform pentru a modifica o listă, lista de poziții poate fi utilizată pentru a oferi acces de transformare la poziție.


## Examples

### Example #1 
Aflaţi decalajele valorilor din lista \{1, 2, 3, 4, null, 5}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```




## Category
List.Selection
