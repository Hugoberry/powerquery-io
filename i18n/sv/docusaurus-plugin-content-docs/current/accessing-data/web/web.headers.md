---
title: Web.Headers
---

# Web.Headers


Returnerar HTTP-huvuden som hämtats från URL:en som ett postvärde.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Remarks

Returnerar rubrikerna som laddats ned från `url` som en post. En valfri postparameter, `options`, kan tillhandahållas för att ange ytterligare egenskaper. Posten kan innehålla följande fält:

-   `Query` : Lägg automatiskt till frågeparametrar i webbadressen utan att behöva tänka på undantagstecken.
-   `ApiKeyName` : Om målwebbplatsen innehåller en notering om en API-nyckel, kan den här parametern användas för att ange namnet (inte värdet) för den nyckelparameter som måste användas i webbadressen. Det faktiska nyckelvärdet anges i autentiseringsuppgiften.
-   `Headers` : Om du anger värdet som en post, läggs ytterligare sidhuvuden till i en HTTP-förfrågan.
-   `Timeout` : Om du anger det här värdet som en varaktighet, ändras tidsgränsen för en HTTP-förfrågan. Standardvärdet är 100 sekunder.
-   `ExcludedFromCacheKey` : Om värdet anges som en lista, undantas HTTP-sidhuvudnycklarna från att tas med i beräkningen för cachelagring av data.
-   `IsRetry` : Om det logiska värdet anges till SANT ignoreras eventuella svar i cachen när data hämtas.
-   `ManualStatusHandling` : Om värdet anges som en lista, förhindras eventuell inbyggd hantering av HTTP-förfrågningar vars svar innehåller någon av de här statuskoderna.
-   `RelativePath` : Om du anger värdet som text, läggs det till i slutet av den grundläggande webbadressen innan förfrågan ställs.

HTTP-begäran görs med HEAD-metoden. Utanför en anpassad dataanslutningskontext är endast en delmängd av svarshuvuden tillgängliga (av säkerhetsskäl).


## Examples

### Example #1
Hämta HTTP-huvudena för `"https://bing.com/search?q=Power+Query"` med alternativen RelativePath och Query.
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
