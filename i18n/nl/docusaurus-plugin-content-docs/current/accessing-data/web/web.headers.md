---
title: Web.Headers
---

# Web.Headers


Retourneert de HTTP-headers die van de URL zijn gedownload als recordwaarde.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Remarks

Retourneert de headers die zijn gedownload van `url` als record. Er kan een optionele recordparameter, `options`, worden opgegeven om aanvullende eigenschappen op te geven. De record kan de volgende velden bevatten:

-   `Query` : Via een programma queryparameters aan de URL toevoegen zonder gebruik van escapetekens.
-   `ApiKeyName` : Als de doelsite een notatie van een API-sleutel bevat, kan deze parameter worden gebruikt om de naam (niet de waarde) op te geven van de sleutelparameter die moet worden gebruikt in de URL. De daadwerkelijke sleutelwaarde wordt in de referentie gegeven.
-   `Headers` : Als deze waarde wordt opgegeven als een record, worden extra headers toegevoegd aan een HTTP-aanvraag.
-   `Timeout` : Als deze waarde wordt opgegeven als tijdsduur, wordt de time-out voor een HTTP-aanvraag gewijzigd. De standaardwaarde is 100 seconden.
-   `ExcludedFromCacheKey` : Als u deze waarde opgeeft als een lijst, worden deze HTTP-headersleutels uitgesloten van de berekening voor het opslaan van gegevens in het cachegeheugen.
-   `IsRetry` : Als deze logische waarde wordt opgegeven als true, worden bestaande antwoorden in de cache genegeerd bij het ophalen van gegevens.
-   `ManualStatusHandling` : Als deze waarde wordt opgegeven als een lijst, wordt voorkomen dat de ingebouwde verwerking wordt uitgevoerd voor HTTP-aanvragen waarvoor het antwoord een van deze statuscodes bevat.
-   `RelativePath` : Als deze waarde wordt opgegeven als tekst, wordt de waarde toegevoegd aan de basis-URL voordat de aanvraag wordt uitgevoerd.

De HTTP-aanvraag wordt gedaan met de HEAD-methode. Buiten een aangepaste gegevensconnectorcontext is alleen een subset antwoordheaders beschikbaar (uit veiligheidsoverwegingen).


## Examples

### Example #1
Haal de HTTP-headers voor `"https://bing.com/search?q=Power+Query"` op met behulp van de opties RelativePath en Query.
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
