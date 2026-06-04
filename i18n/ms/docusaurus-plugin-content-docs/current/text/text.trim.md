---
title: Text.Trim
---

# Text.Trim


Mengalih keluar semua aksara depan dan belakang yang ditentukan.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

Mengembalikan hasil daripada mengalih keluar semua aksara depan dan belakang daripada `text` yang ditentukan. Secara lalai, semua aksara ruang putih depan dan belakang dialih keluar.

-   `text`: Teks yang aksara depan dan belakangnya akan dialih keluar.
-   `trim`: Mengatasi aksara ruang putih yang dipangkas secara lalai. Parameter ini boleh menjadi aksara tunggal atau senarai aksara tunggal. Setiap operasi pangkasan depan dan belakang berhenti apabila aksara yang tidak dipangkas ditemui.


## Examples

### Example #1
Alih keluar semua ruang putih hadapan dan belakang daripada " a b c d ".
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```


### Example #2
Alih keluar sifar pendahulu dan belakang daripada perwakilan teks nombor.
```powerquery
Text.Trim("0000056.4200", "0")
```

Result: 
```powerquery
"56.42"
```


### Example #3
Alih keluar tanda kurung depan dan belakang daripada tag HTML.
```powerquery
Text.Trim("<div/>", {"<", ">", "/"})
```

Result: 
```powerquery
"div"
```


### Example #4
Alih keluar aksara khas yang digunakan di sekitar status jualan belum selesai.
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
