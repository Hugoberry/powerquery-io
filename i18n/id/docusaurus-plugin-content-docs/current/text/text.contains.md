---
title: Text.Contains
---

# Text.Contains


Menghasilkan apakah teks berisi substring.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Mendeteksi apakah `text` berisi nilai `substring`. Menghasilkan true jika menemukan nilai. Fungsi ini tidak mendukung wildcard atau regex.  
  
Argumen `comparer` opsional dapat digunakan untuk menentukan perbandingan yang tidak peka huruf besar/kecil atau sadar budaya dan lokal. Pembanding bawaan berikut tersedia dalam bahasa rumus:

-   `Comparer.Ordinal`: Digunakan untuk melakukan perbandingan ordinal peka huruf besar/kecil
-   `Comparer.OrdinalIgnoreCase`: Digunakan untuk melakukan perbandingan ordinal tidak peka huruf besar/kecil
-   `Comparer.FromCulture`: Digunakan untuk melakukan perbandingan yang sadar budaya

Jika argumen pertama null, fungsi ini mengembalikan null.  
  
Semua karakter diperlakukan secara harfiah. Misalnya, "DR", " DR", "DR ", dan " DR " tidak dianggap sama satu sama lain.


## Examples

### Example #1
Mencari apakah teks "Hello World" berisi "Hello".
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2
Mencari apakah teks "Hello World" berisi "hello".
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3
Mencari apakah teks "Hello World" berisi "hello", menggunakan pembanding yang tidak peka huruf besar/kecil.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Mencari baris di dalam tabel yang berisi "A-" atau "7" dalam kode akun.
```powerquery
let
    Source = #table(type table [Account Code = text, Posted Date = date, Sales = number],
    {
        {"US-2004", #date(2023,1,20), 580},
        {"CA-8843", #date(2023,7,18), 280},
        {"PA-1274", #date(2022,1,12), 90},
        {"PA-4323", #date(2023,4,14), 187},
        {"US-1200", #date(2022,12,14), 350},
        {"PTY-507", #date(2023,6,4), 110}
    }),
    #"Filtered rows" = Table.SelectRows(
        Source,
        each Text.Contains([Account Code], "A-") or
            Text.Contains([Account Code], "7"))
in
    #"Filtered rows"
    
```

Result: 
```powerquery
#table(type table [Account Code = text, Posted Date = date, Sales = number],
{
    {"CA-8843", #date(2023,7,18), 280},
    {"PA-1274", #date(2022,1,12), 90},
    {"PA-4323", #date(2023,4,14), 187},
    {"PTY-507", #date(2023,6,4), 110}
})
    
```




## Category
Text.Membership
