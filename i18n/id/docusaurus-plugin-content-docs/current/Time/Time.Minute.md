---
title: Time.Minute
---

# Time.Minute


## Description

Menghasilkan komponen menit.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Details

Menghasilkan komponen menit dengan nilai <code>time</code>, <code>datetime</code>, atau <code>datetimezone</code> yang tersedia, <code>dateTime</code>.


## Examples

### Example #1 
Mencari menit dalam #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
