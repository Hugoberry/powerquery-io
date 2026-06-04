---
title: Text.Contains
---

# Text.Contains


Mengembalikan sama ada teks mengandungi subrentetan.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Mengesan sama ada `text` mengandungi nilai `substring`. Mengembalikan benar jika nilai ditemui. Fungsi ni tidak menyokong kad liar atau ungkapan biasa.  
  
Argumen pilihan `comparer` boleh digunakan untuk menentukan perbandingan tidak sensitif huruf atau budaya dan kesedaran tempatan. Pembanding terbina dalam berikut tersedia dalam bahasa formula:

-   `Comparer.Ordinal`: Digunakan untuk melaksanakan perbandingan ordinal sensitif huruf
-   `Comparer.OrdinalIgnoreCase`: Digunakan untuk melaksanakan perbandingan ordinal tidak sensitif huruf
-   `Comparer.FromCulture`: Digunakan untuk melaksanakan perbandingan kesedaran budaya

Jika argumen pertama adalah nol, fungsi ini mengembalikan nol.  
  
Semua aksara ditanggap secara literal. Sebagai contoh, "DR", " DR", "DR ", dan " DR " tidak dianggap sama antara satu sama lain.


## Examples

### Example #1
Cari sama ada teks "Hello World" mengandungi "Hello".
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2
Cari sama ada teks "Hello World" mengandungi "hello".
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3
Cari sama ada teks "Helo Dunia" mengandungi "hello", menggunakan pembanding tidak sensitif huruf.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Cari baris dalam jadual yang mengandungi sama ada "A-" atau "7" dalam kod akaun.
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
