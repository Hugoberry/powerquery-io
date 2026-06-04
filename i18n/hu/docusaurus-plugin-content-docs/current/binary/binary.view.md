---
title: Binary.View
---

# Binary.View


Létrehoz vagy kibővít egy binárist a lekérdezési és műveleti tevékenységekhez a felhasználó által meghatározott kezelőkkel.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Remarks

Visszaad egy `binary` nézetet, ahol a `handlers` megadott függvényeit használja a rendszer egy művelet alapértelmezett viselkedése helyett, ha a műveletet alkalmazza a nézetre.

Ha a `binary` meg lett adva, az összes kezelőfüggvény opcionális. Ha a `binary` nem lett megadva, a `GetStream` kezelőfüggvény használata kötelező. Ha nem lett kezelőfüggvény megadva egy művelethez, a rendszer a művelet alapértelmezett viselkedését alkalmazza a `binary` elemre (kivéve a `GetExpression` esetében).

A kezelőfüggvényeknek olyan értéket kell visszaadniuk, amely szemantikailag megegyezik a műveletnek a `binary` esetében való alkalmazásának eredményével (vagy `GetExpression` esetén az eredményül kapott nézettel).

Ha egy kezelőfüggvény hibát jelez, a nézetre a rendszer az alapértelmezett viselkedést alkalmazza.

A `Binary.View` segítségével implementálható egy adatforrásba való összevonás – M-lekérdezések fordítása forrásspecifikus műveletekbe (pl. egy fájl adott szakaszának letöltése).

A `Binary.View` részletesebb leírásáért tekintse meg a Power Query egyéni csatlakoztató közzétett dokumentációját.


## Examples

### Example #1
Létrehoz egy alapszintű nézetet, amely nem igényli az adatokhoz való hozzáférést a hossz meghatározásához.
```powerquery
Binary.View(
    null,
    [
        GetLength = () => 12,
        GetStream = () => Text.ToBinary("hello world!")
    ]
)
```

Result: 
```powerquery
Text.ToBinary("hello world!")
```




## Category
Binary
