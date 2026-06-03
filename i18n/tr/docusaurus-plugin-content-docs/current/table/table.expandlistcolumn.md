---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


Bir tabloda verilen liste sütunu ile listedeki her değer satırının kopyasını oluşturur.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

Verilen `table` bir `column`listesi içerdiğinde, liste her değer için bir satıra bölünecek. Diğer sütunlardaki değerler oluşturulan her yeni satırda yineleniyor. Bu işlev, ayrıca iç içe tabloları kayıt listeleri olarak işleyerek genişletebilir.


## Examples

### Example #1
Liste sütununu \[Name\] böl.
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
İç içe tablo sütununu \[Bileşenler\] olarak bölün.
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
