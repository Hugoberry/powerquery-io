---
title: Table.Split
---

# Table.Split


## Description

Memisahkan jadual yang ditentukan kepada senarai jadual menggunakan saiz halaman yang ditentukan.


## Syntax

```powerquery
Table.Split(
    table as table,
    pageSize as number
) as list
```


## Details

Memisahkan <code>table</code> kepada senarai jadual dengan unsur pertama senarai ialah jadual yang mengandungi <code>pageSize</code> baris pertama daripada    jadual sumber, unsur seterusnya dalam senarai ialah jadual yang mengandungi <code>pageSize</code> baris berikutnya daripada jadual sumber, dan sebagainya.


## Examples

### Example #1 
Pisahkan jadual lima rekod kepada dua rekod setiap satunya.
```powerquery
let
    Customers = Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Cristina", Phone = "232-1550"],
        [CustomerID = 5, Name = "Anita", Phone = "530-1459"]
    })
in
    Table.Split(Customers, 2)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    }),
    Table.FromRecords({
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Cristina", Phone = "232-1550"]
    }),
    Table.FromRecords({
        [CustomerID = 5, Name = "Anita", Phone = "530-1459"]
    })
}
```




## Category
Table.Transformation
