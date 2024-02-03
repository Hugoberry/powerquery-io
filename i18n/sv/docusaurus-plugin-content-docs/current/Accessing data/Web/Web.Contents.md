---
title: Web.Contents
---

# Web.Contents


## Description

Returnerar innehållet som laddats ned från URL:en som binär.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Details

Returnerar innehållet som hämtats från <code>url</code> som binärt. En valfri postparameter, <code>options</code>, kan tillhandahållas för att ange ytterligare egenskaper. Posten kan innehålla följande fält:    <ul><li><code>Query</code> : L&#228;gg automatiskt till fr&#229;geparametrar i webbadressen utan att beh&#246;va t&#228;nka p&#229; undantagstecken.</li><li><code>ApiKeyName</code> : Om m&#229;lwebbplatsen inneh&#229;ller en notering om en API-nyckel, kan den h&#228;r parametern anv&#228;ndas f&#246;r att ange namnet (inte v&#228;rdet) f&#246;r den nyckelparameter som m&#229;ste anv&#228;ndas i webbadressen. Det faktiska nyckelv&#228;rdet anges i autentiseringsuppgiften.</li><li><code>Headers</code> : Om du anger v&#228;rdet som en post, l&#228;ggs ytterligare sidhuvuden till i en HTTP-f&#246;rfr&#229;gan.</li><li><code>Timeout</code> : Om du anger det h&#228;r v&#228;rdet som en varaktighet, &#228;ndras tidsgr&#228;nsen f&#246;r en HTTP-f&#246;rfr&#229;gan. Standardv&#228;rdet &#228;r 100 sekunder.</li><li><code>ExcludedFromCacheKey</code> : Om v&#228;rdet anges som en lista, undantas HTTP-sidhuvudnycklarna fr&#229;n att tas med i ber&#228;kningen f&#246;r cachelagring av data.</li><li><code>IsRetry</code> : Om det logiska v&#228;rdet anges till SANT ignoreras eventuella svar i cachen n&#228;r data h&#228;mtas.</li><li><code>ManualStatusHandling</code> : Om v&#228;rdet anges som en lista, f&#246;rhindras eventuell inbyggd hantering av HTTP-f&#246;rfr&#229;gningar vars svar inneh&#229;ller n&#229;gon av de h&#228;r statuskoderna.</li><li><code>RelativePath</code> : Om du anger v&#228;rdet som text, l&#228;ggs det till i slutet av den grundl&#228;ggande webbadressen innan f&#246;rfr&#229;gan st&#228;lls.</li><li><code>Content</code> : Om du anger v&#228;rdet &#228;ndras webbf&#246;rfr&#229;gan fr&#229;n GET-f&#246;rfr&#229;gan till POST-f&#246;rfr&#229;gan med alternativets v&#228;rde som inneh&#229;ll i POST-f&#246;rfr&#229;gan.</li></ul>    HTTP-begäran görs antingen som GET (när inget innehåll har angetts) eller POST (när det finns innehåll). POST-begäranden kan endast göras anonymt.    <br />    Huvudena i HTTP-svaret är tillgängliga som metadata i binärresultatet. Utanför en anpassad dataanslutningskontext är endast en delmängd av svarshuvuden tillgängliga (av säkerhetsskäl).    


## Examples

### Example #1 
Hämta innehållet i &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; med hjälp av alternative RelativePath och Query. Alternativen kan användas för att dynamiskt fråga en statisk baswebbadress.
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
Utför en POST-åtgärd mot en webbadress och skicka en binär JSON-nyttolast och parsa svaret som JSON.
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
Anslut till en säker URL som accepterar en autentiseringsnyckel som en del av frågesträngen. I stället för att hårdkoda den hemliga nyckeln i M (vilket skulle utgöra en säkerhetsrisk),     nyckeln kan tillhandahållas på ett säkert sätt genom att ange dess namn (inte dess värde) i M, välja webb-API-autentisering och ange nyckelvärdet som en del av webb-API-autentiseringsuppgifterna.    När det används på det här sättet genererar följande exempel en begäran till &lt;code&gt;&#34;https://contoso.com/api/customers/get?api_key=\*\*\*\*\*\*&#34;&lt;/code&gt;.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
