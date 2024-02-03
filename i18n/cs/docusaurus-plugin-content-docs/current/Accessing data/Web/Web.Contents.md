---
title: Web.Contents
---

# Web.Contents


## Description

Vrátí obsah stažený z adresy URL jako binární hodnotu.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Details

Vrátí obsah stažený z <code>url</code> jako binární. Může se zadat volitelný parametr záznamu <code>options</code>, aby se určily další vlastnosti. Záznam může obsahovat následující pole:    <ul><li><code>Query</code> : Přidejte parametry dotazu k URL programově bez nutnosti starat se o uvozovac&#237; znaky</li><li><code>ApiKeyName</code> : Pokud c&#237;lov&#253; web obsahuje z&#225;pis kl&#237;če rozhran&#237; API, jde tento parametr použ&#237;t k určen&#237; n&#225;zvu (nikoli hodnoty) parametru kl&#237;če, kter&#253; se mus&#237; použ&#237;t v adrese URL. Skutečn&#225; hodnota kl&#237;če je uveden&#225; v referenci.</li><li><code>Headers</code> : Po zad&#225;n&#237; t&#233;to hodnoty jako z&#225;znamu dopln&#237;te do požadavku HTTP dalš&#237; z&#225;hlav&#237;.</li><li><code>Timeout</code> : Po zad&#225;n&#237; t&#233;to hodnoty jako doby trv&#225;n&#237; se změn&#237; časov&#253; limit požadavku HTTP. V&#253;choz&#237; hodnota je 100 sekund.</li><li><code>ExcludedFromCacheKey</code> : Po zad&#225;n&#237; t&#233;to hodnoty jako seznamu vylouč&#237;te tyto kl&#237;če z&#225;hlav&#237; protokolu HTTP jako souč&#225;st v&#253;počtu pro ukl&#225;d&#225;n&#237; dat do mezipaměti.</li><li><code>IsRetry</code> : Po zad&#225;n&#237; t&#233;to logick&#233; hodnoty jako true se budou při nač&#237;t&#225;n&#237; dat ignorovat všechny existuj&#237;c&#237; odpovědi v mezipaměti.</li><li><code>ManualStatusHandling</code> : Po zad&#225;n&#237; t&#233;to hodnoty jako seznamu zabr&#225;n&#237;te všem integrovan&#253;m zpracov&#225;n&#237;m požadavků HTTP, jejichž odpověď obsahuje jeden z těchto stavov&#253;ch k&#243;dů.</li><li><code>RelativePath</code> : Po zad&#225;n&#237; t&#233;to hodnoty jako textu ji před vytvořen&#237;m ž&#225;dosti připoj&#237;te k b&#225;zi URL.</li><li><code>Content</code> : Po zad&#225;n&#237; t&#233;to hodnoty se změn&#237; webov&#253; požadavek z GET na POST, kter&#253; jako obsah POST použije hodnotu možnosti.</li></ul>    Žádosti HTTP se provádí jako GET (pokud není zadán žádný obsah) nebo POST (pokud existuje obsah). Žádosti POST jdou provádět jen anonymně.    <br />    Hlavičky odpovědi HTTP jsou k dispozici jako metadata binárního výsledku. Mimo kontext vlastního datového konektoru je k dispozici jen podmnožina hlaviček odpovědí (z bezpečnostních důvodů).    


## Examples

### Example #1 
Načtěte obsah &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; pomocí možností RelativePath a Query. Tyto možnosti se dají použít k dynamickému dotazování na statickou základní adresu URL.
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
Připojení k zabezpečené adrese URL, která přijímá ověřovací klíč jako součást řetězce dotazu. Namísto pevného kódování tajného klíče v M (což by představovalo bezpečnostní riziko)     lze klíč bezpečně poskytnout tak, že zadát jeho název (nikoli hodnotu) v M, zvolíte ověřování webového rozhraní API a zadáte hodnotu klíče jako součástpřihlašovacích údajů webového rozhraní API.    Při použití tohoto způsobu bude následující příklad generovat požadavek na &lt;code&gt;&#34;https://contoso.com/api/customers/get?api_key=\*\*\*\*\*\*&#34;&lt;/code&gt;.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
