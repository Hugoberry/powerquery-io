---
title: SharePoint.Tables
---

# SharePoint.Tables


Egy SharePoint-lista tartamát tartalmazó táblát ad vissza.


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Remarks

Egy olyan táblát ad vissza, amely a megadott SharePoint-listán (`url`) talált minden egyes listaelemhez tartalmaz egy sort. Minden egyes sor tartalmazza a lista tulajdonságait. A(z) `options` elemet a következő lehetőségek meghatározásához lehet megadni:

-   `ApiVersion` : Egy szám (14 vagy 15) vagy az „Auto” szöveg, amely a webhelyhez használatos SharePoint API-verziót adja meg. Ha nincs megadva, a 14-es verziót használja a rendszer. Amikor az Auto szöveg van megadva, a rendszer lehetőség szerint automatikusan észleli a kiszolgálóverziót, egyébként alapértelmezés szerint a 14-es verziót használja. Az angoltól eltérő nyelvű SharePoint-webhelyekhez legalább 15-ös verziót kell használni.
-   `Implementation` : Választható. A SharePoint-összekötő használandó verzióját határozza meg. Az elfogadott értékek a következők: „2.0” vagy null. Ha az érték „2.0”, a rendszer a SharePoint-összekötő 2.0-s implementációját használja. Ha az érték null, a rendszer a SharePoint-összekötő eredeti implementációját használja.
-   `ViewMode` : Választható. Ez a beállítás csak a 2.0-s implementáció esetén érvényes. Az elfogadott értékek a következők: „Mind” és „Alapértelmezett”. Ha nincs megadva érték, a rendszer a „Mind” értéket állítja be. Ha a „Mind” érték van megadva, a nézet az összes felhasználó által létrehozott és rendszer által definiált oszlopot tartalmazza. Ha az „Alapértelmezett” érték van megadva, a nézet megegyezik azzal, amit a felhasználó lát, amikor online nézi meg a listát abban a nézetben, amelyet a felhasználó alapértelmezettként állított be a beállításaiban. Ha a felhasználó módosítja az alapértelmezett nézetet a felhasználó által létrehozott vagy a rendszer által definiált oszlopok hozzáadásával vagy eltávolításával, vagy egy új nézet létrehozásával és alapértelmezettként való beállításával, ezek a módosítások az összekötőn keresztül propagálva lesznek.
-   `DisableAppendNoteColumns` : Megakadályozza, hogy az összekötő külön végpontot használjon a jegyzetoszlopokhoz.



## Category
Accessing data
