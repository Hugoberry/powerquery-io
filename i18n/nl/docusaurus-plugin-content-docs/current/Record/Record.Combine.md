---
title: Record.Combine
---

# Record.Combine


## Description

Combineert de records uit de opgegeven lijst.


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Details

Combineert de records uit de opgegeven <code>records</code>. Als <code>records</code> geen recordwaarden bevat, wordt er een fout geretourneerd.


## Examples

### Example #1 
Een gecombineerde record van de records maken.
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
