---
title: Table.View
---

# Table.View


## Description

Létrehoz vagy kibővít egy táblát lekérdezési és műveleti tevékenységekhez a felhasználó által meghatározott kezelőkkel.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Details

Visszaad egy <code>table</code> nézetet, ahol a(z) <code>handlers</code> megadott függvényei vannak használatban egy művelet alapértelmezett viselkedése helyett, ha a művelet alkalmazva van a nézetre.<br />Ha <code>table</code> meg van adva, az összes kezelőfüggvény opcionális. Ha <code>table</code> nincs megadva, a <code>GetType</code> és a <code>GetRows</code> kezelőfüggvényekre van szükség. Ha egy kezelőfüggvény nincs meghatározva egy műveletnél, a rendszer a művelet alapértelmezett viselkedését alkalmazza itt: <code>table</code> (kivéve <code>GetExpression</code> esetében).<br />A kezelőfüggvényeknek olyan értéket kell visszaadnia, amely szemantikailag megegyezik a művelet <code>table</code> esetében való alkalmazásának eredményével (vagy <code>GetExpression</code> esetén az eredményül kapott nézettel).<br />Ha egy kezelőfüggvény hibát jelez, a nézetre a rendszer az alapértelmezett viselkedést alkalmazza.<br /><code>Table.View</code> segítségével megvalósítható egy adatforrásba való összevonás – M lekérdezések fordítása forrásspecifikus lekérdezésekbe (pl. T-SQL utasítások létrehozása M lekérdezésekből).<br />A <code>Table.View</code> részletesebb leírásáért tekintse meg a közzétett dokumentációt.<br />


## Examples

### Example #1 
Hozzon létre egy alapszintű nézetet, amely nem igényli a sorokhoz való hozzáférést a típus vagy a sorok számának meghatározásához.
```powerquery
Table.View(
    null,
    [
        GetType = () => type table [CustomerID = number, Name = text, Phone = nullable text],
        GetRows = () => Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
        GetRowCount = () => 1
    ]
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Table construction
