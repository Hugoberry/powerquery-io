---
title: Time.FromText
---

# Time.FromText


Mencipta Masa daripada format Masa setempat dan universal, dan tersuai.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Remarks

Mencipta nilai `time` daripada perwakilan teks, `text`. Parameter `record` pilihan, `options`, boleh diberikan untuk menentukan sifat tambahan. `record` boleh mengandungi medan berikut:

-   `Format`: Nilai `teks` menunjukkan format untuk digunakan. Untuk butiran lanjut, pergi ke https://go.microsoft.com/fwlink/?linkid=2180104 dan https://go.microsoft.com/fwlink/?linkid=2180105. Mengabaikan medan ini atau memberikan `null` akan menyebabkan penghuraian masa menggunakan usaha terbaik.
-   `Culture`: Apabila `Format` bukan nol, `Culture` mengawal sesetengah penentu format. Contohnya, dalam `"en-US"` `"tt"` ialah `"AM" or "PM"`, sementara dalam `"ar-EG"` `"tt"` ialah `"ص" or "م"`. Apabila `Format` ialah `nol`, `Budaya` mengawal format lalai untuk digunakan. Apabila `Culture` adalah `null` atau diabaikan, `Culture.Current` digunakan.

Untuk menyokong aliran kerja legasi, `options` boleh juga merupakan nilai teks. Perkara ini mempunyai tingkah laku yang sama seolah-olah `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Menukar `"10:12:31am"` menjadi nilai Masa.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2
Tukar `"1012"` menjadi nilai Time.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3
Tukar `"10"` menjadi nilai Time.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
