---
title: Web.Contents
---

# Web.Contents


Returnerar innehållet som laddats ned från URL:en som binär.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Returnerar innehållet som hämtats från `url` som binärt. Parameter för valfri post, `options`, kan tillhandahållas för ytterligare egenskaper. Posten kan innehålla följande fält:

-   `Query` : Lägg automatiskt till frågeparametrar i webbadressen utan att behöva tänka på undantagstecken.
-   `ApiKeyName` : Om målwebbplatsen innehåller en notering om en API-nyckel, kan den här parametern användas för att ange namnet (inte värdet) för den nyckelparameter som måste användas i webbadressen. Det faktiska nyckelvärdet anges i autentiseringsuppgiften.
-   `Headers` : Om du anger värdet som en post, läggs ytterligare sidhuvuden till i en HTTP-förfrågan.
-   `Timeout` : Om du anger det här värdet som en varaktighet, ändras tidsgränsen för en HTTP-förfrågan. Standardvärdet är 100 sekunder.
-   `ExcludedFromCacheKey` : Om värdet anges som en lista, undantas HTTP-sidhuvudnycklarna från att tas med i beräkningen för cachelagring av data.
-   `IsRetry` : Om det logiska värdet anges till SANT ignoreras eventuella svar i cachen när data hämtas.
-   `ManualStatusHandling` : Om värdet anges som en lista, förhindras eventuell inbyggd hantering av HTTP-förfrågningar vars svar innehåller någon av de här statuskoderna.
-   `RelativePath` : Om du anger värdet som text, läggs det till i slutet av den grundläggande webbadressen innan förfrågan ställs.
-   `Content` : Om du anger värdet ändras webbförfrågan från GET-förfrågan till POST-förfrågan med alternativets värde som innehåll i POST-förfrågan.

HTTP-begäran görs antingen som GET (när inget innehåll har angetts) eller POST (när det finns innehåll). POST-begäranden kan endast göras anonymt.  
  
Huvudena i HTTP-svaret är tillgängliga som metadata i binärresultatet. Utanför en anpassad dataanslutningskontext är endast en delmängd av svarshuvuden tillgängliga (av säkerhetsskäl).


## Examples

### Example #1
Hämta innehållet i `"https://bing.com/search?q=Power+Query"` med hjälp av alternative RelativePath och Query. Alternativen kan användas för att dynamiskt fråga en statisk baswebbadress.
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
Anslut till en säker URL som accepterar en autentiseringsnyckel som en del av frågesträngen. I stället för att hårdkoda den hemliga nyckeln i M (vilket skulle utgöra en säkerhetsrisk), nyckeln kan tillhandahållas på ett säkert sätt genom att ange dess namn (inte dess värde) i M, välja webb-API-autentisering och ange nyckelvärdet som en del av webb-API-autentiseringsuppgifterna. När det används på det här sättet genererar följande exempel en begäran till `"https://contoso.com/api/customers/get?api_key=******"`.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
