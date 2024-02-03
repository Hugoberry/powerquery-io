---
title: List.Repeat
---

# List.Repeat


## Description

Vraća listu koja sadrži „count“ ponavljanja iz prvobitne liste.


## Syntax

```powerquery
List.Repeat(
    list as list,
    count as number
) as list
```


## Details

Vraća listu koja sadrži <code>count</code> ponavljanja iz prvobitne liste, <code>list</code>.


## Examples

### Example #1 
Kreiranje liste u kojoj se \{1, 2} ponavlja 3 puta.
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions
