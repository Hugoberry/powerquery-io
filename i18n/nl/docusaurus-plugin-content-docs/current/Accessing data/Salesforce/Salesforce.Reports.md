---
title: Salesforce.Reports
---

# Salesforce.Reports


Retourneert de rapporten uit het Salesforce-account.


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Remarks

Hiermee worden de rapporten in het Salesforce-account dat is opgegeven in de referenties, geretourneerd. De verbinding voor het account wordt gemaakt via de opgegeven omgeving <code>loginUrl</code>. Als er geen omgeving is opgegeven, wordt de verbinding voor het account gemaakt via productie (https://login.salesforce.com). U kunt een optionele recordparameter <code>options</code> gebruiken om aanvullende eigenschappen op te geven. De record kan de volgende velden bevatten:    <ul><li><code>ApiVersion</code> : De API-versie van Salesforce die wordt gebruikt voor deze query. API-versie 29.0 wordt gebruikt wanneer niets wordt opgegeven.</li><li><code>Timeout</code> : Een waarde voor de duur waarmee wordt bepaald hoelang wordt gewacht voordat een aanvraag voor de server wordt afgebroken. De standaardwaarde is afhankelijk van de bron.</li></ul>    



## Category
Accessing data
