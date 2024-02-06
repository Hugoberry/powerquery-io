---
title: Table.Min
---

# Table.Min


Devolve a menor linha ou um valor predefinido utilizando os critérios especificados.


## Syntax

```powerquery
Table.Min(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

Devolve a menor linha em <code>table</code> com base no <code>comparisonCriteria</code> especificado. Se a tabela estiver vazia, é devolvido o valor <code>default</code> opcional.


## Examples

### Example #1 
Localizar a linha com o menor valor na coluna [a] na tabela.
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
Localizar a linha com o menor valor na coluna [a] na tabela. Devolver -1 se estiver vazia.
```powerquery
Table.Min(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
