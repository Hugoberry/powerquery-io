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

Returnerer en liste over tabeller fra HDInsight Interactive Query angivet af <code>databasen</code> på HDInsight Interactive Query-<code>serveren</code>. Du kan vælge at angive et valgfrit portnummer med serveren adskilt af et kolon. Du kan angive et valgfrit parameter for <code>indstillinger</code> for at styre følgende egenskaber:<ul>        <li><code>ConnectionTimeout</code>: En varighed, som kontrollerer ventetiden, før et forsøg på at oprette forbindelse til serveren afbrydes. Standardværdien afhænger af driveren.</li>        <li><code>CommandTimeout</code>: En varighed, som kontrollerer, hvor længe forespørgslen kan køre på serveren, før den annulleres. Standardværdien afhænger af driveren.</li></ul>Et valgfrit parameter for <code>indstillinger</code> angives som [option1 = value1, option2 = value2...].


