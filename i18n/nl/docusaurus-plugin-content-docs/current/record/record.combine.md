---
title: Record.Combine
---

# Record.Combine


Combineert de records uit de opgegeven lijst.


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Remarks

Combineert de records uit de opgegeven `records`. Als `records` geen recordwaarden bevat, wordt er een fout geretourneerd.


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
