---
title: Table.PromoteHeaders
---

# Table.PromoteHeaders


Promove a primeira linha de valores como novos cabeçalhos de coluna (por exemplo, nomes de coluna).


## Syntax

```powerquery
Table.PromoteHeaders(
    table as table,
    optional options as record
) as table
```


## Remarks

Promove a primeira linha de valores como novos cabeçalhos de coluna (por exemplo, nomes de coluna). Por padrão, somente valores de texto ou número são promovidos a cabeçalhos. Opções válidas:    <div>      <code>PromoteAllScalars</code>: se definido como <code>true</code>, todos os valores escalares da primeira linha são promovidos a cabeçalhos usando o <code>Culture</code>, se especificado (ou localidade do documento atual).    Para valores que não podem ser convertidos em texto, um nome de coluna padrão será usado.    </div>    <div>    <code>Culture</code>: um nome de cultura especificando a cultura para os dados.    </div>  


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
Promova todos os escalares na primeira linha da tabela a cabeçalhos.
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
