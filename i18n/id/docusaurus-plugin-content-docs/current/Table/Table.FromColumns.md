---
title: Table.FromColumns
---

# Table.FromColumns


## Description

Membuat tabel dari daftar kolom dan nilai yang ditetapkan.


## Syntax

```powerquery
Table.FromColumns(
    lists as list,
    optional columns as any
) as table
```


## Details

Membuat tabel tipe <code>columns</code> dari daftar <code>lists</code> yang berisi daftar bersarang dengan nama dan nilai kolom.    Jika beberapa kolom memiliki lebih banyak nilai daripada yang lain, nilai yang tidak ada akan diisi dengan nilai default, 'null', jika kolom tersebut dapat dijadikan null.


## Examples

### Example #1 
Menghasilkan tabel dari daftar nama pelanggan dalam daftar. Tiap nilai dalam item daftar pelanggan menjadi nilai baris, dan tiap daftar menjadi kolom.
```powerquery
Table.FromColumns({
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
})
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1, Column2 = 2, Column3 = 3],
    [Column1 = "Bob", Column2 = "Jim", Column3 = "Paul"],
    [Column1 = "123-4567", Column2 = "987-6543", Column3 = "543-7890"]
})
```


### Example #2 
Membuat tabel dari daftar kolom tertentu dan daftar nama kolom.
```powerquery
Table.FromColumns(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"},
        {3, "Paul", "543-7890"}
    },
    {"CustomerID", "Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = 2, Phone = 3],
    [CustomerID = "Bob", Name = "Jim", Phone = "Paul"],
    [CustomerID = "123-4567", Name = "987-6543", Phone = "543-7890"]
})
```


### Example #3 
Membuat tabel dengan jumlah kolom yang berbeda per baris. Nilai baris yang tidak ada adalah null.
```powerquery
Table.FromColumns(
    {
        {1, 2, 3},
        {4, 5},
        {6, 7, 8, 9}
    },
    {"column1", "column2", "column3"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [column1 = 1, column2 = 4, column3 = 6],
    [column1 = 2, column2 = 5, column3 = 7],
    [column1 = 3, column2 = null, column3 = 8],
    [column1 = null, column2 = null, column3 = 9]
})
```




## Category
Table.Table construction