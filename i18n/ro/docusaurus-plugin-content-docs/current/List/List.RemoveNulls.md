---
title: List.RemoveNulls
---

# List.RemoveNulls


## Description

Elimină toate valorile „null” din lista specificată.


## Syntax

```powerquery
List.RemoveNulls(
    list as list
) as list
```


## Details

Elimină toate ocurenţele valorilor „null” din <code>list</code>. Dacă nu există valori „null” în listă, se returnează lista originală.


## Examples

### Example #1 
Eliminaţi valorile „null” din lista \{1, 2, 3, null, 4, 5, null, 6}.
```powerquery
List.RemoveNulls({1, 2, 3, null, 4, 5, null, 6})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6}
```




## Category
List.Transformation functions
