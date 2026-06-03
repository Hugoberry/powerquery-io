---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


Importer data fra HDInsight Interactive Query


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Returnerer en liste over tabeller fra HDInsight Interactive Query angivet af `databasen` på HDInsight Interactive Query-`serveren`. Du kan vælge at angive et valgfrit portnummer med serveren adskilt af et kolon. Du kan angive et valgfrit parameter for `indstillinger` for at styre følgende egenskaber:

-   `ConnectionTimeout`: En varighed, som kontrollerer ventetiden, før et forsøg på at oprette forbindelse til serveren afbrydes. Standardværdien afhænger af driveren.
-   `CommandTimeout`: En varighed, som kontrollerer, hvor længe forespørgslen kan køre på serveren, før den annulleres. Standardværdien afhænger af driveren.

Et valgfrit parameter for `indstillinger` angives som \[option1 = value1, option2 = value2...\].


