---
title: SharePoint.Contents
---

# SharePoint.Contents


Egy olyan táblát ad vissza, amely egy SharePoint-webhely tartalmából áll.


## Syntax

```powerquery
SharePoint.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Egy olyan táblát ad vissza, amely a megadott SharePoint-webhelyen (`url`) talált minden egyes mappához és dokumentumhoz tartalmaz egy sort. Minden egyes sor tartalmazza a mappa vagy a fájl tulajdonságait, valamint egy, a tartalmukra mutató hivatkozást. A(z) `options` elemet a következő lehetőségek meghatározására lehet megadni:

-   `ApiVersion` : Egy szám (14 vagy 15) vagy az „Auto” szöveg, amely a webhelyhez használatos SharePoint API-verziót adja meg. Ha nincs megadva, a 14-es verziót használja a rendszer. Amikor az Auto szöveg van megadva, a rendszer lehetőség szerint automatikusan észleli a kiszolgálóverziót, egyébként alapértelmezés szerint a 14-es verziót használja. Az angoltól eltérő nyelvű SharePoint-webhelyekhez legalább 15-ös verziót kell használni.
-   `Implementation` : Választható. A SharePoint-összekötő használandó verzióját határozza meg. Az elfogadott értékek a következők: „2.0” vagy null. Ha az érték „2.0”, a rendszer a SharePoint-összekötő 2.0-s implementációját használja. Ha az érték null, a rendszer a SharePoint-összekötő eredeti implementációját használja.



## Category
Accessing data
