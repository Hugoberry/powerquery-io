---
title: Table.SplitAt
---

# Table.SplitAt


Retorna uma lista contendo as primeiras linhas de contagem especificadas e as linhas restantes.


## Syntax

```powerquery
Table.SplitAt(
    table as table,
    count as number
) as list
```


## Remarks

Retorna uma lista contendo duas tabelas: uma tabela com as primeiras N linhas de <code>table</code> (conforme especificado por <code>count</code>) e uma tabela contendo as linhas restantes de <code>table</code>.Se as tabelas da lista resultante forem enumeradas exatamente uma vez e na ordem, a função enumerará <code>table</code> apenas uma vez.


## Examples

### Example #1 
Retorna as duas primeiras linhas da tabela e as linhas restantes da tabela.
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
