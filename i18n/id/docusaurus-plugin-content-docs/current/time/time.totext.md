---
title: Time.ToText
---

# Time.ToText


Menghasilkan representasi tekstual dari nilai waktu.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Menghasilkan representasi tekstual `time`. Parameter `catatan` opsional, `options`, dapat diberikan untuk menentukan properti tambahan. `culture` hanya digunakan untuk alur kerja lama. `catatan` dapat berisi bidang berikut:

-   `Format`: Nilai `text` yang menunjukkan format yang akan digunakan. Untuk detail selengkapnya, buka https://go.microsoft.com/fwlink/?linkid=2180104 dan https://go.microsoft.com/fwlink/?linkid=2180105. Menghilangkan bidang ini atau mengisi `null` akan mengakibatkan pemformatan tanggal menggunakan default yang ditentukan oleh `Kultur`.
-   `Kultur`: Ketika `Format` tidak null, `Kultur` mengontrol beberapa penentu format. Misalnya, dalam `"en-US"` `"tt"` adalah `"AM" atau "PM"`, sementara dalam `"ar-EG"` `"tt"` adalah `"ص" atau "م"`. Jika `Format` bernilai `null`, `Culture` mengontrol format default yang akan digunakan. Ketika `Kultur` adalah `null` atau dihilangkan, `Culture.Current` digunakan.

Untuk mendukung alur kerja lama, `options` dan `culture` juga dapat berupa nilai teks. Ini memiliki perilaku yang sama halnya jika `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Mengonversi `#time(01, 30, 25)` ke nilai `text`. *Output hasil dapat bervariasi tergantung nilai saat ini.*
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2
Konversi menggunakan format kustom dan budaya Jerman.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3
Konversi menggunakan format waktu standar.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
