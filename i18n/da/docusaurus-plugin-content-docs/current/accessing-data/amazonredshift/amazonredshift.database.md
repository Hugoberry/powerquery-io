---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


Importér data fra en Amazon Redshift-database.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Returnerer en tabel, der viser tabellerne på Amazon Redshift-klyngen <code>server</code> i databasen <code>database</code>.  En valgfri registreringsparameter, <code>indstillinger</code>, kan angives for at kontrollere følgende indstillinger:<ul><li><code>Udbydernavn</code>: En tekstværdi, der skal bruges som udbydernavn for forbindelsen. Dette bruges, når du bruger Microsoft Authentication.</li><li><code>Batch-størrelse</code>: Antallet af rækker, der hentes i et enkelt opkald til serveren.</li></ul>  


## Examples

### Example #1 

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



