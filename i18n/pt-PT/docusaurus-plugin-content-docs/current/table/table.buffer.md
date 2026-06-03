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

Coloca uma tabela em memória intermédia e isola-a de alterações externas durante a avaliação. A colocação em memória intermédia é superficial. Força a avaliação de quaisquer valores de célula escalares, mas deixa os valores não escalares (registos, listas, tabelas, etc.) tal como estão.

-   `table`: a tabela a colocar em memória intermédia.
-   `options`: (opcional) poderão ser utilizados os seguintes valores do registo options:
    -   `BufferMode`: o modo de memória intermédia que descreve o tipo de colocação em memória intermédia a efetuar. Esta opção pode ser `BufferMode.Eager` ou `BufferMode.Delayed`.

A utilização desta função poderá, ou não, fazer com que as suas consultas sejam executadas mais rapidamente. Nalguns casos, poderá fazer com que as suas consultas sejam executadas mais lentamente devido ao custo adicional de ler todos os dados e armazená-los em memória, bem como ao facto de a colocação em memória intermédia impedir a dobragem de consultas a jusante. Se os dados não precisarem de ser colocados em memória intermédia, mas apenas quiser impedir a dobragem de consultas a jusante, utilize antes `Table.StopFolding`.


## Examples

### Example #1
Carregue todas as linhas de uma tabela SQL para a memória, para que quaisquer operações a jusante deixem de poder consultar o servidor SQL.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
