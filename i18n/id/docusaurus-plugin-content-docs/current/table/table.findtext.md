---
title: Table.FindText
---

# Table.FindText


Menghasilkan semua baris yang berisi teks tertentu dalam tabel.


## Syntax

```powerquery
Table.FindText(
    table as table,
    text as text
) as table
```


## Remarks

Menghasilkan baris dalam tabel `table` yang berisi teks `text`. Jika teks tidak ditemukan, tabel kosong akan dihasilkan.


## Examples

### Example #1
Mencari baris dalam tabel yang berisi "Bob".
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
