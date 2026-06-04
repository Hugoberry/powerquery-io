---
title: Table.FromRecords
---

# Table.FromRecords


Menukarkan senarai rekod kepada jadual.


## Syntax

```powerquery
Table.FromRecords(
    records as list,
    optional columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Menukar senarai rekod yang ditentukan kepada jadual.

-   `records`: Senarai rekod untuk ditukar kepada jadual.
-   `columns`: (Pilihan) Senarai nama lajur jadual atau jenis jadual.
-   `missingField`: (Pilihan) Menentukan cara mengendalikan medan yang hilang dalam baris. Gunakan salah satu nilai berikut:
    -   `MissingField.Error`: Sebarang medan yang hilang menghasilkan ralat (lalai).
    -   `MissingField.UseNull`: Sebarang medan yang hilang disertakan sebagai `nilai` null.
      
    Menggunakan `MissingField.Ignore` dalam parameter ini menghasilkan ralat.


## Examples

### Example #1
Mencipta jadual daripada rekod, menggunakan nama medan rekod sebagai nama lajur.
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```

Result: 
```powerquery
#table(type table[CustomerID = any, Name = any, Phone = any],
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
})
```


### Example #2
Mencipta jadual daripada rekod dengan lajur yang dijeniskan dan pilih bilangan lajur.
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[CustomerID = 1, Name = "Bob"]},
        type table[CustomerID = Number.Type, Name = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"CustomerID"}
```


### Example #3
Cipta jadual yang mengandungi nama pertama, awalan tengah dan nama akhir pelanggan daripada rekod yang ditentukan. Jika sebarang nilai hilang, gantikan nilai tersebut dengan `null`.
```powerquery
Table.FromRecords({
        [CustomerID = 1, FirstName = "Bob", MiddleInitial = "C", LastName = "Smith"],
        [CustomerID = 2, FirstName = "Sarah", LastName = "Jones"],
        [CustomerID = 3, FirstName = "Harry", MiddleInitial = "H"]
    },
    type table [FirstName = nullable text, MiddleInitial = nullable text, LastName = nullable text],
    MissingField.UseNull)
```

Result: 
```powerquery
#table(type table[FirstName = text, MiddleInitial = text, LastName = text],
{
    {"Bob", "C", "Smith"},
    {"Sarah", null, "Jones"},
    {"Harry", "H", null}
})
```




## Category
Table.Table construction
