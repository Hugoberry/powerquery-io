---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


## Description

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


## Details

Junta as linhas de <code>table1</code> com as linhas de <code>table2</code> com base na igualdade dos valores das colunas de chave selecionadas por <code>key1</code> (para <code>table1</code>) e <code>key2</code> (para <code>table2</code>). Os resultados são introduzidos na coluna chamada <code>newColumnName</code>.Esta função comporta-se de forma semelhante a Table.Join com um JoinKind de LeftOuter, exceto que os resultados da junção são apresentados de forma aninhada e não de forma simples.


## Examples

### Example #1 
Adicionar uma coluna de junção a (\{[saleID = 1, item = &#34;Shirt&#34;], [saleID = 2, item = &#34;Hat&#34;]}) chamada &#34;preço/stock&#34; a partir da tabela (\{[saleID = 1, price = 20], [saleID = 2, price = 10]}) associada em [saleID].
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
