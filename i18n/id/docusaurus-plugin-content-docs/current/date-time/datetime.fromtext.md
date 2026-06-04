---
title: DateTime.FromText
---

# DateTime.FromText


Membuat datetimezone dari format datetime lokal dan universal.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Remarks

Membuat nilai `datetime` dari representasi tekstual, `text`. Parameter `catatan` opsional, `options`, dapat diberikan untuk menentukan properti tambahan. `catatan` dapat berisi bidang berikut:

-   `Format`: Nilai `text` yang menunjukkan format yang akan digunakan. Untuk detail selengkapnya, buka https://go.microsoft.com/fwlink/?linkid=2180104 dan https://go.microsoft.com/fwlink/?linkid=2180105. Menghilangkan bidang ini atau mengisi `null` akan menghasilkan penguraian tanggal menggunakan upaya terbaik.
-   `Kultur`: Ketika `Format` tidak null, `Kultur` mengontrol beberapa penentu format. Misalnya, `"MMM"` dalam `"en-US"` adalah `"Jan", "Feb", "Mar", ...`. Sedangkan dalam `"ru-RU"`, `"MMM"` adalah `"янв", "фев", "мар", ...`. Jika `Format` bernilai `null`, `Culture` mengontrol format default yang akan digunakan. Ketika `Kultur` adalah `null` atau dihilangkan, `Culture.Current` digunakan.

Untuk mendukung alur kerja warisan, `options` juga dapat berupa nilai teks. Ini memiliki perilaku yang sama halnya jika `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Mengonversi `"2010-12-31T01:30:00"` ke nilai tanggalwaktu.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2
Mengonversi`"2010-12-31T01:30:00.121212"` ke nilai tanggalwaktu.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3
Mengonversi `"2010-12-31T01:30:00"` ke nilai tanggalwaktu.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4
Mengonversi `"20101231T013000"` ke nilai tanggalwaktu.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
