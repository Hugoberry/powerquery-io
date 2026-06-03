---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


Dada uma coluna de listas em uma tabela, crie a cópia de uma linha para cada valor na lista.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

Dado um `table` no qual `column` contém uma lista de valores, divide a lista em uma linha para cada valor. Os valores nas outras colunas são duplicados em cada nova linha criada. Esta função também pode expandir tabelas aninhadas, tratando-as como listas de registros.


## Examples

### Example #1
Dividir a coluna da lista \[Nome\].
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
Dividir a coluna da tabela aninhada \[Componentes\].
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
