---
title: Table.PromoteHeaders
---

# Table.PromoteHeaders


## Description

Vērtību pirmā rinda tiek paaugstināta kā jauno kolonnu virsraksti (piemēram, kolonnu nosaukumi).


## Syntax

```powerquery
Table.PromoteHeaders(
    table as table,
    optional options as record
) as table
```


## Details

Vērtību pirmā rinda tiek paaugstināta kā jauno kolonnu virsraksti (piemēram, kolonnu nosaukumi). Pēc noklusējuma uz galvenēm tiek paaugstinātas tikai teksta vai skaitliskās vērtības. Derīgas opcijas:    <div>      <code>PromoteAllScalars</code>: ja iestatīts <code>true</code>, visas pirmajā rindā esošās skalārās vērtības uz gakvenēm tiek paaugstinātas, izmantojot opciju <code>Culture</code> (ja tāda pastāv (vai pašreizējā dokumenta lokalizācija).    Vērtībām, kuras nevar pārveidot par tekstu, tiks izmantots noklusējuma kolonnas nosaukums.    </div>    <div>    <code>Culture</code>: kultūras nosaukums, kas norāda datu kultūru.    </div>  


## Examples

### Example #1 
Paaugstiniet vērtību pirmo rindu tabulā.
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
Visas tabulas pirmajā rindā esošās skalārās vērtības paaugstina uz galvenēm.
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
