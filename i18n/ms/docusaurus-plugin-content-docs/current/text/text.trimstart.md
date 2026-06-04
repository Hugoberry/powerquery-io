---
title: Text.TrimStart
---

# Text.TrimStart


Mengalih keluar semua aksara depan yang ditentukan.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Remarks

Mengembalikan hasil daripada mengalih keluar semua aksara belakang daripada `text` yang ditentukan. Secara lalai, semua aksara ruang putih depan dialih keluar.

-   `text`: Teks yang aksara depannya akan dialih keluar.
-   `trim`: Mengatasi aksara ruang putih yang dipangkas secara lalai. Parameter ini boleh menjadi aksara tunggal atau senarai aksara tunggal. Setiap operasi pangkasan depan berhenti apabila aksara yang tidak dipangkas ditemui.


## Examples

### Example #1
Alih keluar ruang putih hadapan daripada " a b c d ".
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```


### Example #2
Alih keluar sifar pendahulu daripada perwakilan teks nombor.
```powerquery
Text.TrimStart("0000056.420", "0")
```

Result: 
```powerquery
"56.420"
```


### Example #3
Alih keluar aksara pad pendahulu daripada nama akaun lebar tetap.
```powerquery
let
    Source = #table(type table [Name = text, Account Name= text, Interest = number],
    {
        {"Bob", "@****847263-US", 2.8410},
        {"Leslie", "@******4648-FR", 3.8392},
        {"Ringo", "@***2046790-DE", 12.6600}
    }),
    #"Trimmed Account" = Table.TransformColumns(Source, {{"Account Name", each Text.TrimStart(_, {"*", "@"})}})
in
    #"Trimmed Account"
```

Result: 
```powerquery
#table(type table [Name = text, Account Name = text, Interest = number],
{
    {"Bob", "847263-US", 2.841},
    {"Leslie", "4648-FR", 3.8392},
    {"Ringo", "2046790-DE", 12.66}
})
```




## Category
Text.Transformations
