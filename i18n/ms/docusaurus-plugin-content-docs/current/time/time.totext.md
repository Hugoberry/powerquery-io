---
title: Time.ToText
---

# Time.ToText


Mengembalikan perwakilan teks bagi nilai masa.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Mengembalikan perwakilan teks bagi `time`. Parameter `rekod` pilihan, `options`, mungkin diberikan untuk menentukan sifat tambahany. `culture` hanya digunakan untuk aliran kerja legasi. `record` boleh mengandungi medan berikut:

-   `Format`: Nilai `teks` menunjukkan format untuk digunakan. Untuk butiran lanjut, pergi ke https://go.microsoft.com/fwlink/?linkid=2180104 dan https://go.microsoft.com/fwlink/?linkid=2180105. Mengabaikan medan ini atau memberikan `null` akan menyebabkan pemformatan tarikh menggunakan tetapan lalai yang ditentukan oleh `Culture`.
-   `Culture`: Apabila `Format` bukan nol, `Culture` mengawal sesetengah penentu format. Contohnya, dalam `"en-US"` `"tt"` ialah `"AM" or "PM"`, sementara dalam `"ar-EG"` `"tt"` ialah `"ص" or "م"`. Apabila `Format` ialah `nol`, `Budaya` mengawal format lalai untuk digunakan. Apabila `Culture` adalah `null` atau diabaikan, `Culture.Current` digunakan.

Untuk menyokong aliran kerja legasi, `options` dan `culture` boleh juga merupakan nilai teks. Perkara ini mempunyai tingkah laku yang sama seperti jika `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Tukar `#time(01, 30, 25)` menjadi nilai `text`. *Output hasil mungkin berbeza bergantung pada budaya semasa.*
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2
Tukar menggunakan format tersuai dan budaya Jerman.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3
Tukar menggunakan format masa standard.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
