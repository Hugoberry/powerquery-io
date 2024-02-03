---
title: Record.Combine
---

# Record.Combine


## Description

Kombinerer posterne på den angivne liste.


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Details

Kombinerer posterne på den angivne <code>records</code>. Hvis <code>records</code> indeholder værdier, der ikke er poster, returneres der en fejl.


## Examples

### Example #1 
Opret en kombineret post ud fra posterne.
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
