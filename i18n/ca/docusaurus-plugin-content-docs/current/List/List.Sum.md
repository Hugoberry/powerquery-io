---
title: List.Sum
---

# List.Sum


## Description

Retorna la suma dels elements de la llista.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

Retorna la suma dels valors que no siguin nuls de la llista, <code>list</code>.  Retorna el valor nul si no hi ha cap valor a la llista que no sigui nul.


## Examples

### Example #1 
Troba la suma dels nombres de la llista &lt;code&gt;\{1, 2, 3}&lt;/code&gt;.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
