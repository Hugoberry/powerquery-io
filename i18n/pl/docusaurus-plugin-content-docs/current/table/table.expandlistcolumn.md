---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


Używając kolumny list w tabeli, tworzy kopię wiersza dla każdej wartości na liście.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

W przypadku `table`, gdzie `column` zawiera listę wartości, lista jest dzielona na wiersz dla każdej wartości. Wartości w innych kolumnach są duplikowane w każdym nowo utworzonym wierszu. Ta funkcja może również rozszerzać tabele zagnieżdżone, traktując je jako listy rekordów.


## Examples

### Example #1
Podziel kolumnę listy \[Name\].
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
Podziel kolumnę tabeli zagnieżdżonej \[Składniki\].
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
