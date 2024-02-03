---
title: OData.Feed
---

# OData.Feed


## Description

Returnerar en tabell med OData-feeds från en OData-tjänst.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Details

Returnerar en tabell med OData-flöden som erbjuds av en OData-tjänst från en URI <code>serviceUri</code>, rubriker <code>headers</code>. Ett booleskt värde som anger om samtidiga anslutningar eller en valfri postparameter, <code>options</code>, kan specificeras för att styra följande alternativ:    <ul>    <li><code>Query</code>: Lägg programmässigt till frågeparametrar till URL:en utan att behöva oroa dig om undantagstecken. </li>    <li> <code>Headers</code>: Om du anger det här värdet som en post förses en HTTP-begäran med ytterligare rubriker.</li>    <li> <code>ExcludedFromCacheKey</code>: Om du anger det här värdet som en lista utesluts dessa HTTP-rubriknycklar från att ingå i beräkningen av cachedata.</li>    <li> <code>ApiKeyName</code>: Om målwebbplatsen har en uppgift om en API-nyckel kan den här parametern användas för att specificera namnet (inte värdet) för den nyckelparameter som måste användas i URL:en. Det faktiska nyckelvärdet tillhandahålls i autentiseringsuppgifterna.</li>    <li> <code>Timeout</code>: Om du anger det här värdet som en varaktighet, ändras tidsgränsen för en HTTP-begäran. Standardvärdet är 600 sekunder.</li>    <li> <code>EnableBatch</code>: Ett logiskt alternativ (true/false) som anger om generering av en OData $batch-begäran ska tillåtas om MaxUriLength överskrids (standardvärdet är false).</li>    <li> <code>MaxUriLength</code>: Ett tal som indikerar maxlängden för en tillåten URI som skickas till en OData-tjänst. Om den överskrids och EnableBatch är true, görs begäran till en OData $batch-slutpunkt. I annat fall misslyckas den (standardvärdet är 2048).</li>    <li> <code>Concurrent</code>: Ett logiskt alternativ (true/false). När det är satt till true, görs förfrågningar till tjänsten samtidigt. När det är satt till false görs förfrågningarna sekventiellt. Om alternativet inte specificeras bestäms värdet av tjänstens AsynchronousRequestsSupported-kommentar. Om tjänsten inte anger om AsynchronousRequestsSupported stöds eller inte görs förfrågningarna sekventiellt.</li>    <li> <code>ODataVersion</code>: Ett tal (3 eller 4) som anger vilken version av OData-protokollet som ska användas för den här OData-tjänsten. Om det inte anges begärs alla versioner som stöds. Tjänstversionen fastställs av det OData-versionshuvud som returneras av tjänsten.</li>    <li> <code>FunctionOverloads</code> : Ett logiskt alternativ (true/false). När det ges värdet true listas överbelastade funktionsimporter i navigatorn som separata poster. När det ges värdet false listas överbelastade funktionsimporter som en unionsfunktion i navigatorn. Standardvärde för V3: false. Standardvärde för V4: true.</li>    <li> <code>MoreColumns</code> : Ett logiskt alternativ (true/false). När det ges värdet true läggs en "More Columns"-kolumn till i varje entitetsflöde som innehåller öppna typer och polymorfiska typer. Den innehåller de fält som inte deklareras i bastypen. När det ges värdet false syns inte det här fältet. Standard är false. </li>    <li> <code>IncludeAnnotations</code>: En kommateckenavgränsad lista över namnrymdskvalificerade termnamn eller mönster som inkluderar med "\*" som ett jokertecken. Ingen av anteckningarna inkluderas som standard.</li>    <li> <code>IncludeMetadataAnnotations</code>: En kommateckenavgränsad lista över namnrymdskvalificerade termnamn eller mönster att inkludera i metadatadokumentsförfrågningar med "\*" som ett jokertecken. Inkluderar som standard samma anteckningar som IncludeAnnotations.</li>    <li> <code>OmitValues</code> : Låter OData-tjänsten undvika att skriva ut vissa värden i svar. Om bekräftat så härleder vi de värdena från de utelämnade fälten. Alternativ inkluderar:      <ul>        <li><code>ODataOmitValues.Nulls</code> : Låter OData-tjänsten utelämna nullvärden.</li>      </ul>    </li>    <li> <code>Implementation</code>: Specificerar implementeringen av den OData-anslutare som ska användas. Giltiga värden är 2.0 eller null.</li>    </ul>


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
