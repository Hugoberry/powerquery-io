---
title: Web.Contents
---

# Web.Contents


Vrátí obsah stažený z adresy URL jako binární hodnotu.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Vrátí obsah stažený z `url` jako binární. K zadání dalších vlastností lze zadat volitelný parametr záznamu `options`. Záznam může obsahovat následující pole:

-   `Query` : Přidejte parametry dotazu k URL programově bez nutnosti starat se o uvozovací znaky
-   `ApiKeyName` : Pokud cílový web obsahuje zápis klíče rozhraní API, jde tento parametr použít k určení názvu (nikoli hodnoty) parametru klíče, který se musí použít v adrese URL. Skutečná hodnota klíče je uvedená v referenci.
-   `Headers` : Po zadání této hodnoty jako záznamu doplníte do požadavku HTTP další záhlaví.
-   `Timeout` : Po zadání této hodnoty jako doby trvání se změní časový limit požadavku HTTP. Výchozí hodnota je 100 sekund.
-   `ExcludedFromCacheKey` : Po zadání této hodnoty jako seznamu vyloučíte tyto klíče záhlaví protokolu HTTP jako součást výpočtu pro ukládání dat do mezipaměti.
-   `IsRetry` : Po zadání této logické hodnoty jako true se budou při načítání dat ignorovat všechny existující odpovědi v mezipaměti.
-   `ManualStatusHandling` : Po zadání této hodnoty jako seznamu zabráníte všem integrovaným zpracováním požadavků HTTP, jejichž odpověď obsahuje jeden z těchto stavových kódů.
-   `RelativePath` : Po zadání této hodnoty jako textu ji před vytvořením žádosti připojíte k bázi URL.
-   `Content` : Po zadání této hodnoty se změní webový požadavek z GET na POST, který jako obsah POST použije hodnotu možnosti.

Žádosti HTTP se provádí jako GET (pokud není zadán žádný obsah) nebo POST (pokud existuje obsah). Žádosti POST jdou provádět jen anonymně.  
  
Hlavičky odpovědi HTTP jsou k dispozici jako metadata binárního výsledku. Mimo kontext vlastního datového konektoru je k dispozici jen podmnožina hlaviček odpovědí (z bezpečnostních důvodů).


## Examples

### Example #1
Načtěte obsah `"https://bing.com/search?q=Power+Query"` pomocí možností RelativePath a Query. Tyto možnosti se dají použít k dynamickému dotazování na statickou základní adresu URL.
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
Proveďte příkaz POST s adresou URL a předejte binární datovou část JSON a analyzuje odpověď jako JSON.
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
Připojení k zabezpečené adrese URL, která přijímá ověřovací klíč jako součást řetězce dotazu. Namísto pevného kódování tajného klíče v M (což by představovalo bezpečnostní riziko) lze klíč bezpečně poskytnout tak, že zadáte jeho název (nikoli hodnotu) v M, zvolíte ověřování webového rozhraní API a zadáte hodnotu klíče jako součást přihlašovacích údajů webového rozhraní API. Při použití tohoto způsobu bude následující příklad generovat požadavek na `"https://contoso.com/api/customers/get?api_key=******"`.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
