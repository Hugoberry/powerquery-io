---
title: Time.Second
---

# Time.Second


Menghasilkan komponen detik.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Remarks

Menghasilkan komponen detik dengan nilai `time`, `datetime`, atau `datetimezone` yang tersedia, `dateTime`.


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
