---
title: DateTimeZone.ToText
---

# DateTimeZone.ToText


Mengembalikan perwakilan teks bagi nilai datetimezone.


## Syntax

```powerquery
DateTimeZone.ToText(
    dateTimeZone as datetimezone,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Mengembalikan perwakilan teks bagi `dateTimeZone`. Parameter `rekod` pilihan, `options`, mungkin diberikan untuk menentukan sifat tambahany. `culture` hanya digunakan untuk aliran kerja legasi. `record` boleh mengandungi medan berikut:

-   `Format`: Nilai `teks` menunjukkan format untuk digunakan. Untuk butiran lanjut, pergi ke https://go.microsoft.com/fwlink/?linkid=2180104 dan https://go.microsoft.com/fwlink/?linkid=2180105. Mengabaikan medan ini atau memberikan `null` akan menyebabkan pemformatan tarikh menggunakan tetapan lalai yang ditentukan oleh `Culture`.
-   `Culture`: Apabila `Format` bukan nol, `Culture` mengawal sesetengah penentu format. Sebagai contoh, dalam `"en-US"` `"MMM"` is `"Jan", "Feb", "Mar", ...`, sementara dalam `"ru-RU"` `"MMM"` ialah `"янв", "фев", "мар", ...`. Apabila `Format` ialah `nol`, `Budaya` mengawal format lalai untuk digunakan. Apabila `Culture` adalah `null` atau diabaikan, `Culture.Current` digunakan.

Untuk menyokong aliran kerja legasi, `options` dan `culture` boleh juga merupakan nilai teks. Perkara ini mempunyai tingkah laku yang sama seperti jika `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Tukar `#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0)` kepada nilai `teks`. *Output hasil mungkin berbeza bergantung pada budaya semasa.*
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM +02:00"
```


### Example #2
Tukar menggunakan format tersuai dan budaya Jerman.
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 30, 2, 4, 50.36973, -8,0), [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730 -08:00"
```


### Example #3
Tukar menggunakan corak ISO 8601.
```powerquery
DateTimeZone.ToText(#datetimezone(2000, 2, 8, 3, 45, 12, 2, 0),[Format="O", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12.0000000+02:00"
```




## Category
DateTimeZone
