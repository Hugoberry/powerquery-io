---
title: DateTime.FromFileTime
---

# DateTime.FromFileTime


## Description

Mencipta datetime daripada nombor panjang 64 bit.


## Syntax

```powerquery
DateTime.FromFileTime(
    fileTime as number
) as datetime
```


## Details

Mencipta nilai <code>datetime</code> daripada nilai <code>fileTime</code> dan menukarkannya kepada zon waktu tempatan. Filetime ialah nilai masa fail Windows yang mewakili bilangan selang masa 100-nanosaat yang telah berlalu sejak 12:00 tengah malam, 1 Januari 1601 A.D. (C.E.) Waktu Semesta Berkoordinat (UTC).


## Examples

### Example #1 
Menukar &lt;code&gt;129876402529842245&lt;/code&gt; menjadi nilai datetime.
```powerquery
DateTime.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetime(2012, 7, 24, 14, 50, 52.9842245)
```




## Category
DateTime
