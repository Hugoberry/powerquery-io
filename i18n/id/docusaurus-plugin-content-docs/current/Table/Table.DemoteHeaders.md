---
title: Table.DemoteHeaders
---

# Table.DemoteHeaders


## Description

Mendemosikan header kolom ke baris pertama nilai.


## Syntax

```powerquery
Table.DemoteHeaders(
    table as table
) as table
```


## Details

Mendemosikan header kolom (misalnya, nama kolom) ke baris pertama nilai. Nama kolom default adalah "Column1", "Column2", dan sebagainya.


## Examples

### Example #1 
Mendemosikan baris pertama nilai dalam tabel.
```powerquery
Table.DemoteHeaders(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "CustomerID", Column2 = "Name", Column3 = "Phone"],
    [Column1 = 1, Column2 = "Bob", Column3 = "123-4567"],
    [Column1 = 2, Column2 = "Jim", Column3 = "987-6543"]
})
```




## Category
Table.Column operations
