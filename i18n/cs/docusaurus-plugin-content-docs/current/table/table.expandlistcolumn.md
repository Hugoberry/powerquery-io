---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


Na základě sloupce seznamů v tabulce vytvoří kopii řádku pro každou hodnotu ve svém seznamu.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

Při zadání `table`, kde `column` obsahuje seznam hodnot, rozdělí seznam tak, že pro každou hodnotu vytvoří jeden řádek. Hodnoty v ostatních sloupcích jsou v každém nově vytvořeném řádku duplikovány. Tato funkce může také rozbalovat vnořené tabulky tím, že je považuje za seznamy záznamů.


## Examples

### Example #1
Rozdělte sloupec seznamu \[Name\].
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
Rozdělte sloupec vnořené tabulky \[Components\].
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
