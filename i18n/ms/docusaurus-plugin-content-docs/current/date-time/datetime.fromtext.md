---
title: DateTime.FromText
---

# DateTime.FromText


Mencipta datetimezone daripada format datetime tempatan dan universal.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Remarks

Mencipta nilai `tarikhmasa` daripada perwakilan teks, `text`. Parameter `record` pilihan, `options`, boleh diberikan untuk menentukan sifat tambahan. `record` boleh mengandungi medan berikut:

-   `Format`: Nilai `teks` menunjukkan format untuk digunakan. Untuk butiran lanjut, pergi ke https://go.microsoft.com/fwlink/?linkid=2180104 dan https://go.microsoft.com/fwlink/?linkid=2180105. Mengabaikan medan ini atau memberikan `nol` akan menyebabkan penghuraian tarikh menggunakan usaha terbaik.
-   `Culture`: Apabila `Format` bukan nol, `Culture` mengawal sesetengah penentu format. Sebagai contoh, dalam `"en-US"` `"MMM"` is `"Jan", "Feb", "Mar", ...`, sementara dalam `"ru-RU"` `"MMM"` ialah `"янв", "фев", "мар", ...`. Apabila `Format` ialah `nol`, `Budaya` mengawal format lalai untuk digunakan. Apabila `Culture` adalah `null` atau diabaikan, `Culture.Current` digunakan.

Untuk menyokong aliran kerja legasi, `options` boleh juga merupakan nilai teks. Perkara ini mempunyai tingkah laku yang sama seolah-olah `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Tukar `"2010-12-31T01:30:00"` menjadi nilai tarikhmasa.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2
Tukar `"2010-12-31T01:30:00.121212"` menjadi nilai tarikhmasa.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3
Tukar `"2010-12-31T01:30:00"` menjadi nilai tarikhmasa.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4
Tukar `"20101231T013000"` menjadi nilai tarikhmasa.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
