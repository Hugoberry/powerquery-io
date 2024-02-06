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

Skapar en åtgärd som när den körs returnerar resultaten av att utföra en <code>method</code> -begäran mot <code>url</code> med HTTP som ett binärvärde.    En valfri postparameter, <code>options</code>, kan anges för att specificera ytterligare egenskaper. Posten kan innehålla följande fält:    <ul><li><code>Query</code> : L&#228;gg automatiskt till fr&#229;geparametrar i webbadressen utan att beh&#246;va t&#228;nka p&#229; undantagstecken.</li><li><code>ApiKeyName</code> : Om m&#229;lwebbplatsen inneh&#229;ller en notering om en API-nyckel, kan den h&#228;r parametern anv&#228;ndas f&#246;r att ange namnet (inte v&#228;rdet) f&#246;r den nyckelparameter som m&#229;ste anv&#228;ndas i webbadressen. Det faktiska nyckelv&#228;rdet anges i autentiseringsuppgiften.</li><li><code>Headers</code> : Om du anger v&#228;rdet som en post, l&#228;ggs ytterligare sidhuvuden till i en HTTP-f&#246;rfr&#229;gan.</li><li><code>Timeout</code> : Om du anger det h&#228;r v&#228;rdet som en varaktighet, &#228;ndras tidsgr&#228;nsen f&#246;r en HTTP-f&#246;rfr&#229;gan. Standardv&#228;rdet &#228;r 100 sekunder.</li><li><code>ExcludedFromCacheKey</code> : Om v&#228;rdet anges som en lista, undantas HTTP-sidhuvudnycklarna fr&#229;n att tas med i ber&#228;kningen f&#246;r cachelagring av data.</li><li><code>IsRetry</code> : Om det logiska v&#228;rdet anges till SANT ignoreras eventuella svar i cachen n&#228;r data h&#228;mtas.</li><li><code>ManualStatusHandling</code> : Om v&#228;rdet anges som en lista, f&#246;rhindras eventuell inbyggd hantering av HTTP-f&#246;rfr&#229;gningar vars svar inneh&#229;ller n&#229;gon av de h&#228;r statuskoderna.</li><li><code>RelativePath</code> : Om du anger v&#228;rdet som text, l&#228;ggs det till i slutet av den grundl&#228;ggande webbadressen innan f&#246;rfr&#229;gan st&#228;lls.</li><li><code>Content</code> : Om du &#228;ndrar v&#228;rdet blir inneh&#229;llet br&#246;dtexten i HTTP-f&#246;rfr&#229;gan.</li></ul>    <br />    Observera att denna funktion är inaktiverad i flesta sammanhang. Överväg att använda Web.Contents istället.    


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
