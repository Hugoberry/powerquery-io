---
title: List.RemoveNulls
---

# List.RemoveNulls


## Description

Tar bort alla null-värden från den angivna listan.


## Syntax

```powerquery
List.RemoveNulls(
    list as list
) as list
```


## Details

Tar bort alla förekomster av null-värden i <code>list</code>. Om det inte finns några null-värden i listan returneras den ursprungliga listan.


## Examples

### Example #1 
Ta bort null-värden från listan \{1, 2, 3, null, 4, 5, null, 6}.
```powerquery
List.RemoveNulls({1, 2, 3, null, 4, 5, null, 6})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6}
```




## Category
List.Transformation functions
