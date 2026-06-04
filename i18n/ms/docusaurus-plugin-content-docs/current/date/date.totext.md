---
title: Date.ToText
---

# Date.ToText


Mengembalikan perwakilan teks bagi nilai tarikh.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Mengembalikan perwakilan teks bagi `date`. Parameter `rekod` pilihan, `options`, mungkin diberikan untuk menentukan sifat tambahany. `culture` hanya digunakan untuk aliran kerja legasi. `record` boleh mengandungi medan berikut:

-   `Format`: Nilai `teks` menunjukkan format untuk digunakan. Untuk butiran lanjut, pergi ke https://go.microsoft.com/fwlink/?linkid=2180104 dan https://go.microsoft.com/fwlink/?linkid=2180105. Mengabaikan medan ini atau memberikan `null` akan menyebabkan pemformatan tarikh menggunakan tetapan lalai yang ditentukan oleh `Culture`.
-   `Culture`: Apabila `Format` bukan nol, `Culture` mengawal sesetengah penentu format. Sebagai contoh, dalam `"en-US"` `"MMM"` is `"Jan", "Feb", "Mar", ...`, sementara dalam `"ru-RU"` `"MMM"` ialah `"янв", "фев", "мар", ...`. Apabila `Format` ialah `nol`, `Budaya` mengawal format lalai untuk digunakan. Apabila `Culture` adalah `null` atau diabaikan, `Culture.Current` digunakan.

Untuk menyokong aliran kerja legasi, `options` dan `culture` boleh juga merupakan nilai teks. Perkara ini mempunyai tingkah laku yang sama seperti jika `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Tukar `#date(2010, 12, 31)` menjadi nilai `text`. *Output hasil mungkin berbeza bergantung pada budaya semasa.*
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2
Tukar menggunakan format tersuai dan budaya Jerman.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3
Cari tahun dalam kalendar Hijrah yang sepadan dengan 1 Januari 2000 dalam kalendar Gregorian.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
