---
title: Record.FieldCount
---

# Record.FieldCount


Returnerer antallet af felter i posten.


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Remarks

Returnerer antallet af felter i posten <code>record</code>.


## Examples

### Example #1 
Find antallet af felter i posten.
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
