---
title: Web.Headers
---

# Web.Headers


Az URL-címről letöltött HTTP-fejléceket adja vissza rekordértékként.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Remarks

A(z) `url` helyről letöltött fejléceket adja vissza rekordként. További tulajdonságok meghatározásához megadható egy nem kötelező rekordparaméter (`options`). A rekord a következő mezőket tartalmazhatja:

-   `Query` : Lekérdezésparaméterek szoftveres hozzáadása az URL-címhez escape-karaktersorozat használata nélkül.
-   `ApiKeyName` : Ha a célhely API-kulcsot használ, ezzel a paraméterrel adható meg a kulcsparaméter neve (nem pedig az értéke), amelyet az URL-címben kell használni. A kulcs tényleges értéke a hitelesítő adatokban található.
-   `Headers` : Az érték rekordként való meghatározásával további fejlécek adhatók hozzá egy HTTP-kéréshez.
-   `Timeout` : Az érték időtartamként való megadása módosítja a HTTP-kérés időkorlátját. Az alapértelmezett érték 100 másodperc.
-   `ExcludedFromCacheKey` : Ha ezen értéket listaként adja meg, kizárja ezeket a HTTP-fejléckulcsokat az adatok gyorsítótárazásának számításából.
-   `IsRetry` : Ha a logikai értéket igazként adja meg, figyelmen kívül hagyja a gyorsítótárban lévő meglévő válaszokat az adatok lehívásakor.
-   `ManualStatusHandling` : Ha az értéket listaként adja meg, meggátolja azon HTTP-kérések beépített kezelését, amelyek válasza ezen állapotkódok egyikét tartalmazza.
-   `RelativePath` : Ha az értéket szövegként határozza meg, az alap URL-hez fűzi azt a kérés elvégzése előtt.

A HTTP-kérés a HEAD metódussal történik. Az egyéni adatösszekötő környezetén kívül csak a válaszfejlécek egy részhalmaza érhető el (biztonsági okokból).


## Examples

### Example #1
A `"https://bing.com/search?q=Power+Query"` HTTP-fejléceinek lekérése a RelativePath és a Query beállításokkal.
```powerquery
let
    searchText = "Power Query"
in
    Web.Headers(
        "https://www.bing.com",
        [
            RelativePath = "search",
            Query = [q = searchText]
        ]
    )
```

Result: 
```powerquery
([
    #"Cache-Control" = "private, max-age=0",
    #"Content-Encoding" = "gzip",
    #"Content-Length" = "0",
    #"Content-Type" = "text/html; charset=utf-8",
    Date = "Tue, 14 Dec 2021 16:57:25 GMT",
    Expires = "Tue, 14 Dec 2021 16:56:25 GMT",
    Vary = "Accept-Encoding"
]
meta [
    Response.Status = 200
])
```




## Category
Accessing data
