---
title: Table.FindText
---

# Table.FindText


## Description

Mengembalikan semua baris yang mengandungi teks yang ditentukan dalam jadual.


## Syntax

```powerquery
Table.FindText(
    table as table,
    text as text
) as table
```


## Details

Mengembalikan baris dalam jadual <code>table</code> yang mengandungi teks <code>text</code>. Jika teks tidak ditemui, jadual kosong dikembalikan.


## Examples

### Example #1 
Cari baris dalam jadual yang mengandungi &#34;Bob&#34;.
```powerquery
Table.FindText(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Bob"
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Row operations
