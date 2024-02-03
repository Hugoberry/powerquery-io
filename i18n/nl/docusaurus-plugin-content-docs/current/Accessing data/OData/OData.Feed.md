---
title: OData.Feed
---

# OData.Feed


## Description

Retourneert een tabel met OData-feeds aangeboden door een OData-service.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Details

Hiermee wordt een tabel met OData-feeds geretourneerd die door een OData-service worden aangeboden via de URI <code>serviceUri</code>, headers <code>headers</code>. Er kan een booleaanse waarde worden opgegeven die aangeeft of gelijktijdige verbindingen of de optionele recordparameter <code>options</code> moeten worden gebruikt. Hiermee kunnen de volgende opties worden ingesteld:    <ul>    <li><code>Query</code>: via een programma queryparameters toevoegen aan de URL zonder het gebruik van escapetekens.  </li>    <li> <code>Headers</code>: als deze waarde als een record wordt opgegeven, worden extra headers toegevoegd aan een HTTP-aanvraag.</li>    <li> <code>ExcludedFromCacheKey</code>: als deze waarde wordt opgegeven als lijst, worden deze HTTP-headersleutels uitgesloten van de berekening voor het in de cache opslaan van gegevens.</li>    <li> <code>ApiKeyName</code> : Als de doelsite API-sleutels ondersteunt, kan deze parameter worden gebruikt om de naam (niet de waarde) van de sleutelparameter op te geven die in de URL moet worden gebruikt. De werkelijke sleutelwaarde wordt opgegeven in de referenties</li>    <li> <code>Timeout</code> : Als deze waarde wordt ingesteld als duur, wordt de time-out gewijzigd voor een HTTP-aanvraag. De standaardwaarde is 600 seconden.</li>    <li> <code>EnableBatch</code> : een logische waarde (true/false) waarmee wordt ingesteld of het maken van een OData $batch-aanvraag wordt toegestaan als de waarde voor MaxUriLength wordt overschreden (de standaardinstelling is false).</li>    <li> <code>MaxUriLength</code> : Een getal dat de maximumlengte bepaalt voor een geldige URI die naar een OData-service wordt verzonden. Als deze waarde wordt overschreden en EnableBatch is ingesteld op true, wordt de aanvraag uitgevoerd naar een OData $batch-eindpunt, anders mislukt de aanvraag (de standaardinstelling is 2048).</li>    <li> <code>Concurrent</code> :  een logische waarde (true/false). Als deze optie is ingesteld op true, worden aanvragen naar de service gelijktijdig uitgevoerd. Als deze optie is ingesteld op false, worden aanvragen na elkaar uitgevoerd. Als de waarde niet is opgegeven, wordt deze bepaald door de AsynchronousRequestsSupported-annotatie van de service. Als voor de service niet is opgegeven of AsynchronousRequestsSupported wordt ondersteund, worden aanvragen na elkaar uitgevoerd.</li>    <li> <code>ODataVersion</code> :  Een cijfer (3 of 4) dat bepaalt welke OData-protocolversie moet worden gebruikt voor deze OData-service. Als de waarde niet is opgegeven, worden alle ondersteunde versies aangevraagd. De serviceversie wordt bepaald door de header OData-Version die wordt geretourneerd door de service.</li>    <li> <code>FunctionOverloads</code> : een logische waarde (true/false). Als deze optie is ingesteld op true, worden overbelastingen bij functie-import in de navigator als afzonderlijke vermeldingen vermeld. Als deze optie is ingesteld op false, worden overbelastingen bij functie-import in de navigator als één Union-functie vermeld. De standaardwaarde voor V3 is false. De standaardwaarde voor V4 is true.</li>    <li> <code>MoreColumns</code> : een logische waarde (true/false). Als deze optie is ingesteld op true, wordt de kolom Meer kolommen toegevoegd aan elke entiteitsfeed die open of polymorfe typen bevat. De kolom bevat de velden die niet in het basistype zijn gedeclareerd. Als de optie is ingesteld op false, is dit veld niet aanwezig. De standaardinstelling is false.</li>    <li> <code>IncludeAnnotations</code> : een lijst met door komma's gescheiden waarden met termnamen of patronen met naamruimtekwalificatie die moeten worden opgenomen, met een sterretje (\*) als jokerteken. Als standaardinstelling is geen van de aantekeningen opgenomen.</li>    <li> <code>IncludeMetadataAnnotations</code> : Een lijst met door komma's gescheiden naamruimtegekwalificeerde termnamen of patronen die moeten worden opgenomen in aanvragen voor metagegevensdocumenten, met een sterretje (\*) als jokerteken. Standaard zijn dezelfde aantekeningen opgenomen als bij IncludeAnnotations.</li>      <li> <code>OmitValues</code> : stelt de OData-service in staat om te voorkomen dat bepaalde waarden worden weggeschreven in antwoorden. Indien erkend door de service, zullen wij die waarden afleiden uit de weggelaten velden. Opties omvatten:   <ul>      <li><code>ODataOmitValues.Nulls</code> : staat de OData-service toe om null waarden te negeren. </li>    </ul>     </li>        <li> <code>Implementation</code> : specificeert de implementatie van de OData-connector die moet worden gebruikt. Geldige waarden zijn 2.0 of null.</li>    </ul>


## Examples

### Example #1 
Maak verbinding met de TripPin OData-service.
```powerquery
OData.Feed("https://services.odata.org/V4/TripPinService")
```

Result: 
```powerquery
table
```




## Category
Accessing data
