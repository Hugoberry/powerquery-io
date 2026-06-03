---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


Gegevens importeren uit een Amazon Redshift-database.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Retourneert een tabel met de tabellen in het Amazon Redshift-cluster `server` in de database `database`. De optionele recordparameter `options` kan worden opgegeven om de volgende opties te beheren:

-   `Providernaam`: een tekstwaarde die moet worden gebruikt als providernaam voor de verbinding. Deze wordt gebruikt bij het gebruik van Microsoft-verificatie.
-   `Batchgrootte`: het aantal rijen dat in één aanroep naar de server wordt opgehaald.


## Examples

### Example #1

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



