---
title: Text.TrimEnd
---

# Text.TrimEnd


Mengalih keluar semua aksara belakang yang ditentukan.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

Mengembalikan hasil daripada mengalih keluar semua aksara belakang daripada `text` yang ditentukan. Secara lalai, semua aksara ruang putih belakang dialih keluar.

-   `text`: Teks yang aksara belakangnya akan dialih keluar.
-   `trim`: Mengatasi aksara ruang putih yang dipangkas secara lalai. Parameter ini boleh menjadi aksara tunggal atau senarai aksara tunggal. Setiap operasi pangkasan belakang berhenti apabila aksara tidak dipangkas ditemui.


## Examples

### Example #1
Alih keluar ruang putih belakang daripada " a b c d ".
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```


### Example #2
Alih keluar sifar belakang daripada perwakilan teks nombor titik apung pad.
```powerquery
Text.TrimEnd("03.487700000", "0")
```

Result: 
```powerquery
"03.4877"
```


### Example #3
Alih keluar aksara pad belakang daripada nama akaun lebar tetap.
```powerquery
let
    Source = #table(type table [Name = text, Account Name= text, Interest = number],
    {
        {"Bob", "US-847263****@", 2.8410},
        {"Leslie", "FR-4648****@**", 3.8392},
        {"Ringo", "DE-2046790@***", 12.6600}
    }),
    #"Trimmed Account" = Table.TransformColumns(Source, {{"Account Name", each Text.TrimEnd(_, {"*", "@"})}})
in
    #"Trimmed Account"
```

Result: 
```powerquery
#table(type table [Name = text, Account Name = text, Interest = number],
{
    {"Bob", "US-847263", 2.841},
    {"Leslie", "FR-4648", 3.8392},
    {"Ringo", "DE-2046790", 12.66}
})
```




## Category
Text.Transformations
