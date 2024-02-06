---
title: Netezza.Database
---

# Netezza.Database


Importér data fra en IBM Netezza-database.


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Returnerer en tabel over Netezza-tabeller, -visninger og -lagrede funktioner fra Netezza Server-databasen <code>database</code> på serveren <code>server</code>. Porten kan eventuelt være angivet med serveren, adskilt af et kolon. En valgfri postparameter, <code>options</code>, kan angives for at styre følgende egenskaber:<ul>        <li><code>CreateNavigationProperties</code>: En logisk værdi (true/false), der angiver, om der skal genereres navigationsegenskaber på de returnerede værdier (standard er true)</li>        <li><code>HierarchicalNavigation</code>: En logisk værdi (true/false), der angiver, om tabellerne skal vises grupperet efter skemanavne (standard er false)</li>        <li><code>ConnectionTimeout</code>: En varighed, der styrer, hvor længe der skal ventes, før forsøget på at oprette forbindelse til serveren opgives. Standardværdien er afhængig af driveren.</li>        <li><code>CommandTimeout</code>: En varighed der styrer, hvor længe forespørgslen på serversiden må køre, før den annulleres. Standardværdien er afhængig af driveren.</li><li><code>NormalizeDatabaseName</code>: En logisk værdig (true/false), der angiver, hvorvidt databasenavnet skal nomaliseres til store bogstaver eller fortolkes bogstaveligt (standard er true).</li></ul>Postparameteren er angivet som [option1 = value1, option2 = value2...].


## Examples

### Example #1 
Angiv tabellerne i et IBM Netezza-projekt.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



