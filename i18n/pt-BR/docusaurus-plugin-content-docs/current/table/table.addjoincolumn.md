---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


Executa uma junção entre tabelas nas colunas fornecidas e produz o resultado de junção em uma nova coluna.


## Syntax

```powerquery
Table.AddJoinColumn(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text
) as table
```


## Remarks

Une as linhas de `table1` às linhas de `table2` com base na igualdade dos valores das colunas de chave selecionadas por `key1` (para `table1`) e `key2` (para `table2`). Os resultados são inseridos na coluna denominada `newColumnName`. Essa função se comporta de maneira similar a Table.Join com um JoinKind de LeftOuter; a diferença é que os resultados de junção são apresentados de forma aninhada, e não nivelada.


## Examples

### Example #1
Adicione uma coluna de junção a (\{\[saleID = 1, item = "Shirt"\], \[saleID = 2, item = "Hat"\]\}) denominada "preço/estoque" a partir da tabela (\{\[saleID = 1, price = 20\], \[saleID = 2, price = 10\]\}) associada em \[saleID\].
```powerquery
Table.AddJoinColumn(
    Table.FromRecords({
        [saleID = 1, item = "Shirt"],
        [saleID = 2, item = "Hat"]
    }),
    "saleID",
    () => Table.FromRecords({
        [saleID = 1, price = 20, stock = 1234],
        [saleID = 2, price = 10, stock = 5643]
    }),
    "saleID",
    "price"
)
```

Result: 
```powerquery
Table.FromRecords({
    [
        saleID = 1,
        item = "Shirt",
        price = Table.FromRecords({[saleID = 1, price = 20, stock = 1234]})
    ],
    [
        saleID = 2,
        item = "Hat",
        price = Table.FromRecords({[saleID = 2, price = 10, stock = 5643]})
    ]
})
```




## Category
Table.Transformation
