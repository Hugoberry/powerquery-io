---
title: List.Product
---

# List.Product


## Description

Vráti súčin čísel v zozname.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Details

Vráti súčin čísel s hodnotami rôznymi od null v zozname <code>numbersList</code>. Vráti hodnotu null, ak sa v zozname nenachádzajú žiadne hodnoty rôzne od null.


## Examples

### Example #1 
Nájdite súčin čísel v zozname &lt;code&gt;\{1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
