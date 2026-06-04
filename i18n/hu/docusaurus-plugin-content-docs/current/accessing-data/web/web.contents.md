---
title: Web.Contents
---

# Web.Contents


Az URL-címről letöltött tartalmat adja vissza bináris formában.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Remarks

A(z) `url` helyről letöltött tartalmat adja vissza binárisként. Egy választható rekordparaméterrel (`options`) további tulajdonságok is megadhatók. A rekord a következő mezőket tartalmazhatja:

-   `Query` : Lekérdezésparaméterek szoftveres hozzáadása az URL-címhez escape-karaktersorozat használata nélkül.
-   `ApiKeyName` : Ha a célhely API-kulcsot használ, ezzel a paraméterrel adható meg a kulcsparaméter neve (nem pedig az értéke), amelyet az URL-címben kell használni. A kulcs tényleges értéke a hitelesítő adatokban található.
-   `Headers` : Az érték rekordként való meghatározásával további fejlécek adhatók hozzá egy HTTP-kéréshez.
-   `Timeout` : Az érték időtartamként való megadása módosítja a HTTP-kérés időkorlátját. Az alapértelmezett érték 100 másodperc.
-   `ExcludedFromCacheKey` : Ha ezen értéket listaként adja meg, kizárja ezeket a HTTP-fejléckulcsokat az adatok gyorsítótárazásának számításából.
-   `IsRetry` : Ha a logikai értéket igazként adja meg, figyelmen kívül hagyja a gyorsítótárban lévő meglévő válaszokat az adatok lehívásakor.
-   `ManualStatusHandling` : Ha az értéket listaként adja meg, meggátolja azon HTTP-kérések beépített kezelését, amelyek válasza ezen állapotkódok egyikét tartalmazza.
-   `RelativePath` : Ha az értéket szövegként határozza meg, az alap URL-hez fűzi azt a kérés elvégzése előtt.
-   `Content` : Az érték megadása a webes kérést GET kérésről POST kérésre módosítja, a beállítás értékét használva a POST tartalmaként.

A HTTP-kérés GET (ha nincs megadva tartalom) vagy POST (tartalom esetén) típusú is lehet. A POST-kérések csak névtelenül hajthatóak végre.  
  
A HTTP-válasz fejlécei a bináris eredmény metaadataiként érhetők el. Az egyéni adatösszekötő környezetén kívül csak a válaszfejlécek egy részhalmaza érhető el (biztonsági okokból).


## Examples

### Example #1
`"https://bing.com/search?q=Power+Query"` tartalmának lekérése a RelativePath és a lekérdezési beállítások használatával. Ezekkel a beállításokkal dinamikusan lekérdezheti a statikus alap URL-címet.
```powerquery
let
    searchText = "Power Query"
in
    Web.Contents(
        "https://www.bing.com",
        [
            RelativePath = "search",
            Query = [q = searchText]
        ]
    )
```

Result: 
```powerquery
binary
```


### Example #2
POST végrehajtása egy URL-címen, egy bináris JSON-adattartalom továbbításával és a válasz JSON-ként történő elemzésével.
```powerquery
let
    url = ...,
    headers = [#"Content-Type" = "application/json"],
    postData = Json.FromValue([x = 235.7, y = 41.53]),
    response = Web.Contents(
        url,
        [
            Headers = headers,
            Content = postData
        ]
    ),
    jsonResponse = Json.Document(response)
in
    jsonResponse
```

Result: 
```powerquery
table
```


### Example #3
Csatlakozhat egy olyan biztonságos URL-címhez, amely elfogad hitelesítési kulcsot a lekérdezési sztringjeként. A titkos kulcs M-ben történő (biztonsági kockázatot jelentő) szoftveres kódolása helyett, a kulcs biztonságosan megadható a nevének (nem pedig az értékének) az M-ben történő megadásával, a webes API-alapú hitelesítést választva, majd a kulcs értékét a webes API hitelesítő adatainak a részeként megadva. Ilyen használat esetén a következő példa egy kérést hoz létre a következő számára: `"https://contoso.com/api/customers/get?api_key=******"`.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
