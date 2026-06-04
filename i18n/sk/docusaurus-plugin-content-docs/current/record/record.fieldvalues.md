---
title: Record.FieldValues
---

# Record.FieldValues


Vráti zoznam hodnôt polí.


## Syntax

```powerquery
Record.FieldValues(
    record as record
) as list
```


## Remarks

Vráti zoznam hodnôt polí v zázname `record`.


## Examples

### Example #1
Nájdite v zázname hodnoty polí.
```powerquery
Record.FieldValues([CustomerID = 1, Name = "Bob", Phone = "123-4567"])
```

Result: 
```powerquery
{1, "Bob", "123-4567"}
```




## Category
Record.Selection
