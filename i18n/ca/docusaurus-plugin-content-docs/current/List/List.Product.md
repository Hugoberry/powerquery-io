---
title: List.Product
---

# List.Product


## Description

Retorna el producte dels nombres de la llista.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Details

Retorna el producte dels nombres que no siguin nuls de la llista, <code>numbersList</code>. Retorna el valor nul si no hi ha cap valor a la llista que no sigui nul.


## Examples

### Example #1 
Troba el producte dels nombres de la llista &lt;code&gt;\{1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
