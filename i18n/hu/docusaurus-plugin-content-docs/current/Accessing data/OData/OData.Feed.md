---
title: OData.Feed
---

# OData.Feed


## Description

Egy OData-szolgáltatás által kínált OData-adatcsatornákat tartalmazó táblát ad vissza.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Details

Egy <code>serviceUri</code> URI-ról (<code>headers</code> fejléc) származó OData-szolgáltatás által kínált OData-csatornák tábláját adja vissza. Egy logikai érték, amellyel beállítható a párhuzamos kapcsolatok vagy egy választható rekordparaméter használata, a(z) <code>options</code> megadásával a következő beállítások adhatók meg:    <ul>    <li><code>Query</code>: Lekérdezésparaméterek szoftveres hozzáadása az URL-címhez escape-karaktersorozat használata nélkül.</li>    <li> <code>Headers</code>: Az érték rekordként való meghatározásával további fejlécek adhatók hozzá egy HTTP-kéréshez.</li>    <li> <code>ExcludedFromCacheKey</code>: Az érték listaként való megadásával a rendszer nem veszi figyelembe a HTTP-fejléckulcsokat a gyorsítótárazott adatok számításainál.</li>    <li> <code>ApiKeyName</code>: Ha a célhely egy API-kulcsot használ, ezzel a paraméterrel adható meg a kulcsparaméter neve (nem pedig az értéke), amelyet az URL-címben kell használni. A kulcs tényleges értéke a hitelesítő adatokban jelenik meg.</li>    <li> <code>Timeout</code>: Az érték időtartamként való megadásával módosítható a HTTP-kérés időkorlátja. Az alapértelmezett érték 600 másodperc.</li>    <li> <code>EnableBatch</code>: Egy logikai (igaz/hamis) érték, amely megadja, hogy létrejöjjön-e egy OData $kötegelt kérelem a MaxUriLength túllépésekor (az alapértelmezett érték a hamis).</li>    <li> <code>MaxUriLength</code>: Az OData-szolgáltatásnak elküldött engedélyezett URI maximális hosszát jelző szám. Ha a hossz meghaladja a korlátot, és az EnableBatch beállítása igaz, a kérelmet egy OData $kötegvégpontra küldi a rendszer, egyéb esetben a kérelem meghiúsul (az alapértelmezett érték 2048).</li>    <li> <code>Concurrent</code>: Egy logikai (igaz/hamis) érték, amelynek igaz értéke esetén a szolgáltatásra irányuló kérelmek párhuzamosan jönnek létre. Ha az érték hamis, a kérelmek egymás után jönnek létre. Ha nincs megadva, az értéket a szolgáltatás AsynchronousRequestsSupported megjegyzése határozza meg. Ha a szolgáltatás nem adja meg, hogy az AsynchronousRequestsSupported támogatott-e, a kérelmek egymás után jönnek létre.</li>    <li> <code>ODataVersion</code>: Egy szám (3 vagy 4), amely az OData-szolgáltatáshoz használatos OData-protokollverziót adja meg. Ha nincs megadva, az összes támogatott verziót kérelmezi a rendszer. A szolgáltatás verzióját a szolgáltatás által visszaadott OData-verziófejléc határozza meg.</li>    <li> <code>FunctionOverloads</code>: Egy logikai (igaz/hamis) érték, amelynek igaz beállítása esetén a függvényimportálási túlterhelések külön bejegyzésekként, hamis beállítása esetén pedig egy Union függvényként jelennek meg a kezelőben. A V3 alapértelmezett értéke: hamis. A V4 alapértelmezett értéke: igaz.</li>    <li> <code>MoreColumns</code>: Egy logikai (igaz/hamis) érték, amely igaz beállítása esetén egy Több oszlop nevű oszlopot ad hozzá minden nyitott és polimorf típust tartalmazó entitáscsatornához. Az oszlop az alaptípusban nem deklarált mezőket is tartalmazza. Ha az érték hamis, ez a mező nem jelenik meg. Az alapértelmezett érték a hamis.</li>    <li> <code>IncludeAnnotations</code>: A felvenni kívánt, névtérrel minősített kifejezésnevek vagy minták vesszővel tagolt listája, amelyekben a \* helyettesítő karakter használható. Alapértelmezés szerint egyetlen jegyzet sincs felvéve.</li>    <li> <code>IncludeMetadataAnnotations</code>: A metaadat-dokumentumok kérésekor felvenni kívánt, névtérrel minősített kifejezésnevek vagy minták vesszővel tagolt listája, amelyekben a \* helyettesítő karakter használható. Alapértelmezés szerint ugyanazok a jegyzetek vannak felvéve, mint az IncludeAnnotations esetében.</li>    <li> <code>OmitValues</code>: Engedélyezi, hogy az OData-szolgáltatás a válaszokban bizonyos értékeket ne írjon ki. Ha a szolgáltatás nyugtázza, ezek az értékek a kihagyott mezőkből lesznek kikövetkeztetve. Az elérhető lehetőségek a következők:      <ul>        <li><code>ODataOmitValues.Nulls</code> : Engedélyezi, hogy az OData-szolgáltatás kihagyja a null értékeket.</li>      </ul>    </li>    <li> <code>Implementation</code> : Az OData-összekötő használni kívánt megvalósítását adja meg. Az érvényes értékek a 2.0 és a null.</li>    </ul>


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
