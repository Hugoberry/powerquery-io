---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


Data una colonna di elenchi in una tabella, creare una copia di una riga per ogni valore nell'elenco.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

Dato un `table` in cui `column` contiene un elenco di valori, divide l'elenco in una riga per ogni valore. I valori delle altre colonne sono duplicati in ogni nuova riga creata. Questa funzione può inoltre espandere le tabelle annidate considerandole come elenchi di record.


## Examples

### Example #1
Dividere la colonna dell'elenco \[Nome\].
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
Dividere colonna della tabella annidata \[componenti\].
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
