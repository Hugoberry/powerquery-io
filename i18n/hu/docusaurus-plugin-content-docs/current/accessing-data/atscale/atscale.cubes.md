---
title: AtScale.Cubes
---

# AtScale.Cubes


Importálás/DirectQuery-kockaadatok egy AtScale-ből.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Remarks

Visszaadja a(z) `server` kiszolgálón található AtScale-kockaadatokat. Az `options` választhat rekordparaméter megadásával vezérelhetők a következő beállítások:

-   `TypedMeasureColumns`: Egy logikai érték, amely azt jelzi, hogy a többdimenziós vagy táblázatos modellben meghatározott típusok lesznek-e a hozzáadott mértékoszlopok típusai. Ha false értékű, akkor a rendszer a number típust használja minden mértékoszlophoz. A beállítás alapértelmezett értéke false.
-   `CommandTimeout`: Időtartam (másodpercben), amely azt szabályozza, hogy a kiszolgálóoldali lekérdezés mennyi ideig futhat, mielőtt megszakadna. Az alapértelmezett érték az illesztőtől függ.
-   `ConnectionTimeout`: Időtartam (másodpercben), amely azt szabályozza, hogy mennyi ideig várjon a rendszer, mielőtt félbehagyja a kiszolgálóhoz való csatlakozási kísérletet. Az alapértelmezett érték az illesztőtől függ.

A rekordparaméter a következőképpen adható meg: \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Egy AtScale-kockában listázza a kockaadatokat.
```powerquery
AtScale.Cubes("https://contoso.atscale.com:10502/xmla/...")
```



