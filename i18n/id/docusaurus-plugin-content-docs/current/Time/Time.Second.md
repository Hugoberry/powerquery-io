---
title: Time.Second
---

# Time.Second


## Description

Menghasilkan komponen detik.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Details

Menghasilkan komponen detik dengan nilai <code>time</code>, <code>datetime</code>, atau <code>datetimezone</code> yang tersedia, <code>dateTime</code>.


## Examples

### Example #1 
Mencari nilai detik dalam nilai datetime.
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
