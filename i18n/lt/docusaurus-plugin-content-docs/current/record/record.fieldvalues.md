---
title: Record.FieldValues
---

# Record.FieldValues


Pateikiamas lauko reikšmių sąrašas.


## Syntax

```powerquery
Record.FieldValues(
    record as record
) as list
```


## Remarks

Pateikiamas lauko reikšmių įraše `record` sąrašas.


## Examples

### Example #1
Raskite laukų reikšmes įraše.
```powerquery
Record.FieldValues([CustomerID = 1, Name = "Bob", Phone = "123-4567"])
```

Result: 
```powerquery
{1, "Bob", "123-4567"}
```




## Category
Record.Selection
