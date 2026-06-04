---
title: OData.Feed
---

# OData.Feed


Egy OData-szolgáltatás által kínált OData-adatcsatornákat tartalmazó táblát ad vissza.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Remarks

OData-szolgáltatás által kínált OData-csatornák tábláját adja vissza a(z) `serviceUri` URI-ról, `headers` fejléccel. Egy logikai érték, amellyel beállítható a párhuzamos kapcsolatok vagy egy választható rekordparaméter használata, a(z) `options` megadásával a következő beállítások adhatók meg:

-   `Query`: Lekérdezésparaméterek szoftveres hozzáadása az URL-címhez escape-karaktersorozat használata nélkül.
-   `Headers`: Az érték rekordként való meghatározásával további fejlécek adhatók hozzá egy HTTP-kéréshez.
-   `ExcludedFromCacheKey`: Az érték listaként való megadásával a rendszer nem veszi figyelembe a HTTP-fejléckulcsokat a gyorsítótárazott adatok számításainál.
-   `ApiKeyName`: Ha a célhely API-kulcsot használ, ezzel a paraméterrel adható meg a kulcsparaméter neve (nem pedig az értéke), amelyet az URL-címben kell használni. A kulcs tényleges értéke a hitelesítő adatokban jelenik meg.
-   `Timeout`: Az érték időtartamként való megadásával módosítható a HTTP-kérés időkorlátja. Az alapértelmezett érték 600 másodperc.
-   `EnableBatch`: Egy logikai (igaz/hamis) érték, amely megadja, hogy létrejöjjön-e egy OData $kötegelt kérelem a MaxUriLength túllépésekor (az alapértelmezett érték a hamis).
-   `MaxUriLength`: Az OData-szolgáltatásnak elküldött engedélyezett URI maximális hosszát jelző szám. Ha a hossz meghaladja a korlátot, és az EnableBatch beállítása igaz, a kérelmet egy OData $kötegvégpontra küldi a rendszer, egyéb esetben a kérelem meghiúsul (az alapértelmezett érték 2048).
-   `Concurrent`: Egy logikai (igaz/hamis) érték, amelynek igaz értéke esetén a szolgáltatásra irányuló kérelmek párhuzamosan jönnek létre. Ha az érték hamis, a kérelmek egymás után jönnek létre. Ha nincs megadva, az értéket a szolgáltatás AsynchronousRequestsSupported megjegyzése határozza meg. Ha a szolgáltatás nem adja meg, hogy az AsynchronousRequestsSupported támogatott-e, a kérelmek egymás után jönnek létre.
-   `ODataVersion`: Egy szám (3 vagy 4), amely az OData-szolgáltatáshoz használatos OData-protokollverziót adja meg. Ha nincs megadva, az összes támogatott verziót kérelmezi a rendszer. A szolgáltatás verzióját a szolgáltatás által visszaadott OData-verziófejléc határozza meg.
-   `FunctionOverloads`: Egy logikai (igaz/hamis) érték, amelynek igaz beállítása esetén a függvényimportálási túlterhelések külön bejegyzésekként, hamis beállítása esetén pedig egy Union függvényként jelennek meg a kezelőben. A V3 alapértelmezett értéke: hamis. A V4 alapértelmezett értéke: true (igaz).
-   `MoreColumns`: Egy logikai (igaz/hamis) érték, amely igaz beállítása esetén egy Több oszlop nevű oszlopot ad hozzá minden nyitott és polimorf típust tartalmazó entitáscsatornához. Az oszlop az alaptípusban nem deklarált mezőket is tartalmazza. Ha az érték hamis, ez a mező nem jelenik meg. Az alapértelmezett érték a hamis.
-   `IncludeAnnotations`: A felvenni kívánt, névtérrel minősített kifejezésnevek vagy minták vesszővel tagolt listája, amelyekben a \* helyettesítő karakter használható. Alapértelmezés szerint egyetlen jegyzet sincs felvéve.
-   `IncludeMetadataAnnotations`: A metaadat-dokumentumok kérésekor felvenni kívánt, névtérrel minősített kifejezésnevek vagy minták vesszővel tagolt listája, amelyekben a \* helyettesítő karakter használható. Alapértelmezés szerint ugyanazok a jegyzetek vannak felvéve, mint az IncludeAnnotations esetében.
-   `OmitValues`: Engedélyezi, hogy az OData-szolgáltatás a válaszokban bizonyos értékeket ne írjon ki. Ha a szolgáltatás nyugtázza, ezek az értékek a kihagyott mezőkből lesznek kikövetkeztetve. Az elérhető lehetőségek a következők:
    -   `ODataOmitValues.Nulls` : Engedélyezi, hogy az OData-szolgáltatás kihagyja a null értékeket.
-   `Implementation` : Az OData-összekötő használni kívánt megvalósítását adja meg. Az érvényes értékek a 2.0 és a null.


## Examples

### Example #1
Csatlakozás a TripPin OData szolgáltatáshoz.
```powerquery
OData.Feed("https://services.odata.org/V4/TripPinService")
```

Result: 
```powerquery
table
```




## Category
Accessing data
