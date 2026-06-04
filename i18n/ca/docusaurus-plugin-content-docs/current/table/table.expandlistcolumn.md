---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


Donada una columna de llistes d'una taula, crea una còpia d'una fila per a cada valor de la seva llista.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

A partir d'una `table` on `column` conté una llista de valors, divideix la llista en una fila per a cada valor. Els valors de les altres columnes es dupliquen en cada fila nova creada. Aquesta funció també pot expandir taules imbricades tractant-les com a llistes de registres.


## Examples

### Example #1
Divideix la columna de la llista \[Name\].
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
Divideix la columna de la taula imbricada \[Components\].
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
