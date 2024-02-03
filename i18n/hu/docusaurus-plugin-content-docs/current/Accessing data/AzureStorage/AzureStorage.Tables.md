---
title: AzureStorage.Tables
---

# AzureStorage.Tables


## Description

Egy olyan navigációs táblát ad vissza, amely egy Azure-tároló megadott fiókjában található táblákat tartalmazza.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Details

Egy olyan navigációs táblát ad vissza, amely a fiók URL-címében (<code>account</code>) található táblák sorait tartalmazza egy Azure Storage-tárból. Minden sor az Azure-táblára mutató hivatkozást tartalmaz. A további tulajdonságok megadásához egy választható rekordparamétert (<code>options</code>) lehet megadni. A rekord a következő mezőket tartalmazhatja:    <ul><li><code>Timeout</code> : Egy időtartam, amely azt vez&#233;rli, hogy a rendszer mennyi ideig v&#225;rjon, mielőtt feladja a kiszolg&#225;l&#243;nak k&#252;ld&#246;tt k&#233;r&#233;st. Az alap&#233;rtelmezett &#233;rt&#233;k forr&#225;sspecifikus.</li></ul>



## Category
Accessing data
