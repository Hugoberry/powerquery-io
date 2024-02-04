---
title: Table.PrefixColumns
---

# Table.PrefixColumns


## Description

Devolve uma tabela em que o texto especificado foi adicionado como prefixo a todas as colunas.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Details

Devolve uma tabela em que o texto especificado, <code>prefix</code>, juntamente com um ponto no formato <code>prefix</code><code>.ColumnName</code>, é adicionado como prefixo aos nomes de todas as colunas do <code>table</code> especificado.


## Examples

### Example #1 
Adicionar o prefixo &#34;MinhaTabela&#34; às colunas existentes na tabela.
```powerquery
Table.PrefixColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "MyTable"
)
```

Result: 
```powerquery
Table.FromRecords({[MyTable.CustomerID = 1, MyTable.Name = "Bob", MyTable.Phone = "123-4567"]})
```




## Category
Table.Column operations
