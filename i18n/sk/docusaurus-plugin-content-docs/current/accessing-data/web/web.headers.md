---
title: Web.Headers
---

# Web.Headers


Vráti hlavičky HTTP stiahnuté z adresy URL ako hodnotu záznamu.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Remarks

Vráti hlavičky stiahnuté z `url` ako záznam. Na zadanie ďalších vlastností sa môže zadať voliteľný parameter záznamu `options`. Záznam môže obsahovať nasledujúce polia:

-   `Query` : Umožňuje pomocou programovania pridať parametre dotazu k adrese URL bez obáv z úniku údajov.
-   `ApiKeyName` : Ak má cieľová lokalita koncept kľúča rozhrania API, tento parameter sa dá použiť na zadanie názvu (nie hodnoty) kľúča parametra, ktorý sa musí použiť v URL adrese. Skutočná hodnota kľúča je zadaná v poverení.
-   `Headers` : Ak sa táto hodnota zadá ako záznam, do požiadavky HTTP sa pridajú ďalšie hlavičky.
-   `Timeout` : Ak sa táto hodnota zadá ako trvanie, zmení sa časový limit požiadavky HTTP. Predvolená hodnota je 100 sekúnd.
-   `ExcludedFromCacheKey` : Ak sa táto hodnota zadá ako zoznam, vylúčia sa tieto kľúče hlavičiek HTTP a nebudú súčasťou výpočtu súvisiaceho s ukladaním údajov do vyrovnávacej pamäte.
-   `IsRetry` : Ak bude zadaná logická hodnota true, budú sa pri načítavaní údajov ignorovať akékoľvek existujúce odpovede vo vyrovnávacej pamäti.
-   `ManualStatusHandling` : Ak sa táto hodnota zadá ako zoznam, zabráni to akémukoľvek vstavanému spracovávaniu požiadaviek HTTP, ktorých odpoveď má niektorý z týchto kódov stavu.
-   `RelativePath` : Ak sa táto hodnota zadá ako text, pripojí text k základu URL adresy pred vykonaním požiadavky.

Požiadavka HTTP sa vykoná pomocou metódy HEAD. Mimo kontextu vlastného údajového konektora je k dispozícii iba podmnožina hlavičiek odpovedí (z bezpečnostných dôvodov).


## Examples

### Example #1
Načítajte hlavičky HTTP pre `"https://bing.com/search?q=Power+Query"` pomocou možností RelativePath a Query.
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
