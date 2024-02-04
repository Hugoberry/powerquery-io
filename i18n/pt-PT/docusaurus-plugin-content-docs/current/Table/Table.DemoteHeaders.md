---
title: Table.DemoteHeaders
---

# Table.DemoteHeaders


## Description

Despromove os cabeçalhos das colunas para a primeira linha de valores.


## Syntax

```powerquery
Table.DemoteHeaders(
    table as table
) as table
```


## Details

Despromove os cabeçalhos das colunas (ou seja, os nomes das colunas) para a primeira linha de valores. Os nomes predefinidos das colunas são "Coluna1", "Coluna2" e assim consecutivamente.


## Examples

### Example #1 
Despromove a primeira linha de valores na tabela.
```powerquery
Table.DemoteHeaders(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "CustomerID", Column2 = "Name", Column3 = "Phone"],
    [Column1 = 1, Column2 = "Bob", Column3 = "123-4567"],
    [Column1 = 2, Column2 = "Jim", Column3 = "987-6543"]
})
```




## Category
Table.Column operations
