---
title: List.Repeat
---

# List.Repeat


## Description

Returnează o listă care reprezintă repetiţiile numărului din lista originală.


## Syntax

```powerquery
List.Repeat(
    list as list,
    count as number
) as list
```


## Details

Returnează o listă care reprezintă repetiţiile <code>count</code> din lista originală, <code>list</code>.


## Examples

### Example #1 
Creaţi o listă care are \{1, 2} repetate de 3 ori.
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions
