---
title: Text.Combine
---

# Text.Combine


Merangkaikan senarai nilai teks menjadi satu nilai teks.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Remarks

Mengembalikan hasil daripada menggabungkan senarai nilai teks, `texts` kepada nilai teks tunggal. Sebarang `nilai` nol yang terdapat dalam `texts` diabaikan. Ralat `separator` digunakan dalam teks gabungan akhir boleh ditentukan.


## Examples

### Example #1
Gabungkan nilai teks "Seattle" dan "WA".
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2
Gabungkan nilai teks "Seattle" dan "WA" dipisahkan oleh koman dan ruang.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3
Gabungkan nilai "Seattle", `nol` dan "WA", dipisahkan oleh koma dan ruang. (Ambil perhatian bahawa `nol` diabaikan.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #4
Gabungkan nama pertama, parap tengah (jika ada), dan nama akhir ke dalam nama penuh individu.
```powerquery
let
    Source = Table.FromRecords({
        [First Name = "Doug", Middle Initial = "J", Last Name = "Elis"],
        [First Name = "Anna", Middle Initial = "M", Last Name = "Jorayew"],
        [First Name = "Rada", Middle Initial = null, Last Name = "Mihaylova"]
    }),
    FullName = Table.AddColumn(Source, "Full Name", each Text.Combine({[First Name], [Middle Initial], [Last Name]}, " "))
in
    FullName
```

Result: 
```powerquery
Table.FromRecords({
    [First Name = "Doug", Middle Initial = "J", Last Name = "Elis", Full Name = "Doug J Elis"],
    [First Name = "Anna", Middle Initial = "M", Last Name = "Jorayew", Full Name = "Anna M Jorayew"],
    [First Name = "Rada", Middle Initial = null, Last Name = "Mihaylova", Full Name = "Rada Mihaylova"]
})
```




## Category
Text.Transformations
