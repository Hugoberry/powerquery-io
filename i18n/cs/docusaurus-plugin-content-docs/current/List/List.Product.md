---
title: List.Product
---

# List.Product


## Description

Vrátí součin čísel v seznamu.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Details

Vrátí součin číselných hodnot v seznamu <code>numbersList</code>, které nemají hodnotu null. Pokud seznam neobsahuje jiné hodnoty než null, vrátí hodnotu null.


## Examples

### Example #1 
Vrátí součin čísel v seznamu &lt;code&gt;\{1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
