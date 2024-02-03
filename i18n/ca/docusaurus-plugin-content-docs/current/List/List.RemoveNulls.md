---
title: List.RemoveNulls
---

# List.RemoveNulls


## Description

Suprimeix tots els valors &#34;null&#34; de la llista especificada.


## Syntax

```powerquery
List.RemoveNulls(
    list as list
) as list
```


## Details

Suprimeix totes les aparicions dels valors "null" de <code>list</code>. Si no hi ha cap valor "null" a la llista, es retorna la llista original.


## Examples

### Example #1 
Suprimeix els valors &#34;null&#34; de la llista \{1, 2, 3, null, 4, 5, null, 6}.
```powerquery
List.RemoveNulls({1, 2, 3, null, 4, 5, null, 6})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6}
```




## Category
List.Transformation functions
