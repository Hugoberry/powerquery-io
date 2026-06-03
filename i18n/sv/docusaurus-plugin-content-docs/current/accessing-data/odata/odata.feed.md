---
title: OData.Feed
---

# OData.Feed


Returnerar en tabell med OData-feeds från en OData-tjänst.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Remarks

Returnerar en tabell med OData-flöden som erbjuds av en OData-tjänst från en URI `serviceUri`, rubriker `headers`. Ett booleskt värde som anger om samtidiga anslutningar eller en valfri postparameter, `options`, kan specificeras för att styra följande alternativ:

-   `Query`: Lägg programmässigt till frågeparametrar till URL:en utan att behöva oroa dig om undantagstecken.
-   `Headers`: Om du anger det här värdet som en post förses en HTTP-begäran med ytterligare rubriker.
-   `ExcludedFromCacheKey`: Om du anger det här värdet som en lista utesluts dessa HTTP-rubriknycklar från att ingå i beräkningen av cachedata.
-   `ApiKeyName`:Om målwebbplatsen innehåller en notering om en API-nyckel, kan den här parametern användas för att ange namnet (inte värdet) för den nyckelparameter som måste användas i webbadressen. Det faktiska nyckelvärdet tillhandahålls i autentiseringsuppgifterna.
-   `Timeout`: Om du anger det här värdet som en varaktighet, ändras tidsgränsen för en HTTP-begäran. Standardvärdet är 600 sekunder.
-   `EnableBatch`: Ett logiskt alternativ (true/false) som anger om generering av en OData $batch-begäran ska tillåtas om MaxUriLength överskrids (standardvärdet är false).
-   `MaxUriLength`: Ett tal som indikerar maxlängden för en tillåten URI som skickas till en OData-tjänst. Om den överskrids och EnableBatch är true, görs begäran till en OData $batch-slutpunkt. I annat fall misslyckas den (standardvärdet är 2048).
-   `Concurrent`: Ett logiskt alternativ (true/false). När det är satt till true, görs förfrågningar till tjänsten samtidigt. När det är satt till false görs förfrågningarna sekventiellt. Om alternativet inte specificeras bestäms värdet av tjänstens AsynchronousRequestsSupported-kommentar. Om tjänsten inte anger om AsynchronousRequestsSupported stöds eller inte görs förfrågningarna sekventiellt.
-   `ODataVersion`: Ett tal (3 eller 4) som anger vilken version av OData-protokollet som ska användas för den här OData-tjänsten. Om det inte anges begärs alla versioner som stöds. Tjänstversionen fastställs av det OData-versionshuvud som returneras av tjänsten.
-   `FunctionOverloads` : Ett logiskt alternativ (true/false). När det ges värdet true listas överbelastade funktionsimporter i navigatorn som separata poster. När det ges värdet false listas överbelastade funktionsimporter som en unionsfunktion i navigatorn. Standardvärde för V3: false. Standardvärde för V4: true.
-   `MoreColumns` : Ett logiskt alternativ (true/false). När det ges värdet true läggs en "More Columns"-kolumn till i varje entitetsflöde som innehåller öppna typer och polymorfiska typer. Den innehåller de fält som inte deklareras i bastypen. När det ges värdet false syns inte det här fältet. Standard är false.
-   `IncludeAnnotations`: En kommateckenavgränsad lista över namnrymdskvalificerade termnamn eller mönster som inkluderar med "\*" som ett jokertecken. Ingen av anteckningarna inkluderas som standard.
-   `IncludeMetadataAnnotations`: En kommateckenavgränsad lista över namnrymdskvalificerade termnamn eller mönster att inkludera i metadatadokumentsförfrågningar med "\*" som ett jokertecken. Inkluderar som standard samma anteckningar som IncludeAnnotations.
-   `OmitValues` : Låter OData-tjänsten undvika att skriva ut vissa värden i svar. Om bekräftat så härleder vi de värdena från de utelämnade fälten. Alternativ inkluderar:
    -   `ODataOmitValues.Nulls` : Låter OData-tjänsten utelämna nullvärden.
-   `Implementation`: Specificerar implementeringen av den OData-anslutare som ska användas. Giltiga värden är 2.0 eller null.


## Examples

### Example #1
Anslut till TripPin OData-tjänsten.
```powerquery
OData.Feed("https://services.odata.org/V4/TripPinService")
```

Result: 
```powerquery
table
```




## Category
Accessing data
