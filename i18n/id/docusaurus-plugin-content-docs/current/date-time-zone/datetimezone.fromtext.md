---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


Membuat datetimezone dari format datetimezone lokal, universal, dan kustom.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Remarks

Membuat nilai `datetimezone` dari representasi tekstual, `text`. Parameter `catatan` opsional, `options`, dapat diberikan untuk menentukan properti tambahan. `catatan` dapat berisi bidang berikut:

-   `Format`: Nilai `text` yang menunjukkan format yang akan digunakan. Untuk detail selengkapnya, buka https://go.microsoft.com/fwlink/?linkid=2180104 dan https://go.microsoft.com/fwlink/?linkid=2180105. Menghilangkan bidang ini atau mengisi `null` akan menghasilkan penguraian tanggal menggunakan upaya terbaik.
-   `Kultur`: Ketika `Format` tidak null, `Kultur` mengontrol beberapa penentu format. Misalnya, `"MMM"` dalam `"en-US"` adalah `"Jan", "Feb", "Mar", ...`. Sedangkan dalam `"ru-RU"`, `"MMM"` adalah `"янв", "фев", "мар", ...`. Jika `Format` bernilai `null`, `Culture` mengontrol format default yang akan digunakan. Ketika `Kultur` adalah `null` atau dihilangkan, `Culture.Current` digunakan.

Untuk mendukung alur kerja warisan, `options` juga dapat berupa nilai teks. Ini memiliki perilaku yang sama halnya jika `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Mengonversi `"2010-12-31T01:30:00-08:00"` ke nilai `datetimezone`.
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2
Konversi menggunakan format kustom dan budaya Jerman.
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3
Konversi menggunakan ISO 8601.
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
