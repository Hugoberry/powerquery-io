---
title: Web.Contents
---

# Web.Contents


Retourneert de inhoud die via de URL in een binaire indeling is gedownload.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Retourneert de inhoud die is gedownload van `url` als binair bestand. Er kan een optionele recordparameter, `options`, worden opgegeven om aanvullende eigenschappen op te geven. De record kan de volgende velden bevatten:

-   `Query` : Via een programma queryparameters aan de URL toevoegen zonder gebruik van escapetekens.
-   `ApiKeyName` : Als de doelsite een notatie van een API-sleutel bevat, kan deze parameter worden gebruikt om de naam (niet de waarde) op te geven van de sleutelparameter die moet worden gebruikt in de URL. De daadwerkelijke sleutelwaarde wordt in de referentie gegeven.
-   `Headers` : Als deze waarde wordt opgegeven als een record, worden extra headers toegevoegd aan een HTTP-aanvraag.
-   `Timeout` : Als deze waarde wordt opgegeven als tijdsduur, wordt de time-out voor een HTTP-aanvraag gewijzigd. De standaardwaarde is 100 seconden.
-   `ExcludedFromCacheKey` : Als u deze waarde opgeeft als een lijst, worden deze HTTP-headersleutels uitgesloten van de berekening voor het opslaan van gegevens in het cachegeheugen.
-   `IsRetry` : Als deze logische waarde wordt opgegeven als true, worden bestaande antwoorden in de cache genegeerd bij het ophalen van gegevens.
-   `ManualStatusHandling` : Als deze waarde wordt opgegeven als een lijst, wordt voorkomen dat de ingebouwde verwerking wordt uitgevoerd voor HTTP-aanvragen waarvoor het antwoord een van deze statuscodes bevat.
-   `RelativePath` : Als deze waarde wordt opgegeven als tekst, wordt de waarde toegevoegd aan de basis-URL voordat de aanvraag wordt uitgevoerd.
-   `Content` : Als u deze waarde opgeeft, wordt de webaanvraag van een GET naar een POST gewijzigd met de waarde van de optie als de inhoud van POST.

De HTTP-aanvraag wordt gedaan als GET (wanneer er geen inhoud is opgegeven) of een POST (wanneer er inhoud is). POST-aanvragen kunnen alleen anoniem worden gedaan.  
  
De headers van het HTTP-antwoord zijn beschikbaar als metagegevens voor het binaire resultaat. Buiten een aangepaste gegevensconnectorcontext is alleen een subset antwoordheaders beschikbaar (uit veiligheidsoverwegingen).


## Examples

### Example #1
Haal de inhoud van `"https://bing.com/search?q=Power+Query"` op met behulp van de opties RelativePath en Query. Deze opties kunnen worden gebruikt om dynamisch een query voor een statische basis-URL uit te voeren.
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
Voer een POST uit op een URL, waarbij een binaire JSON-nettolading wordt doorgegeven en het antwoord wordt geparseerd als JSON.
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
Maak verbinding met een beveiligde URL die een verificatiesleutel accepteert als onderdeel van de queryreeks. In plaats van de geheime sleutel in M vast te coderen (wat een beveiligingsrisico zou vormen), kan de sleutel veilig worden geleverd door de naam (niet de waarde) in M op te geven, web-API-verificatie te kiezen en de sleutelwaarde in te voeren als onderdeel van de web-API-referentie. Bij gebruik op deze manier wordt in het volgende voorbeeld een aanvraag voor `"https://contoso.com/api/customers/get?api_key=******"` gegenereerd.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
