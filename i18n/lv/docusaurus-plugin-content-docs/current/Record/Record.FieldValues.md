---
title: Record.FieldValues
---

# Record.FieldValues


## Description

Tiek atgriezts lauku vērtību saraksts.


## Syntax

```powerquery
Record.FieldValues(
    record as record
) as list
```


## Details

Tiek atgriezts ieraksta <code>record</code> lauku vērtību saraksts.


## Examples

### Example #1 
Iegūstiet ieraksta lauku vērtības.
```powerquery
Record.FieldValues([CustomerID = 1, Name = "Bob", Phone = "123-4567"])
```

Result: 
```powerquery
{1, "Bob", "123-4567"}
```




## Category
Record.Selection
