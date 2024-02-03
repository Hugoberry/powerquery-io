---
title: Record.Field
---

# Record.Field


## Description

Tiek atgriezta norādītā ieraksta lauka vērtība.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Details

Tiek atgriezta norādītā ieraksta <code>record</code> lauka <code>field</code> vērtība. Ja lauks netiek atrasts, tiek aktivizēts izņēmums.


## Examples

### Example #1 
Iegūstiet ieraksta lauka &#34;CustomerID&#34; vērtību.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
