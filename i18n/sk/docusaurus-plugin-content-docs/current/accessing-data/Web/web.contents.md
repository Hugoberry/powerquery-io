---
title: Web.Contents
---

# Web.Contents


Vráti obsah stiahnutý z adresy URL ako binárny údaj.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Vráti obsah stiahnutý z `url` ako binárny. Na zadanie ďalších vlastností možno zadať voliteľný parameter záznamu `options`. Záznam môže obsahovať nasledujúce polia:

-   `Query` : Umožňuje pomocou programovania pridať parametre dotazu k adrese URL bez obáv z úniku údajov.
-   `ApiKeyName` : Ak má cieľová lokalita koncept kľúča rozhrania API, tento parameter sa dá použiť na zadanie názvu (nie hodnoty) kľúča parametra, ktorý sa musí použiť v URL adrese. Skutočná hodnota kľúča je zadaná v poverení.
-   `Headers` : Ak sa táto hodnota zadá ako záznam, do požiadavky HTTP sa pridajú ďalšie hlavičky.
-   `Timeout` : Ak sa táto hodnota zadá ako trvanie, zmení sa časový limit požiadavky HTTP. Predvolená hodnota je 100 sekúnd.
-   `ExcludedFromCacheKey` : Ak sa táto hodnota zadá ako zoznam, vylúčia sa tieto kľúče hlavičiek HTTP a nebudú súčasťou výpočtu súvisiaceho s ukladaním údajov do vyrovnávacej pamäte.
-   `IsRetry` : Ak bude zadaná logická hodnota true, budú sa pri načítavaní údajov ignorovať akékoľvek existujúce odpovede vo vyrovnávacej pamäti.
-   `ManualStatusHandling` : Ak sa táto hodnota zadá ako zoznam, zabráni to akémukoľvek vstavanému spracovávaniu požiadaviek HTTP, ktorých odpoveď má niektorý z týchto kódov stavu.
-   `RelativePath` : Ak sa táto hodnota zadá ako text, pripojí text k základu URL adresy pred vykonaním požiadavky.
-   `Content` : Ak sa zadá táto hodnota, zmení sa webová požiadavka z metódy GET na POST, pričom sa použije hodnota možnosti ako obsah metódy POST.

Požiadavka HTTP sa vykoná ako GET (ak nie je zadaný žiadny obsah) alebo POST (ak existuje obsah). Požiadavky POST môžu byť odosielané iba anonymne.  
  
Hlavičky odpovede HTTP sú k dispozícii ako metaúdaje v binárnom výsledku. Mimo kontextu vlastného údajového konektora je k dispozícii iba podmnožina hlavičiek odpovedí (z bezpečnostných dôvodov).


## Examples

### Example #1
Načítajte obsah `"https://bing.com/search?q=Power+Query"` pomocou možností RelativePath a Query. Tieto možnosti je možné použiť na dynamické dotazovanie statickej základnej URL adresy.
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
Vykonajte na URL adresu požiadavku POST, pričom sa odovzdá binárna údajová časť formátu JSON a odpoveď sa analyzuje ako JSON.
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
Pripojte sa k zabezpečenej URL adrese, ktorá prijíma overovací kľúč ako súčasť reťazca dotazu. Namiesto pevného zakódovania tajného kľúča v M (čo by predstavovalo bezpečnostné riziko), kľúč možno poskytnúť bezpečne zadaním jeho názvu (nie jeho hodnoty) v M, výberom overenia webového rozhrania API a zadaním hodnoty kľúča ako súčasti poverenia webového rozhrania API. Pri použití týmto spôsobom nasledujúci príklad vygeneruje požiadavku na `"https://contoso.com/api/customers/get?api_key=******"`.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
