---
title: Tables.GetRelationships
---

# Tables.GetRelationships


Obtém as relações entre um conjunto de tabelas.


## Syntax

```powerquery
Tables.GetRelationships(
    tables as table,
    optional dataColumn as text
) as table
```


## Remarks

Obtém as relações entre um conjunto de tabelas. Parte-se do princípio de que o conjunto `tables` tem uma estrutura semelhante à de uma tabela de navegação. A coluna definida por `dataColumn` contém as tabelas de dados propriamente ditas.



## Category
Table.Information
