---
title: Record.FieldCount
---

# Record.FieldCount


Retourneert het aantal velden uit de record.


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Remarks

Retourneert het aantal velden uit de record <code>record</code>.


## Examples

### Example #1 
Het aantal velden in de record zoeken.
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
