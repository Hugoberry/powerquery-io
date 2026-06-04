---
title: SharePoint.Files
---

# SharePoint.Files


Egy olyan táblát ad vissza, amely egy SharePoint-webhelyen levő dokumentumokból áll.


## Syntax

```powerquery
SharePoint.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

Egy olyan táblát ad vissza, amely a megadott SharePoint-webhelyen (`url`) vagy az almappákban talált minden egyes dokumentumhoz tartalmaz egy sort. Minden egyes sor tartalmazza a mappa vagy a fájl tulajdonságait, valamint egy, a tartalmukra mutató hivatkozást. A(z) `options` elemet a következő lehetőségek meghatározásához lehet megadni:

-   `ApiVersion` : Egy szám (14 vagy 15) vagy az „Auto” szöveg, amely a webhelyhez használatos SharePoint API-verziót adja meg. Ha nincs megadva, a 14-es verziót használja a rendszer. Amikor az Auto szöveg van megadva, a rendszer lehetőség szerint automatikusan észleli a kiszolgálóverziót, egyébként alapértelmezés szerint a 14-es verziót használja. Az angoltól eltérő nyelvű SharePoint-webhelyekhez legalább 15-ös verziót kell használni.



## Category
Accessing data
