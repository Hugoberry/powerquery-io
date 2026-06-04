---
title: Record.Field
---

# Record.Field


Tiek atgriezta norādītā ieraksta lauka vērtība.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Remarks

Tiek atgriezta norādītā `field` vērtība šeit: `record`. Ja lauks nav atrasts, tiek izraisīta kļūda.


## Examples

### Example #1
Iegūstiet ieraksta lauka "CustomerID" vērtību.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
