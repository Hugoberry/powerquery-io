---
title: Text.Trim
---

# Text.Trim


Menghapus semua karakter di depan dan di belakang yang ditentukan.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

Mengembalikan hasil penghapusan semua karakter di depan dan di belakang dari `text` yang ditentukan. Secara default, semua karakter spasi di depan dan belakang akan dihapus.

-   `text`: Teks yang karakter di depan dan di belakangnya akan dihapus.
-   `trim`: Menimpa karakter spasi kosong yang dipangkas secara default. Parameter ini dapat berupa karakter tunggal atau daftar karakter tunggal. Setiap operasi pemangkasan di depan dan di belakang berhenti ketika karakter yang tidak dipangkas ditemukan.


## Examples

### Example #1
Menghapus spasi depan dan belakang dari " a b c d ".
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```


### Example #2
Hapus nol di depan dan di belakang dari representasi teks angka.
```powerquery
Text.Trim("0000056.4200", "0")
```

Result: 
```powerquery
"56.42"
```


### Example #3
Hapus tanda kurung di depan dan di belakang dari tag HTML.
```powerquery
Text.Trim("<div/>", {"<", ">", "/"})
```

Result: 
```powerquery
"div"
```


### Example #4
Hapus karakter khusus yang digunakan di sekitar status penjualan tertunda.
```powerquery
let
    Source = #table(type table [Home Sale = text, Sales Date = date, Sales Status = text],
    {
        {"1620 Ferris Way", #date(2024, 8, 22), "##@@Pending@@##"},
        {"757 1st Ave. S.", #date(2024, 3, 15), "Sold"},
        {"22303 Fillmore", #date(2024, 10, 2), "##@@Pending@@##"}
    }),
    #"Trimmed Status" = Table.TransformColumns(Source, {"Sales Status", each Text.Trim(_, {"#", "@"})})
in
    #"Trimmed Status"
```

Result: 
```powerquery
#table(type table [Home Sale = text, Sales Date = date, Sales Status = text],
{
    {"1620 Ferris Way", #date(2024, 8, 22), "Pending"},
    {"757 1st Ave. S.", #date(2024, 3, 15), "Sold"},
    {"22303 Fillmore", #date(2024, 10, 2), "Pending"}
})
```




## Category
Text.Transformations
