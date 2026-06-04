---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


Mencipta datetimezone daripada format datetimezone setempat, universal dan tersuai.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Remarks

Mencipta nilai `datetimezone` daripada perwakilan teks, `text`. Parameter `record` pilihan, `options`, boleh diberikan untuk menentukan sifat tambahan. `record` boleh mengandungi medan berikut:

-   `Format`: Nilai `teks` menunjukkan format untuk digunakan. Untuk butiran lanjut, pergi ke https://go.microsoft.com/fwlink/?linkid=2180104 dan https://go.microsoft.com/fwlink/?linkid=2180105. Mengabaikan medan ini atau memberikan `nol` akan menyebabkan penghuraian tarikh menggunakan usaha terbaik.
-   `Culture`: Apabila `Format` bukan nol, `Culture` mengawal sesetengah penentu format. Sebagai contoh, dalam `"en-US"` `"MMM"` is `"Jan", "Feb", "Mar", ...`, sementara dalam `"ru-RU"` `"MMM"` ialah `"янв", "фев", "мар", ...`. Apabila `Format` ialah `nol`, `Budaya` mengawal format lalai untuk digunakan. Apabila `Culture` adalah `null` atau diabaikan, `Culture.Current` digunakan.

Untuk menyokong aliran kerja legasi, `options` boleh juga merupakan nilai teks. Perkara ini mempunyai tingkah laku yang sama seolah-olah `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Menukar `"2010-12-31T01:30:00-08:00"` menjadi nilai `datetimezone`.
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2
Tukar menggunakan format tersuai dan budaya Jerman.
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3
Tukar menggunakan ISO 8601.
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
