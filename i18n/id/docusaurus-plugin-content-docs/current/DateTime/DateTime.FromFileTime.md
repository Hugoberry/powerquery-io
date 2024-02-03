---
title: DateTime.FromFileTime
---

# DateTime.FromFileTime


## Description

Membuat datetime dari panjang angka 64 bit.


## Syntax

```powerquery
DateTime.FromFileTime(
    fileTime as number
) as datetime
```


## Details

Membuat nilai <code>datetime</code> dari nilai <code>fileTime</code> dan mengkonversikannya ke zona waktu lokal. Filetime adalah nilai waktu file Windows yang menunjukkan jumlah interval 100-nanodetik yang telah berlalu sejak pukul 12.00 tengah malam, 1 Januari 1601 A.D. (C.E.) Waktu Universal Terkoordinasi (UTC).


## Examples

### Example #1 
Mengkonversi &lt;code&gt;129876402529842245&lt;/code&gt; ke nilai datetime.
```powerquery
DateTime.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetime(2012, 7, 24, 14, 50, 52.9842245)
```




## Category
DateTime
