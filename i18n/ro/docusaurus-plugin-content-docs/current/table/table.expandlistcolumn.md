---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


Ţinând cont de o coloană de liste într-un tabel, creaţi o copie a unui rând pentru fiecare valoare din listă.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

Dată fiind o `table` în care `column` conține o listă de valori, scindează lista într-un rând pentru fiecare valoare. Valorile din celelalte coloane sunt dublate în fiecare rând nou creat. Această funcție poate extinde tabelele imbricate, tratându-le ca liste de înregistrări.


## Examples

### Example #1
Scindați coloana listă \[Nume\].
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
Scindați coloana de tabel imbricat \[Componente\].
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
