---
title: Web.Headers
---

# Web.Headers


## Description

Returnerar HTTP-huvuden som hämtats från URL:en som ett postvärde.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Details

Returnerar rubrikerna som laddats ned från <code>url</code> som en post. En valfri postparameter, <code>options</code>, kan tillhandahållas för att ange ytterligare egenskaper. Posten kan innehålla följande fält:    <ul><li><code>Query</code> : L&#228;gg automatiskt till fr&#229;geparametrar i webbadressen utan att beh&#246;va t&#228;nka p&#229; undantagstecken.</li><li><code>ApiKeyName</code> : Om m&#229;lwebbplatsen inneh&#229;ller en notering om en API-nyckel, kan den h&#228;r parametern anv&#228;ndas f&#246;r att ange namnet (inte v&#228;rdet) f&#246;r den nyckelparameter som m&#229;ste anv&#228;ndas i webbadressen. Det faktiska nyckelv&#228;rdet anges i autentiseringsuppgiften.</li><li><code>Headers</code> : Om du anger v&#228;rdet som en post, l&#228;ggs ytterligare sidhuvuden till i en HTTP-f&#246;rfr&#229;gan.</li><li><code>Timeout</code> : Om du anger det h&#228;r v&#228;rdet som en varaktighet, &#228;ndras tidsgr&#228;nsen f&#246;r en HTTP-f&#246;rfr&#229;gan. Standardv&#228;rdet &#228;r 100 sekunder.</li><li><code>ExcludedFromCacheKey</code> : Om v&#228;rdet anges som en lista, undantas HTTP-sidhuvudnycklarna fr&#229;n att tas med i ber&#228;kningen f&#246;r cachelagring av data.</li><li><code>IsRetry</code> : Om det logiska v&#228;rdet anges till SANT ignoreras eventuella svar i cachen n&#228;r data h&#228;mtas.</li><li><code>ManualStatusHandling</code> : Om v&#228;rdet anges som en lista, f&#246;rhindras eventuell inbyggd hantering av HTTP-f&#246;rfr&#229;gningar vars svar inneh&#229;ller n&#229;gon av de h&#228;r statuskoderna.</li><li><code>RelativePath</code> : Om du anger v&#228;rdet som text, l&#228;ggs det till i slutet av den grundl&#228;ggande webbadressen innan f&#246;rfr&#229;gan st&#228;lls.</li></ul>    HTTP-begäran görs med HEAD-metoden. Utanför en anpassad dataanslutningskontext är endast en delmängd av svarshuvuden tillgängliga (av säkerhetsskäl).    


## Examples

### Example #1 
Hämta HTTP-huvudena för &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; med alternativen RelativePath och Query.
```powerquery
let
    searchText = "Power Query"
in
    Web.Headers(
        "https://www.bing.com",
        [
            RelativePath = "search",
            Query = [q = searchText]
        ]
    )
```

Result: 
```powerquery
([
    #"Cache-Control" = "private, max-age=0",
    #"Content-Encoding" = "gzip",
    #"Content-Length" = "0",
    #"Content-Type" = "text/html; charset=utf-8",
    Date = "Tue, 14 Dec 2021 16:57:25 GMT",
    Expires = "Tue, 14 Dec 2021 16:56:25 GMT",
    Vary = "Accept-Encoding"
]
meta [
    Response.Status = 200
])
```




## Category
Accessing data
