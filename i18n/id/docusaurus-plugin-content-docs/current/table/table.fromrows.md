---
title: Table.FromRows
---

# Table.FromRows


Membuat tabel dari daftar nilai baris dan kolom opsional.


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Remarks

Membuat tabel dari daftar `rows` dengan setiap elemen daftar berupa daftar dalam yang berisi nilai kolom untuk satu baris. Daftar opsional nama kolom, tipe tabel, atau bilangan kolom dapat diberikan untuk `columns`.


## Examples

### Example #1
Membuat tabel dengan kolom \[CustomerID\] berisi nilai \{1, 2\} dan kolom \[Name\] berisi nilai \{"Bob", "Jim"\}, dan kolom \[Phone\] dengan nilai \{"123-4567", "987-6543"\}.
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    {"CustomerID", "Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2
Menghasilkan tabel dengan kolom \[CustomerID\] dengan nilai \{1, 2\}, kolom \[Name\] dengan nilai \{"Bob", "Jim"\}, dan kolom \[Phone\] dengan nilai \{"123-4567", "987-6543"\}, yang mana \[CustomerID\] adalah jenis bilangan, dan \[Name\] serta \[Phone\] adalah jenis teks.
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    type table [CustomerID = number, Name = text, Phone = text]
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```




## Category
Table.Table construction
