---
title: Table.PromoteHeaders
---

# Table.PromoteHeaders


## Description

Új oszlopfejlécekké (azaz oszlopnevekké) lépteti elő az értékek első sorát a táblában.


## Syntax

```powerquery
Table.PromoteHeaders(
    table as table,
    optional options as record
) as table
```


## Details

Új oszlopfejlécekké (azaz oszlopnevekké) lépteti elő az értékek első sorát a táblában. Alapértelmezés szerint a rendszer csak szöveges vagy számértékeket léptet elő fejléccé. Érvényes beállítások:    <div>      <code>PromoteAllScalars</code>: Ha a <code>true</code> érték van beállítva, a rendszer az első sor minden skaláris értékét fejléccé lépteti elő a <code>Culture</code> használatával, ha az meg van adva (ha nincs, a dokumentum aktuális területi beállításait használja).    A szöveggé nem alakítható értékek esetében a rendszer egy alapértelmezett oszlopnevet használ.    </div>    <div>    <code>Culture</code>: Az adatok kulturális környezetét meghatározó kulturáliskörnyezet-név.    </div>  


## Examples

### Example #1 
Előlépteti az értékek első sorát a táblában.
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
A tábla első sorában található összes skaláris érték előléptetése fejlécekké.
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
