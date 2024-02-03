---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


## Description

Gegevens importeren uit een Amazon Redshift-database.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Retourneert een tabel met de tabellen in het Amazon Redshift-cluster <code>server</code> in de database <code>database</code>.  Er kan een optionele recordparameter, <code>options</code>, worden opgegeven om de volgende opties te beheren:<ul><li><code>Providernaam</code>: een tekstwaarde die moet worden gebruikt als providernaam voor de verbinding. Dit wordt gebruikt bij het gebruik van Microsoft Authentication.</li><li><code>Batch Size</code>: het aantal rijen dat wordt opgehaald in één aanroep naar de server.</li></ul>  


## Examples

### Example #1 

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



