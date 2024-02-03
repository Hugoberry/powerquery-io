---
title: AtScale.Cubes
---

# AtScale.Cubes


## Description

Importálás/DirectQuery-kockaadatok egy AtScale-ből.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Details

Visszaadja a(z) <code>server</code> kiszolgálón található AtScale-kockaadatokat. Az <code>options</code> választhat rekordparaméter megadásával vezérelhetők a következő beállítások:<ul>        <li><code>TypedMeasureColumns</code>: Egy logikai érték, amely azt jelzi, hogy a többdimenziós vagy táblázatos modellben meghatározott típusok lesznek-e a hozzáadott mértékoszlopok típusai. Ha false értékű, akkor a rendszer a number típust használja minden mértékoszlophoz. A beállítás alapértelmezett értéke false.</li>        <li><code>CommandTimeout</code>: Időtartam (másodpercben), amely azt szabályozza, hogy a kiszolgálóoldali lekérdezés mennyi ideig futhat, mielőtt megszakadna. Az alapértelmezett érték az illesztőtől függ. </li>        <li><code>ConnectionTimeout</code>: Időtartam (másodpercben), amely azt szabályozza, hogy mennyi ideig várjon a rendszer, mielőtt félbehagyja a kiszolgálóhoz való csatlakozási kísérletet. Az alapértelmezett érték az illesztőtől függ. </li></ul>A rekordparaméter a következőképpen adható meg: [option1 = value1, option2 = value2...].


