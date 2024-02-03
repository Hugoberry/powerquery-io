---
title: Record.FieldCount
---

# Record.FieldCount


## Description

Tiek atgriezts ieraksta lauku skaits.


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Details

Tiek atgriezts ieraksta <code>record</code> lauku skaits.


## Examples

### Example #1 
Iegūstiet ieraksta lauku skaitu.
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
