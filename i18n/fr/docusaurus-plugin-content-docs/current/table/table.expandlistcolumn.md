---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


En fonction d'une colonne dans les listes d'une table, crée une copie d'une ligne pour chaque valeur dans la liste.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

Dans le cas d’un `table` où `column` contient une liste de valeurs, divise la liste en une ligne pour chaque valeur. Les valeurs des autres colonnes sont dupliquées dans chaque nouvelle ligne créée. Cette fonction peut également développer des tables imbriqués en les traitant comme des listes d’enregistrements.


## Examples

### Example #1
Fractionner la colonne de la liste \[Nom\].
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
Fractionner la colonne de table imbriquée \[Components\].
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
