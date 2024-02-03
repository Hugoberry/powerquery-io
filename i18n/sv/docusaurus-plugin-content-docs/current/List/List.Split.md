---
title: List.Split
---

# List.Split


## Description

Delar upp den angivna listan i en lista med listor med hjälp av den angivna sidstorleken.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Details

Delar upp <code>list</code> i en lista med listor där det första elementet i utdatalistan är en lista som innehåller först <code>pageSize</code> element från    källistan, nästa element i utdatalistan är en lista som innehåller följande <code>pageSize</code> element från källistan osv.



## Category
List.Transformation functions
