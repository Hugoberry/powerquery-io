---
title: Record.Combine
---

# Record.Combine


## Description

Combines the records in the given list.


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Details

Combines the records in the given <code>records</code>. If the <code>records</code> contains non-record values, an error is returned.


## Examples

### Example #1 
Create a combined record from the records.
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
