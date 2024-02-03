---
title: Record.Combine
---

# Record.Combine


## Description

Kombinerar posterna i den angivna listan.


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Details

Kombinerar posterna i angiven <code>records</code>. Om <code>records</code> innehåller värden utan poster returneras ett fel.


## Examples

### Example #1 
Skapa en kombinerad post från posterna.
```powerquery
Record.Combine({
    [CustomerID = 1, Name = "Bob"],
    [Phone = "123-4567"]
})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Transformations
