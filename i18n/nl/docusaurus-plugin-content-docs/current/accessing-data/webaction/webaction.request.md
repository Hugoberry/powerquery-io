---
title: WebAction.Request
---

# WebAction.Request


Hiermee wordt een actie gemaakt. Wanneer de actie wordt uitgevoerd, worden de resultaten van het uitvoeren van een HTTP-aanvraag geretourneerd als een binaire waarde.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Remarks

Hiermee wordt een actie gemaakt die, wanneer uitgevoerd, de resultaten retourneert van het uitvoeren van een `method` aanvraag op basis van `url` waarbij HTTP wordt gebruikt als een binaire waarde. Er kan een optionele recordparameter, `options`, worden opgegeven om aanvullende eigenschappen op te geven. De record kan de volgende velden bevatten:

-   `Query` : Via een programma queryparameters aan de URL toevoegen zonder gebruik van escapetekens.
-   `ApiKeyName` : Als de doelsite een notatie van een API-sleutel bevat, kan deze parameter worden gebruikt om de naam (niet de waarde) op te geven van de sleutelparameter die moet worden gebruikt in de URL. De daadwerkelijke sleutelwaarde wordt in de referentie gegeven.
-   `Headers` : Als deze waarde wordt opgegeven als een record, worden extra headers toegevoegd aan een HTTP-aanvraag.
-   `Timeout` : Als deze waarde wordt opgegeven als tijdsduur, wordt de time-out voor een HTTP-aanvraag gewijzigd. De standaardwaarde is 100 seconden.
-   `ExcludedFromCacheKey` : Als u deze waarde opgeeft als een lijst, worden deze HTTP-headersleutels uitgesloten van de berekening voor het opslaan van gegevens in het cachegeheugen.
-   `IsRetry` : Als deze logische waarde wordt opgegeven als true, worden bestaande antwoorden in de cache genegeerd bij het ophalen van gegevens.
-   `ManualStatusHandling` : Als deze waarde wordt opgegeven als een lijst, wordt voorkomen dat de ingebouwde verwerking wordt uitgevoerd voor HTTP-aanvragen waarvoor het antwoord een van deze statuscodes bevat.
-   `RelativePath` : Als deze waarde wordt opgegeven als tekst, wordt de waarde toegevoegd aan de basis-URL voordat de aanvraag wordt uitgevoerd.
-   `Content` : Als deze waarde wordt opgegeven, wordt de inhoud ervan de hoofdtekst van de HTTP-aanvraag.

Deze functie is in de meeste contexten uitgeschakeld. Overweeg in plaats daarvan Web.Contents of Web.Headers te gebruiken.


## Examples

### Example #1
Een GET-aanvraag uitvoeren op Bing.
```powerquery
WebAction.Request(WebMethod.Get, "https://bing.com")
```

Result: 
```powerquery
Action
```




## Category
Action
