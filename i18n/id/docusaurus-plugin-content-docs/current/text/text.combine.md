---
title: Text.Combine
---

# Text.Combine


Menggabungkan daftar nilai teks ke satu nilai teks.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Remarks

Mengembalikan hasil dari menggabungkan daftar nilai teks, `texts`, menjadi nilai teks tunggal. Setiap nilai `null` yang ada di `texts` diabaikan. `separator` opsional yang digunakan dalam teks gabungan akhir dapat ditentukan.


## Examples

### Example #1
Mengkombinasikan nilai teks "Seattle" dan "WA".
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2
Menggabungkan nilai teks "Seattle" dan "WA", dipisahkan oleh koma dan spasi.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3
Gabungkan nilai "Seattle", null, dan "WA", dipisahkan dengan koma dan spasi. (Perhatikan bahwa `null` diabaikan.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #4
Gabungkan nama depan, inisial tengah (jika ada), dan nama belakang menjadi nama lengkap individu.
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
