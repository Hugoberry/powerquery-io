---
title: Text.TrimEnd
---

# Text.TrimEnd


Menghapus semua karakter di belakang yang ditentukan.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

Mengembalikan hasil penghapusan semua karakter di belakang dari `text` yang ditentukan. Secara default, semua karakter spasi kosong di belakang akan dihapus.

-   `text`: Teks yang karakter di belakangnya akan dihapus.
-   `trim`: Menimpa karakter spasi kosong yang dipangkas secara default. Parameter ini dapat berupa karakter tunggal atau daftar karakter tunggal. Setiap operasi pemangkasan di belakang berhenti ketika karakter yang tidak dipangkas ditemukan.


## Examples

### Example #1
Menghapus spasi belakang dari " a b c d ".
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```


### Example #2
Hapus nol di belakang dari representasi teks bilangan titik mengambang yang diberi isian.
```powerquery
Text.TrimEnd("03.487700000", "0")
```

Result: 
```powerquery
"03.4877"
```


### Example #3
Hapus karakter pengisi di belakang nama akun dengan lebar tetap.
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
