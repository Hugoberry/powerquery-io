---
title: List.Product
---

# List.Product


## Description

Returnează produsul numerelor din listă.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Details

Returnează produsul numerelor care nu au valoarea null din listă, <code>numbersList</code>. Returnează null dacă nu există nicio valoare care nu este null în listă.


## Examples

### Example #1 
Găsiţi produsul numerelor din lista &lt;code&gt;\{1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
