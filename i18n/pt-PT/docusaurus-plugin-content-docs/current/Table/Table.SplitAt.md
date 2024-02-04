---
title: Table.SplitAt
---

# Table.SplitAt


## Description

Devolve uma lista contendo as primeiras linhas de contagem especificadas e as linhas restantes.


## Syntax

```powerquery
Table.SplitAt(
    table as table,
    count as number
) as list
```


## Details

Devolve uma lista contendo duas tabelas: uma tabela com as primeiras linhas N de <code>table</code> (conforme especificado por <code>count</code>) e uma tabela contendo as restantes linhas de <code>table</code>.Se as tabelas da lista resultante forem enumeradas exatamente uma vez e para que a função enumerou <code>table</code> apenas uma vez.


## Examples

### Example #1 
Devolver as 2 primeiras filas da tabela e as restantes filas da tabela.
```powerquery
Table.SplitAt(#table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}), 2)
```

Result: 
```powerquery
{
    #table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}}),
    #table({"a", "b", "c"}, {{7, 8, 9}})
}
```




## Category
Table.Row operations
