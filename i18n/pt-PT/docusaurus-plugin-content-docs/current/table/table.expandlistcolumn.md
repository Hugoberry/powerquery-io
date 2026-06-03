---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


Criar uma cópia de uma linha para cada valor na respetiva lista, com base numa coluna de listas numa tabela especificada.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

Especificado um `table` em que `column` contém uma lista de valores, divide a lista numa linha para cada valor. Os valores existentes nas outras colunas são duplicados em cada nova linha criada. Esta função também pode expandir tabelas aninhadas tratando-as como listas de registos.


## Examples

### Example #1
Divida a coluna da lista \[Nome\].
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
Divida a coluna de tabela aninhada \[Componentes\].
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
