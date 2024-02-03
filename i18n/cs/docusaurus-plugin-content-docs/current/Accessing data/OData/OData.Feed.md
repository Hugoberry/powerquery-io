---
title: OData.Feed
---

# OData.Feed


## Description

Vrátí tabulku datových kanálů OData nabízených službou OData.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Details

Vrátí tabulku kanálů OData nabízených službou OData z URI <code>serviceUri</code> s hlavičkami <code>headers</code>. Je možné zadat logickou hodnotu, která určuje, jestli se pro určení následujících možností mají používat souběžná připojení, nebo volitelný parametr záznamu <code>options</code>:    <ul>    <li><code>Query</code>: Programově přidá parametry dotazu do adresy URL, aniž byste se museli starat o zadávání řídicích znaků. </li>    <li> <code>Headers</code>: Zadáním této hodnoty jako záznamu přidáte do požadavku HTTP další hlavičky.</li>    <li> <code>ExcludedFromCacheKey</code>: Zadáním této hodnoty jako seznamu zabráníte těmto klíčům hlavičky http, aby byly součástí výpočtu pro ukládání dat do mezipaměti.</li>    <li> <code>ApiKeyName</code>: Pokud cílový web zná klíč rozhraní API, je možné pomocí tohoto parametru zadat název (nikoliv hodnotu) parametru klíče, který musí být použitý v adrese URL. Skutečná hodnota klíče se zadává v přihlašovacích údajích.</li>    <li> <code>Timeout</code>: Zadáním této hodnoty jako doby trvání změníte časový limit pro požadavek HTTP. Výchozí hodnota je 600 sekund.</li>    <li> <code>EnableBatch</code>: Logická hodnota (true/false), která určuje, jestli se má povolit generování žádosti OData $batch, pokud se překročí hodnota MaxUriLength (výchozí hodnota je false).</li>    <li> <code>MaxUriLength</code>: Číslo, které udává maximální délku povoleného URI posílaného službě OData. Pokud se délka překročí a parametr EnableBatch bude mít hodnotu true, pak se iniciuje žádost na koncový bod OData $batch, jinak dojde k chybě (výchozí hodnota je 2048).</li>    <li> <code>Concurrent</code>: Logická hodnota (true/false). Pokud je nastavená hodnota true, budou se požadavky na službu zadávat souběžně. Pokud má hodnotu false, budou se požadavky zadávat sekvenčně. Pokud hodnota není zadaná, určí se podle zápisu AsynchronousRequestsSupported služby. Pokud služba nespecifikuje, jestli se podporuje zápis AsynchronousRequestsSupported, budou se požadavky zadávat sekvenčně.</li>    <li> <code>ODataVersion</code>: Číslo (3 nebo 4). To určuje verzi protokolu OData, která se má používat pro tuto službu OData. Pokud není hodnota zadaná, budou se požadovat všechny podporované verze. Verze služby se určí podle hlavičky OData-Version vrácené službou.</li>    <li> <code>FunctionOverloads</code>: Logická hodnota (true/false). Pokud je nastavená hodnota true, budou se přetížení při importu funkce v navigátoru uvádět jako samostatné položky, pokud je nastavená hodnota false, budou se přetížení při importu funkce v navigátoru uvádět jako jedna sjednocovací funkce. Výchozí hodnota pro V3: false. Výchozí hodnota pro V4: true.</li>    <li> <code>MoreColumns</code>: Logická hodnota (true/false). Pokud je true, přidá sloupec „More Columns“ ke každému informačnímu kanálu entity, který obsahuje otevřené a polymorfní typy. Ten bude obsahovat pole nedeklarovaná v základním typu. Je-li false, toto pole se nepřidá. Výchozí hodnota je false.</li>    <li> <code>IncludeAnnotations</code>: Čárkou oddělený seznam oborem názvů kvalifikovaných názvů termínů nebo vzorů, které obsahují znak \* jako zástupný znak. Standardně není zahrnuta žádná anotace.</li>    <li> <code>IncludeMetadataAnnotations</code>: Čárkou oddělený seznam oborem názvů kvalifikovaných názvů termínů nebo vzorů, které budou zahrnuty v požadavcích dokumentu metadat a obsahují znak \* jako zástupný znak. Standardně obsahují stejné anotace jako IncludeAnnotations.</li>    <li> <code>OmitValues</code>: Umožňuje službě OData nezapisovat do odpovědí určité hodnoty. Pokud je potvrzeno, hodnoty z vynechaných polí odvodíme. Možnosti:      <ul>        <li><code>ODataOmitValues.Nulls</code>: Umožňuje službě OData vynechat hodnoty null.</li>      </ul>    </li>    <li> <code>Implementace</code>: Určuje implementaci konektoru OData, která se má použít. Platné hodnoty jsou 2.0 nebo null.</li>    </ul>


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
