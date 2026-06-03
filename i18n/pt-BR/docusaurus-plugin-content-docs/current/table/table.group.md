---
title: Table.Group
---

# Table.Group


Agrupa linhas na tabela que têm a mesma chave.


## Syntax

```powerquery
Table.Group(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional groupKind as GroupKind.Type,
    optional comparer as function
) as table
```


## Remarks

Agrupar as linhas de `table` pelas colunas-chave definidas por `key`. O `key` pode ser um único nome de coluna ou uma lista de nomes de coluna. Para cada grupo, um registro é construído contendo as colunas-chave (e seus valores), junto com quaisquer colunas agregadas especificadas por `aggregatedColumns`. Opcionalmente, `groupKind` e `comparer` também podem ser especificadas.  
  
Se os dados já estiverem classificados pelas colunas-chave, então um `groupKind` de GroupKind.Local pode ser fornecido. Isso pode melhorar o desempenho do agrupamento em certos casos, uma vez que todas as linhas com um determinado conjunto de valores-chave são consideradas contíguas.  
  
Ao passar por um `comparer`, observe que se ele trata chaves diferentes como iguais, uma linha pode ser colocada em um grupo cujas chaves diferem das suas.  
  
Essa função não garante a ordem das linhas que retorna.


## Examples

### Example #1
Agrupar a tabela adicionando uma coluna agregada \[total\] que contém a soma de preços ("each List.Sum(\[price\])").
```powerquery
Table.Group(
    Table.FromRecords({
        [CustomerID = 1, price = 20],
        [CustomerID = 2, price = 10],
        [CustomerID = 2, price = 20],
        [CustomerID = 1, price = 10],
        [CustomerID = 3, price = 20],
        [CustomerID = 3, price = 5]
    }),
    "CustomerID",
    {"total", each List.Sum([price])}
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [CustomerID = 1, total = 30],
        [CustomerID = 2, total = 30],
        [CustomerID = 3, total = 25]
    },
    {"CustomerID", "total"}
)
```




## Category
Table.Transformation
