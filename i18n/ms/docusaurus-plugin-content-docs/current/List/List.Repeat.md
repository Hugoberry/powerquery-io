---
title: List.Repeat
---

# List.Repeat


## Description

Mengembalikan senarai yang merupakan perulangan kiraan senarai asal.


## Syntax

```powerquery
List.Repeat(
    list as list,
    count as number
) as list
```


## Details

Mengembalikan senarai yang merupakan <code>count</code> perulangan senarai asal, <code>list</code>.


## Examples

### Example #1 
Cipta senarai yang mempunyai \{1, 2} diulang 3 kali.
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions
