---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


Berdasarkan kolom daftar dalam tabel, membuat salinan baris untuk setiap nilai dalam daftar.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

Mengingat `table` di mana `column` berisi daftar nilai, membagi daftar menjadi baris untuk setiap nilai. Nilai di kolom lain diduplikasi di setiap baris baru yang dibuat. Fungsi ini juga dapat memperluas tabel bertumpuk dengan memperlakukannya sebagai daftar rekaman.


## Examples

### Example #1
Pisahkan kolom daftar \[Name\].
```powerquery
Table.ExpandListColumn(
    Table.FromRecords({[Name = {"Bob", "Jim", "Paul"}, Discount = .15]}),
    "Name"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob", Discount = 0.15],
    [Name = "Jim", Discount = 0.15],
    [Name = "Paul", Discount = 0.15]
})
```


### Example #2
Pisahkan kolom tabel \[Komponen\].
```powerquery
Table.ExpandListColumn(
    #table(
        {"Part", "Components"},
        {
            {"Tool", #table({"Name", "Quantity"}, {{"Thingamajig", 2}, {"Widget", 3}})}
        }
    ),
    "Components"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Part = "Tool", Components = [Name = "Thingamajig", Quantity = 2]],
    [Part = "Tool", Components = [Name = "Widget", Quantity = 3]]
})
```




## Category
Table.Transformation
