---
title: Salesforce.Reports
---

# Salesforce.Reports


A Salesforce-fiókban található jelentéseket adja vissza.


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Remarks

A hitelesítő adatokban megadott Salesforce-fiókban található objektumokat adja vissza. A fiók a megadott környezeten (`loginUrl`) keresztül lesz csatlakoztatva. Ha nincs környezet megadva, a fiók az éles környezethez fog csatlakozni (https://login.salesforce.com). A(z) `options` választható rekordparaméter segítségével további tulajdonságok adhatók meg. A rekord a következő mezőket tartalmazhatja:

-   `ApiVersion` : A Salesforce API jelen lekérdezésben használandó verziója. Ha nincs megadva, a rendszer a 29.0-s verziójú API-t használja.
-   `Timeout` : Egy időtartam, amely azt vezérli, hogy a rendszer mennyi ideig várjon, mielőtt feladja a kiszolgálónak küldött kérést. Az alapértelmezett érték forrásspecifikus.



## Category
Accessing data
