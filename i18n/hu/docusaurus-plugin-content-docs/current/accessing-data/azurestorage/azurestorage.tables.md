---
title: AzureStorage.Tables
---

# AzureStorage.Tables


Egy olyan navigációs táblát ad vissza, amely egy Azure-tároló megadott fiókjában található táblákat tartalmazza.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Remarks

Egy olyan navigációs táblát ad vissza, amely a fiók URL-címében (`account`) található táblák sorait tartalmazza egy Azure Storage-tárból. Minden sor az Azure-táblára mutató hivatkozást tartalmaz. Egy választható rekordparaméterrel (`options`) további tulajdonságok is megadhatók. A rekord a következő mezőket tartalmazhatja:

-   `Timeout` : Egy időtartam, amely azt vezérli, hogy a rendszer mennyi ideig várjon, mielőtt feladja a kiszolgálónak küldött kérést. Az alapértelmezett érték forrásspecifikus.



## Category
Accessing data
