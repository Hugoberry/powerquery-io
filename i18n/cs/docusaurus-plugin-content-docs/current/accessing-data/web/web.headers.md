---
title: Web.Headers
---

# Web.Headers


Vrátí hlavičky HTTP stažené z adresy URL jako hodnotu záznamu.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Remarks

Vrátí hlavičky stažené z `url` jako záznam. Může se zadat volitelný parametr záznamu `options`, aby se určily další vlastnosti. Záznam může obsahovat následující pole:

-   `Query` : Přidejte parametry dotazu k URL programově bez nutnosti starat se o uvozovací znaky
-   `ApiKeyName` : Pokud cílový web obsahuje zápis klíče rozhraní API, jde tento parametr použít k určení názvu (nikoli hodnoty) parametru klíče, který se musí použít v adrese URL. Skutečná hodnota klíče je uvedená v referenci.
-   `Headers` : Po zadání této hodnoty jako záznamu doplníte do požadavku HTTP další záhlaví.
-   `Timeout` : Po zadání této hodnoty jako doby trvání se změní časový limit požadavku HTTP. Výchozí hodnota je 100 sekund.
-   `ExcludedFromCacheKey` : Po zadání této hodnoty jako seznamu vyloučíte tyto klíče záhlaví protokolu HTTP jako součást výpočtu pro ukládání dat do mezipaměti.
-   `IsRetry` : Po zadání této logické hodnoty jako true se budou při načítání dat ignorovat všechny existující odpovědi v mezipaměti.
-   `ManualStatusHandling` : Po zadání této hodnoty jako seznamu zabráníte všem integrovaným zpracováním požadavků HTTP, jejichž odpověď obsahuje jeden z těchto stavových kódů.
-   `RelativePath` : Po zadání této hodnoty jako textu ji před vytvořením žádosti připojíte k bázi URL.

Žádost HTTP se provádí metodou HEAD. Mimo kontext vlastního datového konektoru je k dispozici jen podmnožina hlaviček odpovědí (z bezpečnostních důvodů).


## Examples

### Example #1
Pomocí možností RelativePath a Query načtěte hlavičky HTTP pro `"https://bing.com/search?q=Power+Query"`.
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
