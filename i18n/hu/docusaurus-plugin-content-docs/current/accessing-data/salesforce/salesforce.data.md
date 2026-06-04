---
title: Salesforce.Data
---

# Salesforce.Data


A Salesforce-fiókban található objektumokat adja vissza.


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Remarks

A hitelesítő adatokban megadott Salesforce-fiókban található objektumokat adja vissza. A fiók a megadott környezeten (`loginUrl`) keresztül lesz csatlakoztatva. Ha nincs környezet megadva, a fiók az éles környezethez fog csatlakozni (https://login.salesforce.com). A(z) `options` választható rekordparaméter segítségével további tulajdonságok adhatók meg. A rekord a következő mezőket tartalmazhatja:

-   `CreateNavigationProperties` : Logikai (igaz/hamis) érték, amely megadja, hogy a visszaadott értékekhez létrejöjjenek-e navigációs tulajdonságok (az alapértelmezett érték a false, azaz hamis).
-   `ApiVersion` : A Salesforce API jelen lekérdezésben használandó verziója. Ha nincs megadva, a rendszer a 29.0-s verziójú API-t használja.
-   `Timeout` : Egy időtartam, amely azt vezérli, hogy a rendszer mennyi ideig várjon, mielőtt feladja a kiszolgálónak küldött kérést. Az alapértelmezett érték forrásspecifikus.



## Category
Accessing data
