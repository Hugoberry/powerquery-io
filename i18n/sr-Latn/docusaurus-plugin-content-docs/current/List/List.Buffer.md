---
title: List.Buffer
---

# List.Buffer


## Description

Baferuje listu.


## Syntax

```powerquery
List.Buffer(
    list as list
) as list
```


## Details

Baferuje listu <code>list</code> u memoriju. Rezultat ovog poziva je stabilna lista.


## Examples

### Example #1 
Kreiranje stabilne kopije liste \{1..10}.
```powerquery
List.Buffer({1..10})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```




## Category
List.Selection
