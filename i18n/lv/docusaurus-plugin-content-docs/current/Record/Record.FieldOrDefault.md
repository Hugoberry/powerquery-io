---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


## Description

Tiek atgriezta norādītā ieraksta lauka vērtība vai noklusējuma vērtība, ja ieraksts netiek atrasts.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Details

Tiek atgriezta norādītā ieraksta <code>record</code> lauka <code>field</code> vērtība. Ja lauks netiek atrasts, tiek atgriezta papildu vērtība <code>defaultValue</code>.


## Examples

### Example #1 
Iegūstiet ieraksta lauka &#34;Phone&#34; vērtību. Ja šāds lauks nepastāv, tiek atgriezta vērtība Null.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2 
Iegūstiet ieraksta lauka &#34;Phone&#34; vērtību. Ja šāds lauks nepastāv, tiek atgriezta noklusējuma vērtība.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
