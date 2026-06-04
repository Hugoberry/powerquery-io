---
title: Table.View
---

# Table.View


Létrehoz vagy kibővít egy táblát lekérdezési és műveleti tevékenységekhez a felhasználó által meghatározott kezelőkkel.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Remarks

Visszaad egy `table` nézetet, ahol a(z) `handlers` megadott függvényei vannak használatban egy művelet alapértelmezett viselkedése helyett, ha a művelet alkalmazva van a nézetre.

Ha `table` meg van adva, az összes kezelőfüggvény opcionális. Ha `table` nincs megadva, a `GetType` és a `GetRows` kezelőfüggvényekre van szükség. Ha egy kezelőfüggvény nincs meghatározva egy műveletnél, a rendszer a művelet alapértelmezett viselkedését alkalmazza itt: `table` (kivéve `GetExpression` esetében).

A kezelőfüggvényeknek olyan értéket kell visszaadnia, amely szemantikailag megegyezik a művelet `table` esetében való alkalmazásának eredményével (vagy `GetExpression` esetén az eredményül kapott nézettel).

Ha egy kezelőfüggvény hibát jelez, a nézetre a rendszer az alapértelmezett viselkedést alkalmazza.

`Table.View` segítségével megvalósítható egy adatforrásba való összevonás – M lekérdezések fordítása forrásspecifikus lekérdezésekbe (pl. T-SQL utasítások létrehozása M lekérdezésekből).

A `Table.View` részletesebb leírásáért tekintse meg a közzétett dokumentációt.


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
