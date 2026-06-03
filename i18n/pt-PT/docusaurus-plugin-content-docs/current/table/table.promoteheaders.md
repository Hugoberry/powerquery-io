---
title: Table.PromoteHeaders
---

# Table.PromoteHeaders


Promove a primeira linha de valores como novos cabeçalhos de coluna (ou seja, nomes de colunas).


## Syntax

```powerquery
Table.PromoteHeaders(
    table as table,
    optional options as record
) as table
```


## Remarks

Promove a primeira linha de valores como os novos cabeçalhos de coluna (ou seja, nomes de coluna). Por predefinição, apenas os valores de texto ou numéricos são promovidos a cabeçalhos. Opções válidas:

-   `PromoteAllScalars`: se estiver definido como `true`, todos os valores escalares na primeira linha são promovidos a cabeçalhos com a `Culture`, se especificada (ou a região do documento atual). Para valores que não possam ser convertidos em texto, será utilizado um nome de coluna predefinido.
-   `Culture`: um nome de cultura que especifica a cultura dos dados.


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
