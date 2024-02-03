---
title: Record.ToList
---

# Record.ToList


## Description

Tiek atgriezts vērtību saraksts, kurā ir ietvertas ievades ieraksta lauku vērtības.


## Syntax

```powerquery
Record.ToList(
    record as record
) as list
```


## Details

Tiek atgriezts vērtību saraksts, kurā ir ietvertas ievades ieraksta <code>record</code> lauku vērtības.


## Examples

### Example #1 
Izgūstiet ieraksta lauku vērtības.
```powerquery
Record.ToList([A = 1, B = 2, C = 3])
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
Record.Serialization
