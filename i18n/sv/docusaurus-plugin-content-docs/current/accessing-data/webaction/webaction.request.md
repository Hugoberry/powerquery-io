---
title: WebAction.Request
---

# WebAction.Request


Skapar en åtgärd som, när den körs, returnerar resultatet av en HTTP-förfrågan som ett binärvärde.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Remarks

Skapar en åtgärd som när den körs returnerar resultaten av att utföra en `method`\-begäran mot `url` med HTTP som ett binärvärde. En valfri postparameter, `options`, kan tillhandahållas för att ange ytterligare egenskaper. Posten kan innehålla följande fält:

-   `Query` : Lägg automatiskt till frågeparametrar i webbadressen utan att behöva tänka på undantagstecken.
-   `ApiKeyName` : Om målwebbplatsen innehåller en notering om en API-nyckel, kan den här parametern användas för att ange namnet (inte värdet) för den nyckelparameter som måste användas i webbadressen. Det faktiska nyckelvärdet anges i autentiseringsuppgiften.
-   `Headers` : Om du anger värdet som en post, läggs ytterligare sidhuvuden till i en HTTP-förfrågan.
-   `Timeout` : Om du anger det här värdet som en varaktighet, ändras tidsgränsen för en HTTP-förfrågan. Standardvärdet är 100 sekunder.
-   `ExcludedFromCacheKey` : Om värdet anges som en lista, undantas HTTP-sidhuvudnycklarna från att tas med i beräkningen för cachelagring av data.
-   `IsRetry` : Om det logiska värdet anges till SANT ignoreras eventuella svar i cachen när data hämtas.
-   `ManualStatusHandling` : Om värdet anges som en lista, förhindras eventuell inbyggd hantering av HTTP-förfrågningar vars svar innehåller någon av de här statuskoderna.
-   `RelativePath` : Om du anger värdet som text, läggs det till i slutet av den grundläggande webbadressen innan förfrågan ställs.
-   `Content` : Om du ändrar värdet blir innehållet brödtexten i HTTP-förfrågan.

Observera att denna funktion är inaktiverad i flesta sammanhang. Överväg att använda Web.Contents eller Web.Headers i stället.


## Examples

### Example #1
Utför en GET-begäran mot Bing.
```powerquery
WebAction.Request(WebMethod.Get, "https://bing.com")
```

Result: 
```powerquery
Action
```




## Category
Action
