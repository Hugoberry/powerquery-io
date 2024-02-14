---
title: Table.Buffer
---

# Table.Buffer


Coloca uma tabela em memória intermédia, isolando-a de alterações externas durante a avaliação.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Remarks

Coloca uma tabela em memória intermédia, isolando-a de alterações externas durante a avaliação.    A colocação em memória intermédia é superficial. A mesma força a avaliação de quaisquer valores de célula escalares, deixando os valores não escalares (registos, listas, tabelas, etc) como estão.    <br />    <br />    Note que a utilização desta função poderá ou não acelerar as suas consultas. Em certos casos, poderá tornar as suas consultas mais lentas devido ao custo     adicional de ler todos os dados e de armazenar os mesmos em memória, para além do facto de que a colocação em memória intermédia impede a dobragem a jusante.  Se os dados não necessitarem de ser    colocados em memória intermédia e apenas quiser evitar a dobragem a jusante, utilize antes <code>Table.StopFolding</code>.


## Examples

### Example #1 
Carregue todas as linhas de uma tabela SQL para a memória, para que quaisquer operações a jusante deixem de poder consultar o SQL Server.
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
