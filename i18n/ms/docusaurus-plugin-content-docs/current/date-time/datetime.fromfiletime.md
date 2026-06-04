---
title: DateTime.FromFileTime
---

# DateTime.FromFileTime


Mencipta datetime daripada nombor panjang 64 bit.


## Syntax

```powerquery
DateTime.FromFileTime(
    fileTime as number
) as datetime
```


## Remarks

Mencipta nilai `datetime` daripada nilai `fileTime` dan menukarkannya kepada zon waktu tempatan. Filetime ialah nilai masa fail Windows yang mewakili bilangan selang masa 100-nanosaat yang telah berlalu sejak 12:00 tengah malam, 1 Januari 1601 A.D. (C.E.) Waktu Semesta Berkoordinat (UTC).


## Examples

### Example #1
Menukar `129876402529842245` menjadi nilai datetime.
```powerquery
DateTime.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetime(2012, 7, 24, 14, 50, 52.9842245)
```




## Category
DateTime
