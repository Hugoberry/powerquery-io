---
title: WebAction.Request
---

# WebAction.Request


Vytvoří akci, která při spuštění vrátí výsledky provedení požadavku HTTP jako binární hodnotu.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Remarks

Vytvoří akci, která po provedení vrátí výsledky provedení `method` žádosti na `url` pomocí HTTP jako binární hodnoty. Může se zadat volitelný parametr záznamu `options`, aby se určily další vlastnosti. Záznam může obsahovat následující pole:

-   `Query` : Přidejte parametry dotazu k URL programově bez nutnosti starat se o uvozovací znaky
-   `ApiKeyName` : Pokud cílový web obsahuje zápis klíče rozhraní API, jde tento parametr použít k určení názvu (nikoli hodnoty) parametru klíče, který se musí použít v adrese URL. Skutečná hodnota klíče je uvedená v referenci.
-   `Headers` : Po zadání této hodnoty jako záznamu doplníte do požadavku HTTP další záhlaví.
-   `Timeout` : Po zadání této hodnoty jako doby trvání se změní časový limit požadavku HTTP. Výchozí hodnota je 100 sekund.
-   `ExcludedFromCacheKey` : Po zadání této hodnoty jako seznamu vyloučíte tyto klíče záhlaví protokolu HTTP jako součást výpočtu pro ukládání dat do mezipaměti.
-   `IsRetry` : Po zadání této logické hodnoty jako true se budou při načítání dat ignorovat všechny existující odpovědi v mezipaměti.
-   `ManualStatusHandling` : Po zadání této hodnoty jako seznamu zabráníte všem integrovaným zpracováním požadavků HTTP, jejichž odpověď obsahuje jeden z těchto stavových kódů.
-   `RelativePath` : Po zadání této hodnoty jako textu ji před vytvořením žádosti připojíte k bázi URL.
-   `Content` : Po zadání této hodnoty se její obsah stane textem zprávy požadavku HTTP.

Upozorňujeme, že tato funkce je ve většině kontextů zakázaná. Zvažte místo toho použití funkcí Web.Contents nebo Web.Headers.


## Examples

### Example #1
Proveďte v rámci služby požadavek GET.
```powerquery
WebAction.Request(WebMethod.Get, "https://bing.com")
```

Result: 
```powerquery
Action
```




## Category
Action
