---
title: Table.Max
---

# Table.Max


## Description

Devolve a maior linha ou o valor predefinido utilizando os critérios especificados.


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Details

Devolve a maior linha em <code>table</code> com base no <code>comparisonCriteria</code> especificado. Se a tabela estiver vazia, é devolvido o valor <code>default</code> opcional. 


## Examples

### Example #1 
Determinar a linha com o maior valor na coluna [a] na tabela &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt;.
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
Determinar a linha com o maior valor na coluna [a] na tabela &lt;code&gt;(\{})&lt;/code&gt;. Devolver -1 se estiver vazia.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
