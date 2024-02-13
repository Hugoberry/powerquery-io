---
title: Table.Group
---

# Table.Group


Agrupa as linhas da tabela que tenham a mesma chave.


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

Agrupa as linhas de <code>table</code> pelas colunas-chave definidas por <code>key</code>. O <code>key</code> pode ser um nome de uma única coluna, ou uma lista de nomes de colunas.    Para cada grupo, é construído um registo contendo as colunas-chave (e os seus valores), juntamente com quaisquer colunas agregadas especificadas por <code>aggregatedColumns</code>.    Opcionalmente, <code>groupKind</code> e <code>comparer</code> também podem ser especificados.<br />    <br />    Se os dados já estiverem ordenados por colunas-chave, então pode ser fornecida uma <code>groupKind</code> do GroupKind.Local. Isto pode melhorar o desempenho do agrupamento em certos casos,    uma vez que todas as linhas com um determinado conjunto de valores-chave são assumidas como contíguas.<br />    <br />    Ao passar uma <code>comparer</code>, note que se a mesma tratar chaves diferentes como sendo iguais, pode ser colocada uma linha num grupo cujas chaves diferem das suas.<br />    <br />    Esta função não garante a ordenação das linhas que devolve.  


## Examples

### Example #1 
Agrupar a tabela, adicionando uma coluna agregada [total] que contém a soma dos preços (&#34;each List.Sum([price])&#34;).
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
