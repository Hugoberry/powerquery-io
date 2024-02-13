---
title: Table.ToList
---

# Table.ToList


Converte una tabella in un elenco applicando la funzione di combinazione specificata a ogni riga di valori nella tabella.


## Syntax

```powerquery
Table.ToList(
    table as table,
    optional combiner as function
) as list
```


## Remarks

Converte una tabella in un elenco applicando la funzione di combinazione specificata a ogni riga di valori nella tabella.


## Examples

### Example #1 
Combinare il testo di ogni riga con una virgola.
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
