---
title: OData.Feed
---

# OData.Feed


Vrátí tabulku datových kanálů OData nabízených službou OData.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Remarks

Vrátí tabulku datových kanálů OData nabízených službou OData z identifikátoru URI `serviceUri`, hlavičky `headers`. Logická hodnota, která určuje, jestli se mají používat souběžná připojení, nebo volitelný parametr záznamu `options`. Může být zadána pro řízení následujících možností:

-   `Query`: Přidejte parametry dotazu k URL programově bez nutnosti starat se o uvozovací znaky.
-   `Headers`:Po zadání této hodnoty jako záznamu doplníte do požadavku HTTP další záhlaví.
-   `ExcludedFromCacheKey`:Po zadání této hodnoty jako seznamu vyloučíte tyto klíče záhlaví protokolu HTTP jako součást výpočtu pro ukládání dat do mezipaměti.
-   `ApiKeyName`: Pokud cílový web obsahuje zápis klíče rozhraní API, jde tento parametr použít k určení názvu (nikoli hodnoty) parametru klíče, který se musí použít v adrese URL. Skutečná hodnota klíče je zadaná v přihlašovacích údajích.
-   `Timeout`: Zadáním této hodnoty jako doby trvání se změní časový limit požadavku HTTP. Výchozí hodnota je 600 sekund.
-   `EnableBatch`: Logická hodnota (true/false), která nastavuje, jestli se má povolit generování požadavku OData $batch, pokud je překročena hodnota MaxUriLength (výchozí hodnota je false).
-   `MaxUriLength`: Číslo označující maximální délku povoleného identifikátoru URI odeslaného do služby OData. Pokud dojde k překročení a hodnota EnableBatch je nastavená na true, požadavek se odešle do koncového bodu OData $batch, jinak selže (výchozí hodnota je 2048).
-   `Concurrent`: Pokud je logická hodnota (true/false) nastavená na true, budou se požadavky na službu provádět souběžně. Když se nastaví na false, požadavky se budou provádět sekvenčně. Pokud není zadána, hodnota bude určena poznámkou AsynchronousRequestsSupported služby. Pokud služba neurčí, jestli se poznámka AsynchronousRequestsSupported podporuje, budou se požadavky provádět sekvenčně.
-   `ODataVersion`: Číslo (3 nebo 4), které určuje verzi protokolu OData, která se má použít pro službu OData. Pokud nebude zadána, budou požadovány všechny podporované verze. Verze služby bude určena hlavičkou OData-Version vrácenou službou.
-   `FunctionOverloads`: Pokud je logická hodnota (true/false) nastavená na true, přetížení importu funkce se v navigátoru zobrazí jako samostatné položky. Pokud je nastavená na false, přetížení importu funkce se v navigátoru zobrazí jako jedna sjednocená funkce. Výchozí hodnota pro V3: false. Výchozí hodnota pro V4: true.
-   `MoreColumns`: Pokud je logická hodnota (true/false) nastavená na true, přidá do každého kanálu entity sloupec „Další sloupce“ obsahující otevřené typy a polymorfní typy. Bude obsahovat pole, která nejsou deklarovaná v základním typu. Pokud je hodnota false, toto pole není k dispozici. Výchozí hodnota je false.
-   `IncludeAnnotations`: Čárkami oddělený seznam názvů termínů nebo vzorů kvalifikovaných v oboru názvů, které se mají zahrnout se znakem \* jakožto zástupným znakem. Ve výchozím nastavení nejsou žádné poznámky zahrnuté.
-   `IncludeMetadataAnnotations`: Čárkami oddělený seznam názvů termínů nebo vzorů kvalifikovaných v oboru názvů, které se mají v požadavcích dokumentu metadat zahrnout se znakem \* jakožto zástupným znakem. Ve výchozím nastavení obsahuje stejné poznámky jako IncludeAnnotations.
-   `OmitValues`: Umožňuje službě OData vyhnout se zápisu určitých hodnot v odpovědích. Pokud to služba potvrdí, odvodíme tyto hodnoty z vynechaných polí. Možnosti zahrnují:
    -   `ODataOmitValues.Nulls`: Umožňuje službě OData vynechat hodnoty null.
-   `Implementation`: Určuje implementaci konektoru OData, který se má použít. Platné hodnoty jsou 2.0 nebo null.


## Examples

### Example #1
Připojte se ke službě TripPin OData.
```powerquery
OData.Feed("https://services.odata.org/V4/TripPinService")
```

Result: 
```powerquery
table
```




## Category
Accessing data
