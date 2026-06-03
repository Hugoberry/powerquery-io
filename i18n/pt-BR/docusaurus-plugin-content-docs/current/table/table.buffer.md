---
title: Table.Buffer
---

# Table.Buffer


Armazena uma tabela em buffer na memória, isentando-a de alterações externas durante a avaliação.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Remarks

Buffers de uma tabela na memória, isolando-a de alterações externas durante a avaliação. O buffer é superficial. Ele força a avaliação de qualquer valor escalar de célula, mas deixa valores não escalares (registros, listas, tabelas e assim por diante) como estão.

-   `table`: a tabela a ser armazenada em buffer na memória.
-   `options`: (Opcional) Os seguintes valores de registro de opções podem ser usados:
    -   `BufferMode`: o modo de buffer que descreve o tipo de buffer a ser executado. Essa opção pode ser `BufferMode.Eager` ou `BufferMode.Delayed`.

Usar essa função pode ou não fazer as suas consultas serem executadas mais rapidamente. Em alguns casos, isso pode fazer com que suas consultas executem mais lentamente devido à adição do custo de ler todos os dados e armazená-los na memória, bem como o fato de que o armazenamento em buffer impede a dobragem downstream. Se os dados não precisarem ser armazenados em buffer, mas você deseja apenas impedir a dobragem downstream, use `Table.StopFolding`.


## Examples

### Example #1
Carregar todas as linhas de uma tabela SQL na memória, de modo que quaisquer operações posteriores não serão mais capazes de consultar o SQL Server.
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
