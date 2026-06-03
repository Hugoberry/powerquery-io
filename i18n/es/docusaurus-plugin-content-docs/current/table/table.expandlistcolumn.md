---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


Dada una columna de listas de una tabla, crear una copia de una fila para cada valor de la lista.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

Dado un `table` donde `column`contiene una lista de valores, divide la lista en una fila para cada valor. Los valores de las otras columnas se duplican en cada nueva fila creada. Esta función también puede expandir las tablas anidadas tratándolas como listas de registros.


## Examples

### Example #1
Divida la columna de lista \[Name\].
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
Divida la columna de tabla anidada \[Components\].
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
