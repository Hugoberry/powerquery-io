---
title: Table.Max
---

# Table.Max


Devolve a maior linha ou o valor predefinido utilizando os critérios especificados.


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

Devolve a maior linha em `table` com base no `comparisonCriteria` especificado. Se a tabela estiver vazia, é devolvido o valor `default` opcional.


## Examples

### Example #1
Determinar a linha com o maior valor na coluna \[a\] na tabela `({[a = 2, b = 4], [a = 6, b = 8]})`.
```powerquery
Table.Max(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    "a"
)
```

Result: 
```powerquery
[a = 6, b = 8]
```


### Example #2
Determinar a linha com o maior valor na coluna \[a\] na tabela `({})`. Devolver -1 se estiver vazia.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
