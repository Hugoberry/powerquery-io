---
title: OData.Feed
---

# OData.Feed


Vráti tabuľku informačných kanálov OData ponúknutú službou OData.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Remarks

Vráti tabuľku informačných kanálov OData poskytovaných službou OData z identifikátora URI `serviceUri` a hlavičiek `headers`. Logická hodnota určujúca, či sa majú použiť súbežné pripojenia, alebo možno zadať voliteľný parameter záznamu `options`, ktorým sa riadia nasledujúce možnosti:

-   `Query`: Programovo pridajte do adresy URL parametre dopytu bez toho, aby ste sa museli zaoberať escapovaním.
-   `Headers`: Ak je táto hodnota zadaná ako záznam, poskytne dodatočné hlavičky pre požiadavku HTTP.
-   `ExcludedFromCacheKey`: Ak je táto hodnota zadaná ako zoznam, tieto kľúče hlavičiek HTTP budú vylúčené z výpočtu kľúča ukladania údajov do vyrovnávacej pamäte.
-   `ApiKeyName`: Ak cieľová lokalita obsahuje koncept kľúča rozhrania API, tento parameter možno použiť na zadanie názvu (nie hodnoty) parametra kľúča, ktorý sa musí použiť v URL adrese. Skutočná hodnota kľúča je uvedená v prihlasovacích údajoch.
-   `Timeout`: Ak je táto hodnota zadaná ako trvanie, zmení sa časový limit požiadavky HTTP. Predvolená hodnota je 600 sekúnd.
-   `EnableBatch`: Logická hodnota (true/false), ktorá nastavuje, či sa má povoliť generovanie požiadavky OData $batch, ak je prekročená hodnota MaxUriLength (predvolená hodnota je false).
-   `MaxUriLength`: Číslo, ktoré určuje maximálnu dĺžku povoleného identifikátora URI odoslaného službe OData. Ak je táto hodnota prekročená a EnableBatch má hodnotu true, požiadavka sa odošle na koncový bod OData $batch, inak zlyhá (predvolená hodnota je 2048).
-   `Concurrent`: Logická hodnota (true/false); ak je nastavená na true, požiadavky na službu sa budú vykonávať súbežne. Ak je nastavená na false, požiadavky sa budú vykonávať sekvenčne. Ak táto hodnota nie je zadaná, určí sa podľa anotácie služby AsynchronousRequestsSupported. Ak služba neurčuje, či je podporovaná vlastnosť AsynchronousRequestsSupported, požiadavky sa budú vykonávať sekvenčne.
-   `ODataVersion`: Číslo (3 alebo 4), ktoré určuje verziu protokolu OData, ktorá sa má použiť pre túto službu OData. Ak táto hodnota nie je zadaná, vyžiadajú sa všetky podporované verzie. Verzia služby sa určí podľa hlavičky OData-Version vrátenej službou.
-   `FunctionOverloads`: Logická hodnota (true/false); ak je nastavená na true, preťaženia importovaných funkcií sa v navigátore zobrazia ako samostatné položky, ak je nastavená na false, zobrazia sa v navigátore ako jedna zjednotená funkcia. Predvolená hodnota pre V3: false. Predvolená hodnota pre V4: true.
-   `MoreColumns`: Logická hodnota (true/false); ak je nastavená na true, pridá do každého informačného kanála entity stĺpec "More Columns", ktorý obsahuje otvorené typy a polymorfné typy. Tento stĺpec bude obsahovať polia, ktoré nie sú deklarované v základnom type. Ak je hodnota false, toto pole nebude prítomné. Predvolená hodnota je false.
-   `IncludeAnnotations`: Zoznam názvov termínov kvalifikovaných priestorom názvov alebo vzorov oddelených čiarkami, ktoré sa majú zahrnúť, pričom "\*" slúži ako zástupný znak. V predvolenom nastavení nie sú zahrnuté žiadne anotácie.
-   `IncludeMetadataAnnotations`: Zoznam názvov termínov kvalifikovaných priestorom názvov alebo vzorov oddelených čiarkami, ktoré sa majú zahrnúť do požiadaviek na dokument metadát, pričom "\*" slúži ako zástupný znak. V predvolenom nastavení zahŕňa rovnaké anotácie ako IncludeAnnotations.
-   `OmitValues`: Umožňuje službe OData vynechať zapisovanie určitých hodnôt v odpovediach. Ak to služba potvrdí, tieto hodnoty odvodíme z vynechaných polí. Možnosti zahŕňajú:
    -   `ODataOmitValues.Nulls`: Umožňuje službe OData vynechať hodnoty null.
-   `Implementation`: Určuje implementáciu konektora OData, ktorá sa má použiť. Platné hodnoty sú "2.0" alebo null.


## Examples

### Example #1
Pripojí sa k službe TripPin OData.
```powerquery
OData.Feed("https://services.odata.org/V4/TripPinService")
```

Result: 
```powerquery
table
```




## Category
Accessing data
