---
title: Table.Min
---

# Table.Min


Retorna a linha menor ou um valor padrão, usando os critérios especificados.


## Syntax

```powerquery
Table.Min(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

Retorna a linha menor na `table`, com base na `comparisonCriteria`. Se a tabela estiver vazia, o valor `default` opcional será retornado.


## Examples

### Example #1
Localizar a linha com o menor valor na coluna \[a\] da tabela.
```powerquery
Table.Min(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    "a"
)
```

Result: 
```powerquery
[a = 2, b = 4]
```


### Example #2
Localizar a linha com o menor valor na coluna \[a\] da tabela. Retorna -1 se vazia.
```powerquery
Table.Min(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
