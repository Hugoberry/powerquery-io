---
title: Time.StartOfHour
---

# Time.StartOfHour


## Description

Mengembalikan permulaan jam.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Details

Mengembalikan permulaan jam yang diwakili oleh <code>dateTime</code>.    <code>dateTime</code> mesti nilai <code>time</code>, <code>datetime</code> atau <code>datetimezone</code>.


## Examples

### Example #1 
Cari permulaan jam bagi 10 Oktober 2011, 8:10:32PG.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
