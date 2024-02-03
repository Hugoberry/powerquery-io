---
title: Time.Hour
---

# Time.Hour


## Description

Menghasilkan komponen jam.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Details

Menghasilkan komponen jam dengan nilai <code>time</code>, <code>datetime</code>, atau <code>datetimezone</code> yang tersedia, <code>dateTime</code>.


## Examples

### Example #1 
Mencari jam dalam #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
