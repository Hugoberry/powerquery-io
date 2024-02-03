---
title: Table.ToList
---

# Table.ToList


## Description

Converte uma tabela em lista aplicando a função de combinação especificada a cada linha de valores na tabela.


## Syntax

```powerquery
Table.ToList(
    table as table,
    optional combiner as function
) as list
```


## Details

Converte uma tabela em lista aplicando a função de combinação especificada a cada linha de valores na tabela.


## Examples

### Example #1 
Combina o texto de todas as linhas com uma vírgula.
```powerquery
Table.ToList(
    Table.FromRows({
        {Number.ToText(1), "Bob", "123-4567"},
        {Number.ToText(2), "Jim", "987-6543"},
        {Number.ToText(3), "Paul", "543-7890"}
    }),
    Combiner.CombineTextByDelimiter(",")
)
```

Result: 
```powerquery
{"1,Bob,123-4567", "2,Jim,987-6543", "3,Paul,543-7890"}
```




## Category
Table.Conversions
