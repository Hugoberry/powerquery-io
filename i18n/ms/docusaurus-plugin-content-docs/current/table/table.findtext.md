---
title: Table.FindText
---

# Table.FindText


Mengembalikan semua baris yang mengandungi teks yang ditentukan dalam jadual.


## Syntax

```powerquery
Table.FindText(
    table as table,
    text as text
) as table
```


## Remarks

Mengembalikan baris dalam jadual `table` yang mengandungi teks `text`. Jika teks tidak ditemui, jadual kosong dikembalikan.


## Examples

### Example #1
Cari baris dalam jadual yang mengandungi "Bob".
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
