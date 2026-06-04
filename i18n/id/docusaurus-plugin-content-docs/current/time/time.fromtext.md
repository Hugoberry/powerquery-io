---
title: Time.FromText
---

# Time.FromText


Membuat Waktu dari format Waktu lokal dan universal, serta kustom.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Remarks

Membuat nilai `time` dari representasi tekstual, `text`. Parameter `catatan` opsional, `options`, dapat diberikan untuk menentukan properti tambahan. `catatan` dapat berisi bidang berikut:

-   `Format`: Nilai `text` yang menunjukkan format yang akan digunakan. Untuk detail selengkapnya, buka https://go.microsoft.com/fwlink/?linkid=2180104 dan https://go.microsoft.com/fwlink/?linkid=2180105. Menghilangkan bidang ini atau mengisi `null` akan menghasilkan penguraian waktu menggunakan upaya terbaik.
-   `Kultur`: Ketika `Format` tidak null, `Kultur` mengontrol beberapa penentu format. Misalnya, dalam `"en-US"` `"tt"` adalah `"AM" atau "PM"`, sementara dalam `"ar-EG"` `"tt"` adalah `"ص" atau "م"`. Jika `Format` bernilai `null`, `Culture` mengontrol format default yang akan digunakan. Ketika `Kultur` adalah `null` atau dihilangkan, `Culture.Current` digunakan.

Untuk mendukung alur kerja warisan, `options` juga dapat berupa nilai teks. Ini memiliki perilaku yang sama halnya jika `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Mengkonversi `"10:12:31am"` ke nilai Waktu.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2
Mengonversi `"1012"` ke dalam nilai Time.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3
Mengonversi `"10"` ke dalam nilai Time.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
