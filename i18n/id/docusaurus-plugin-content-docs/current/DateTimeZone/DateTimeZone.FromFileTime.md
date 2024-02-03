---
title: DateTimeZone.FromFileTime
---

# DateTimeZone.FromFileTime


## Description

Membuat datetimezone dari panjang angka 64 bit.


## Syntax

```powerquery
DateTimeZone.FromFileTime(
    fileTime as number
) as datetimezone
```


## Details

Membuat nilai <code>datetimezone</code> dari nilai <code>fileTime</code> dan mengonversikannya ke zona waktu lokal. Filetime adalah nilai waktu file Windows yang menunjukkan jumlah interval 100-nanodetik yang telah berlalu sejak pukul 12:00 tengah malam, 1 Januari 1601 A.D. (C.E.) Waktu Universal Terkoordinasi (UTC).    


## Examples

### Example #1 
Mengkonversi &lt;code&gt;129876402529842245&lt;/code&gt; ke nilai datetimezone.
```powerquery
DateTimeZone.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetimezone(2012, 7, 24, 14, 50, 52.9842245, -7, 0)
```




## Category
DateTimeZone
