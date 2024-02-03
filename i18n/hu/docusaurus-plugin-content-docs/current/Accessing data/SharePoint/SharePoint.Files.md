---
title: SharePoint.Files
---

# SharePoint.Files


## Description

Egy olyan táblát ad vissza, amely egy SharePoint-webhelyen levő dokumentumokból áll.


## Syntax

```powerquery
SharePoint.Files(
    url as text,
    optional options as record
) as table
```


## Details

Egy olyan táblát ad vissza, amely a megadott SharePoint-webhelyen (<code>url</code>) vagy az almappákban talált minden egyes dokumentumhoz tartalmaz egy sort. Minden egyes sor tartalmazza a mappa vagy a fájl tulajdonságait, valamint egy, a tartalmukra mutató hivatkozást. A(z) <code>options</code> elemet a következő lehetőségek meghatározásához lehet megadni:    <ul><li><code>ApiVersion</code> : Egy sz&#225;m (14 vagy 15) vagy az „Auto” sz&#246;veg, amely a webhelyhez haszn&#225;latos SharePoint API-verzi&#243;t adja meg. Ha nincs megadva, a 14-es verzi&#243;t haszn&#225;lja a rendszer. Amikor az Auto sz&#246;veg van megadva, a rendszer lehetős&#233;g szerint automatikusan &#233;szleli a kiszolg&#225;l&#243;verzi&#243;t, egy&#233;bk&#233;nt alap&#233;rtelmez&#233;s szerint a 14-es verzi&#243;t haszn&#225;lja. Az angolt&#243;l elt&#233;rő nyelvű SharePoint-webhelyekhez legal&#225;bb 15-&#246;s verzi&#243;t kell haszn&#225;lni.</li></ul>    



## Category
Accessing data
