---
title: Web.Contents
---

# Web.Contents


## Description

Az URL-címről letöltött tartalmat adja vissza bináris formában.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Details

A(z) <code>url</code> helyről letöltött tartalmat adja vissza binárisként. További tulajdonságok meghatározásához megadható egy nem kötelező rekordparaméter (<code>options</code>). A rekord a következő mezőket tartalmazhatja: <ul><li><code>Query</code> : Lek&#233;rdez&#233;sparam&#233;terek szoftveres hozz&#225;ad&#225;sa az URL-c&#237;mhez escape-karaktersorozat haszn&#225;lata n&#233;lk&#252;l.</li><li><code>ApiKeyName</code> : Ha a c&#233;lhely API-kulcsot haszn&#225;l, ezzel a param&#233;terrel adhat&#243; meg a kulcsparam&#233;ter neve (nem pedig az &#233;rt&#233;ke), amelyet az URL-c&#237;mben kell haszn&#225;lni. A kulcs t&#233;nyleges &#233;rt&#233;ke a hiteles&#237;tő adatokban tal&#225;lhat&#243;.</li><li><code>Headers</code> : Az &#233;rt&#233;k rekordk&#233;nt val&#243; meghat&#225;roz&#225;s&#225;val tov&#225;bbi fejl&#233;cek adhat&#243;k hozz&#225; egy HTTP-k&#233;r&#233;shez.</li><li><code>Timeout</code> : Az &#233;rt&#233;k időtartamk&#233;nt val&#243; megad&#225;sa m&#243;dos&#237;tja a HTTP-k&#233;r&#233;s időkorl&#225;tj&#225;t. Az alap&#233;rtelmezett &#233;rt&#233;k 100 m&#225;sodperc.</li><li><code>ExcludedFromCacheKey</code> : Ha ezen &#233;rt&#233;ket listak&#233;nt adja meg, kiz&#225;rja ezeket a HTTP-fejl&#233;ckulcsokat az adatok gyors&#237;t&#243;t&#225;raz&#225;s&#225;nak sz&#225;m&#237;t&#225;s&#225;b&#243;l.</li><li><code>IsRetry</code> : Ha a logikai &#233;rt&#233;ket igazk&#233;nt adja meg, figyelmen k&#237;v&#252;l hagyja a gyors&#237;t&#243;t&#225;rban l&#233;vő megl&#233;vő v&#225;laszokat az adatok leh&#237;v&#225;sakor.</li><li><code>ManualStatusHandling</code> : Ha az &#233;rt&#233;ket listak&#233;nt adja meg, megg&#225;tolja azon HTTP-k&#233;r&#233;sek be&#233;p&#237;tett kezel&#233;s&#233;t, amelyek v&#225;lasza ezen &#225;llapotk&#243;dok egyik&#233;t tartalmazza.</li><li><code>RelativePath</code> : Ha az &#233;rt&#233;ket sz&#246;vegk&#233;nt hat&#225;rozza meg, az alap URL-hez fűzi azt a k&#233;r&#233;s elv&#233;gz&#233;se előtt.</li><li><code>Content</code> : Az &#233;rt&#233;k megad&#225;sa a webes k&#233;r&#233;st GET k&#233;r&#233;sről POST k&#233;r&#233;sre m&#243;dos&#237;tja, a be&#225;ll&#237;t&#225;s &#233;rt&#233;k&#233;t haszn&#225;lva a POST tartalmak&#233;nt.</li></ul>    A HTTP-kérés GET (ha nincs megadva tartalom) vagy POST (tartalom esetén) típusú is lehet. A POST-kérések csak névtelenül hajthatóak végre.    <br />    A HTTP-válasz fejlécei a bináris eredmény metaadataiként érhetők el. Az egyéni adatösszekötő környezetén kívül csak a válaszfejlécek egy részhalmaza érhető el (biztonsági okokból).    


## Examples

### Example #1 
&lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; tartalmának lekérése a RelativePath és a lekérdezési beállítások használatával. Ezekkel a beállításokkal dinamikusan lekérdezheti a statikus alap URL-címet.
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
POST végrehajtása egy URL-címen, egy bináris JSON-adattartalom továbbításával és a válasz JSON-ként történő elemzésével.
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
Csatlakozhat egy olyan biztonságos URL-címhez, amely elfogad hitelesítési kulcsot a lekérdezési sztringjeként. A titkos kulcs M-ben történő (biztonsági kockázatot jelentő) szoftveres kódolása helyett,     a kulcs biztonságosan megadható a nevének (nem pedig az értékének) az M-ben történő megadásával, a webes API-alapú hitelesítést választva, majd a kulcs értékét a webes API hitelesítő adatainak a részeként megadva.    Ilyen használat esetén a következő példa egy kérést hoz létre a következő számára: &lt;code&gt;&#34;https://contoso.com/api/customers/get?api_key=\*\*\*\*\*\*&#34;&lt;/code&gt;.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
