---
title: Text.TrimStart
---

# Text.TrimStart


Menghapus semua karakter di depan yang ditentukan.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Remarks

Mengembalikan hasil penghapusan semua karakter di depan dari `text` yang ditentukan. Secara default, semua karakter spasi kosong di depan akan dihapus.

-   `text`: Teks yang karakter di depannya akan dihapus.
-   `trim`: Menimpa karakter spasi kosong yang dipangkas secara default. Parameter ini dapat berupa karakter tunggal atau daftar karakter tunggal. Setiap operasi pemangkasan di depan berhenti ketika karakter yang tidak dipangkas ditemukan.


## Examples

### Example #1
Menghapus spasi depan dari " a b c d ".
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```


### Example #2
Hapus nol di depan dari representasi teks angka.
```powerquery
Text.TrimStart("0000056.420", "0")
```

Result: 
```powerquery
"56.420"
```


### Example #3
Hapus karakter pengisi di depan nama akun dengan lebar tetap.
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
