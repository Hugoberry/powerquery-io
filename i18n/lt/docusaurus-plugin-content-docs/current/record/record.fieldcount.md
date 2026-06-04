---
title: Record.FieldCount
---

# Record.FieldCount


Pateikiamas laukų skaičius įraše.


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Remarks

Pateikiamas laukų skaičius įraše `record`.


## Examples

### Example #1
Raskite laukų skaičių įraše.
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
