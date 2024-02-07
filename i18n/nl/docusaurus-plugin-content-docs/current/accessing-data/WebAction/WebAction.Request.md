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

Hiermee maakt u een actie die, wanneer deze wordt uitgevoerd, de resultaten retourneert van het uitvoeren van een <code>method</code>-aanvraag voor <code>url</code> met behulp van HTTP als binaire waarde.    Er kan een optionele recordparameter, <code>options</code>, worden opgegeven om aanvullende eigenschappen op te geven. De record kan de volgende velden bevatten:    <ul><li><code>Query</code> : Via een programma queryparameters aan de URL toevoegen zonder gebruik van escapetekens.</li><li><code>ApiKeyName</code> : Als de doelsite een notatie van een API-sleutel bevat, kan deze parameter worden gebruikt om de naam (niet de waarde) op te geven van de sleutelparameter die moet worden gebruikt in de URL. De daadwerkelijke sleutelwaarde wordt in de referentie gegeven.</li><li><code>Headers</code> : Als deze waarde wordt opgegeven als een record, worden extra headers toegevoegd aan een HTTP-aanvraag.</li><li><code>Timeout</code> : Als deze waarde wordt opgegeven als tijdsduur, wordt de time-out voor een HTTP-aanvraag gewijzigd. De standaardwaarde is 100 seconden.</li><li><code>ExcludedFromCacheKey</code> : Als u deze waarde opgeeft als een lijst, worden deze HTTP-headersleutels uitgesloten van de berekening voor het opslaan van gegevens in het cachegeheugen.</li><li><code>IsRetry</code> : Als deze logische waarde wordt opgegeven als true, worden bestaande antwoorden in de cache genegeerd bij het ophalen van gegevens.</li><li><code>ManualStatusHandling</code> : Als deze waarde wordt opgegeven als een lijst, wordt voorkomen dat de ingebouwde verwerking wordt uitgevoerd voor HTTP-aanvragen waarvoor het antwoord een van deze statuscodes bevat.</li><li><code>RelativePath</code> : Als deze waarde wordt opgegeven als tekst, wordt de waarde toegevoegd aan de basis-URL voordat de aanvraag wordt uitgevoerd.</li><li><code>Content</code> : Als deze waarde wordt opgegeven, wordt de inhoud ervan de hoofdtekst van de HTTP-aanvraag.</li></ul>    <br />    Deze functie is in de meeste contexten uitgeschakeld. Overweeg in plaats daarvan Web.Contents of Web.Headers te gebruiken.    


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
