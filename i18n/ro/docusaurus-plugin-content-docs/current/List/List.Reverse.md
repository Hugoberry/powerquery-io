---
title: List.Reverse
---

# List.Reverse


## Description

Inversează numărul valorilor din listă.


## Syntax

```powerquery
List.Reverse(
    list as list
) as list
```


## Details

Returnează o listă cu valorile din lista <code>list</code> în ordine inversă.


## Examples

### Example #1 
Creaţi o listă de la \{1..10} în ordine inversă.
```powerquery
List.Reverse({1..10})
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```




## Category
List.Transformation functions
