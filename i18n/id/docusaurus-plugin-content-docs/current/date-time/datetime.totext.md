---
title: DateTime.ToText
---

# DateTime.ToText


Menghasilkan representasi tekstual dari nilai datetime.


## Syntax

```powerquery
DateTime.ToText(
    dateTime as datetime,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Menghasilkan representasi tekstual `dateTime`. Parameter `catatan` opsional, `options`, dapat diberikan untuk menentukan properti tambahan. `culture` hanya digunakan untuk alur kerja lama. `catatan` dapat berisi bidang berikut:

-   `Format`: Nilai `text` yang menunjukkan format yang akan digunakan. Untuk detail selengkapnya, buka https://go.microsoft.com/fwlink/?linkid=2180104 dan https://go.microsoft.com/fwlink/?linkid=2180105. Menghilangkan bidang ini atau mengisi `null` akan mengakibatkan pemformatan tanggal menggunakan default yang ditentukan oleh `Kultur`.
-   `Kultur`: Ketika `Format` tidak null, `Kultur` mengontrol beberapa penentu format. Misalnya, `"MMM"` dalam `"en-US"` adalah `"Jan", "Feb", "Mar", ...`. Sedangkan dalam `"ru-RU"`, `"MMM"` adalah `"янв", "фев", "мар", ...`. Jika `Format` bernilai `null`, `Culture` mengontrol format default yang akan digunakan. Ketika `Kultur` adalah `null` atau dihilangkan, `Culture.Current` digunakan.

Untuk mendukung alur kerja lama, `options` dan `culture` juga dapat berupa nilai teks. Ini memiliki perilaku yang sama halnya jika `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Mengonversi`#datetime(2010, 12, 31, 01, 30, 25)` ke nilai `text`. *Output hasil dapat bervariasi tergantung kultur saat ini.*
```powerquery
DateTime.ToText(#datetime(2010, 12, 31, 01, 30, 25))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM"
```


### Example #2
Konversi menggunakan format kustom dan budaya Jerman.
```powerquery
DateTime.ToText(#datetime(2010, 12, 30, 2, 4, 50.36973), [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730"
```


### Example #3
Konversi menggunakan pola ISO 8601.
```powerquery
DateTime.ToText(#datetime(2000, 2, 8, 3, 45, 12),[Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12Z"
```




## Category
DateTime
