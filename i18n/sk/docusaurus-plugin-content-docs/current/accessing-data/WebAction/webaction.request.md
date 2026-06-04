---
title: WebAction.Request
---

# WebAction.Request


Vytvorí akciu, ktorá po spustení vráti výsledky vykonania požiadavky HTTP ako binárnu hodnotu.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Remarks

Vytvorí akciu, ktorá po spustení vráti výsledky vykonania `method` požiadavky na `url` pomocou protokolu HTTP vo forme binárnej hodnoty. Na zadanie ďalších vlastností sa môže zadať voliteľný parameter záznamu `options`. Záznam môže obsahovať nasledujúce polia:

-   `Query` : Umožňuje pomocou programovania pridať parametre dotazu k adrese URL bez obáv z úniku údajov.
-   `ApiKeyName` : Ak má cieľová lokalita koncept kľúča rozhrania API, tento parameter sa dá použiť na zadanie názvu (nie hodnoty) kľúča parametra, ktorý sa musí použiť v URL adrese. Skutočná hodnota kľúča je zadaná v poverení.
-   `Headers` : Ak sa táto hodnota zadá ako záznam, do požiadavky HTTP sa pridajú ďalšie hlavičky.
-   `Timeout` : Ak sa táto hodnota zadá ako trvanie, zmení sa časový limit požiadavky HTTP. Predvolená hodnota je 100 sekúnd.
-   `ExcludedFromCacheKey` : Ak sa táto hodnota zadá ako zoznam, vylúčia sa tieto kľúče hlavičiek HTTP a nebudú súčasťou výpočtu súvisiaceho s ukladaním údajov do vyrovnávacej pamäte.
-   `IsRetry` : Ak bude zadaná logická hodnota true, budú sa pri načítavaní údajov ignorovať akékoľvek existujúce odpovede vo vyrovnávacej pamäti.
-   `ManualStatusHandling` : Ak sa táto hodnota zadá ako zoznam, zabráni to akémukoľvek vstavanému spracovávaniu požiadaviek HTTP, ktorých odpoveď má niektorý z týchto kódov stavu.
-   `RelativePath` : Ak sa táto hodnota zadá ako text, pripojí text k základu URL adresy pred vykonaním požiadavky.
-   `Content` : Ak sa zadá táto hodnota, jej obsah sa stane telom požiadavky HTTP.

Všimnite si, že táto funkcia je vo väčšine kontextov vypnutá. Zvážte namiesto toho použitie Web.Contents alebo Web.Headers.


## Examples

### Example #1
Vykonajte na Bing požiadavku GET.
```powerquery
WebAction.Request(WebMethod.Get, "https://bing.com")
```

Result: 
```powerquery
Action
```




## Category
Action
