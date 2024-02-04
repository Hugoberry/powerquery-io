---
title: Table.PromoteHeaders
---

# Table.PromoteHeaders


## Description

Promove a primeira linha de valores como novos cabeçalhos de coluna (ou seja, nomes de colunas).


## Syntax

```powerquery
Table.PromoteHeaders(
    table as table,
    optional options as record
) as table
```


## Details

Promove a primeira linha de valores como novos cabeçalhos de coluna (ou seja, nomes de colunas). Por predefinição, apenas os valores numéricos ou de texto podem ser promovidos a cabeçalhos. Opções válidas:    <div>      <code>PromoteAllScalars</code>: Se estiver definido como <code>true</code>, todos os valores escalares na primeira linha são promovidos para cabeçalhos através de <code>Culture</code>, se estiver especificado (ou o local atual do documento).    No caso dos valores que não podem ser convertidos para texto, será utilizado um nome de coluna predefinido.    </div>    <div>    <code>Culture</code>: um nome de cultura que especifica a cultura dos dados.    </div>  


## Examples

### Example #1 
Promover a primeira linha de valores na tabela.
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Column1 = "CustomerID", Column2 = "Name", Column3 = #date(1980, 1, 1)],
        [Column1 = 1, Column2 = "Bob", Column3 = #date(1980, 1, 1)]
    })
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Column3 = #date(1980, 1, 1)]})
```


### Example #2 
Promover todos os escalares na primeira linha da tabela a cabeçalhos.
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Rank = 1, Name = "Name", Date = #date(1980, 1, 1)],
        [Rank = 1, Name = "Bob", Date = #date(1980, 1, 1)]}
    ),
    [PromoteAllScalars = true, Culture = "en-US"]
)
```

Result: 
```powerquery
Table.FromRecords({[1 = 1, Name = "Bob", #"1/1/1980" = #date(1980, 1, 1)]})
```




## Category
Table.Column operations
