---
title: WebAction.Request
---

# WebAction.Request


Egy műveletet hoz létre, amely a végrehajtáskor egy HTTP-kérés végrehajtásának eredményét adja vissza bináris értékként.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Remarks

Olyan művelet létrehozása, amely a végrehajtásakor a következőnek küldött HTTP-alapú `method`\-kérés végrehajtásának eredményét adja vissza bináris értékként: `url`. További tulajdonságok meghatározásához megadható egy nem kötelező rekordparaméter (`options`). A rekord a következő mezőket tartalmazhatja:

-   `Query` : Lekérdezésparaméterek szoftveres hozzáadása az URL-címhez escape-karaktersorozat használata nélkül.
-   `ApiKeyName` : Ha a célhely API-kulcsot használ, ezzel a paraméterrel adható meg a kulcsparaméter neve (nem pedig az értéke), amelyet az URL-címben kell használni. A kulcs tényleges értéke a hitelesítő adatokban található.
-   `Headers` : Az érték rekordként való meghatározásával további fejlécek adhatók hozzá egy HTTP-kéréshez.
-   `Timeout` : Az érték időtartamként való megadása módosítja a HTTP-kérés időkorlátját. Az alapértelmezett érték 100 másodperc.
-   `ExcludedFromCacheKey` : Ha ezen értéket listaként adja meg, kizárja ezeket a HTTP-fejléckulcsokat az adatok gyorsítótárazásának számításából.
-   `IsRetry` : Ha a logikai értéket igazként adja meg, figyelmen kívül hagyja a gyorsítótárban lévő meglévő válaszokat az adatok lehívásakor.
-   `ManualStatusHandling` : Ha az értéket listaként adja meg, meggátolja azon HTTP-kérések beépített kezelését, amelyek válasza ezen állapotkódok egyikét tartalmazza.
-   `RelativePath` : Ha az értéket szövegként határozza meg, az alap URL-hez fűzi azt a kérés elvégzése előtt.
-   `Content` : Ha megadja ezt az értéket, annak tartalma lesz a HTTP-kérés törzse.

Vegye figyelembe, hogy ez a függvény a legtöbb környezetben le van tiltva. Helyette a Web.Contents vagy Web.Headers használata javasolt.


## Examples

### Example #1
GET kérés küldése a Bingnek.
```powerquery
WebAction.Request(WebMethod.Get, "https://bing.com")
```

Result: 
```powerquery
Action
```




## Category
Action
