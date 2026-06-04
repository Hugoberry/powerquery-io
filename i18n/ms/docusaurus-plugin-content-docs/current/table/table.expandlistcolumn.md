---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


Diberi lajur senarai dalam jadual, cipta salinan baris untuk setiap nilai dalam senarainya.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

Sekiranya `table` yang `column` mengandungi senarai nilai, memisahkan senarai menjadi baris untuk setiap nilai. Nilai dalam lajur lain diduakan dalam setiap baris baharu yang dicipta. Fungsi ini juga boleh mengembangkan jadual bersarang dengan menganggapnya sebagai senarai rekod.


## Examples

### Example #1
Pisahkan lajur senarai \[Name\].
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
Pisahkan lajur jadual bersarang \[Components\].
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
