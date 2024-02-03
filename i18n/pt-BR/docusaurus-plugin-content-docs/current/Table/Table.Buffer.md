---
title: Table.Buffer
---

# Table.Buffer


## Description

Armazena uma tabela em buffer na memória, isentando-a de alterações externas durante a avaliação.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Details

Buffers de uma tabela na memória, isolando-a de alterações externas durante a avaliação.    O armazenamento em buffer é superficial. Ele força a avaliação de  células escalares, mas deixa valores não escalares (registros, listas, tabelas e assim por diante) como estão.    <br />    <br />    Observe que o uso dessa função pode ou não fazer com que suas consultas sejam executadas mais rapidamente. Em alguns casos, ele pode fazer com que suas consultas sejam executadas mais lentamente devido ao custo     adicionado de ler todos os dados e armazená-los na memória, bem como o fato de que o armazenamento em buffer impede o dobramento downstream. Se os dados não precisarem estar armazenados em buffer, mas você quer prevenir o dobramento downstream, use <code>Table.StopFolding</code> no lugar.


## Examples

### Example #1 
Carregar todas as linhas de uma tabela SQL na memória, de modo que quaisquer operações posteriores não serão mais capazes de consultar o SQL Server.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(dbo_MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
