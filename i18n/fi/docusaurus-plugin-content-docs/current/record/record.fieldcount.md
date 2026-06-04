---
title: Record.FieldCount
---

# Record.FieldCount


Palauttaa tietueen kenttien määrän.


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Remarks

Palauttaa tietueen `record` kenttien määrän.


## Examples

### Example #1
Selvitä kenttien määrä tietueessa.
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
