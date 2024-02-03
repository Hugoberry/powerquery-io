---
title: Binary.View
---

# Binary.View


## Description

Létrehoz vagy kibővít egy binárist a lekérdezési és műveleti tevékenységekhez a felhasználó által meghatározott kezelőkkel.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Details

Visszaad egy <code>binary</code> nézetet, ahol a <code>handlers</code> megadott függvényeit használja a rendszer egy művelet alapértelmezett viselkedése helyett, ha a műveletet alkalmazza a nézetre.<br />Ha a <code>binary</code> meg lett adva, az összes kezelőfüggvény opcionális. Ha a <code>binary</code> nem lett megadva, a <code>GetStream</code> kezelőfüggvény használata kötelező. Ha nem lett kezelőfüggvény megadva egy művelethez, a rendszer a művelet alapértelmezett viselkedését alkalmazza a <code>binary</code> elemre (kivéve a <code>GetExpression</code> esetében).<br />A kezelőfüggvényeknek olyan értéket kell visszaadniuk, amely szemantikailag megegyezik a műveletnek a <code>binary</code> esetében való alkalmazásának eredményével (vagy <code>GetExpression</code> esetén az eredményül kapott nézettel).<br />Ha egy kezelőfüggvény hibát jelez, a nézetre a rendszer az alapértelmezett viselkedést alkalmazza.<br />A <code>Binary.View</code> segítségével implementálható egy adatforrásba való összevonás – M-lekérdezések fordítása forrásspecifikus műveletekbe (pl. egy fájl adott szakaszának letöltése).<br />A <code>Binary.View</code> részletesebb leírásáért tekintse meg a Power Query egyéni csatlakoztató közzétett dokumentációját.<br />


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
