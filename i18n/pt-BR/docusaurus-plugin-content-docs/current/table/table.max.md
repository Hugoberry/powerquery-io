---
title: Table.Max
---

# Table.Max


Retorna a linha maior ou o valor padrão, usando os critérios especificados.


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

Retorna a linha maior na <code>table</code>, com base na <code>comparisonCriteria</code>. Se a tabela estiver vazia, o valor <code>default</code> opcional será retornado. 


## Examples

### Example #1 
Localize a linha com o maior valor na coluna [a] da tabela &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt;.
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
Localize a linha com o maior valor na coluna [a] da tabela &lt;code&gt;(\{})&lt;/code&gt;. Retorne -1 se ela estiver vazia.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
