---
title: Record.FieldCount
---

# Record.FieldCount


## Description

Vráti počet polí v zázname.


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Details

Vráti počet polí v zázname <code>record</code>.


## Examples

### Example #1 
Nájdite počet polí v zázname.
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
