---
title: Date.ToText
---

# Date.ToText


Menghasilkan representasi tekstual dari nilai tanggal.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Menghasilkan representasi tekstual `date`. Parameter `catatan` opsional, `options`, dapat diberikan untuk menentukan properti tambahan. `culture` hanya digunakan untuk alur kerja lama. `catatan` dapat berisi bidang berikut:

-   `Format`: Nilai `text` yang menunjukkan format yang akan digunakan. Untuk detail selengkapnya, buka https://go.microsoft.com/fwlink/?linkid=2180104 dan https://go.microsoft.com/fwlink/?linkid=2180105. Menghilangkan bidang ini atau mengisi `null` akan mengakibatkan pemformatan tanggal menggunakan default yang ditentukan oleh `Kultur`.
-   `Kultur`: Ketika `Format` tidak null, `Kultur` mengontrol beberapa penentu format. Misalnya, `"MMM"` dalam `"en-US"` adalah `"Jan", "Feb", "Mar", ...`. Sedangkan dalam `"ru-RU"`, `"MMM"` adalah `"янв", "фев", "мар", ...`. Jika `Format` bernilai `null`, `Culture` mengontrol format default yang akan digunakan. Ketika `Kultur` adalah `null` atau dihilangkan, `Culture.Current` digunakan.

Untuk mendukung alur kerja lama, `options` dan `culture` juga dapat berupa nilai teks. Ini memiliki perilaku yang sama halnya jika `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Mengonversi `#date(2010, 12, 31)` ke nilai `text`. *Output hasil dapat bervariasi tergantung kultur saat ini.*
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2
Konversi menggunakan format kustom dan budaya Jerman.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3
Mencari tahun dalam kalender Hijriah yang sesuai dengan 1 Januari 2000 dalam kalender Gregorian.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
