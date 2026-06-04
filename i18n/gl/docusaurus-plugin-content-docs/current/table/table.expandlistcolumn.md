---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


Dada unha columna de listas nunha táboa, crear unha copia dunha fila para cada valor da lista.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

Ao especificar `table` onde `column` contén unha lista de valores, divide a lista en filas para cada valor. Os valores das outras columnas duplícanse en cada fila nova que se crea. Esta función tamén pode expandir táboas aniñadas ao tratalas como listas de rexistros.


## Examples

### Example #1
Dividir a columna da lista \[Name\].
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
Dividir a columna da táboa aniñada \[Components\].
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
