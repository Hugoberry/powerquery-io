---
title: Tables.GetRelationships
---

# Tables.GetRelationships


## Description

Obtém as relações entre um conjunto de tabelas.


## Syntax

```powerquery
Tables.GetRelationships(
    tables as table,
    optional dataColumn as text
) as table
```


## Details

Obtém as relações entre um conjunto de tabelas. Parte-se do princípio de que o conjunto <code>tables</code> tem uma estrutura semelhante à de uma tabela de navegação. A coluna definida por <code>dataColumn</code> contém as tabelas de dados propriamente ditas.



## Category
Table.Information
