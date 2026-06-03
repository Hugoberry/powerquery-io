---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


Efetua uma junção entre as tabelas nas colunas fornecidas e produz o resultado da junção numa nova coluna.


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

Junta as linhas de `table1` com as linhas de `table2` com base na igualdade dos valores das colunas de chave selecionadas por `key1` (para `table1`) e `key2` (para `table2`). Os resultados são introduzidos na coluna chamada `newColumnName`. Esta função comporta-se de forma semelhante a Table.Join com um JoinKind de LeftOuter, exceto que os resultados da junção são apresentados de forma aninhada e não de forma simples.


## Examples

### Example #1
Adicionar uma coluna de junção a (\{\[saleID = 1, item = "Shirt"\], \[saleID = 2, item = "Hat"\]\}) chamada "preço/stock" a partir da tabela (\{\[saleID = 1, price = 20\], \[saleID = 2, price = 10\]\}) associada em \[saleID\].
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
