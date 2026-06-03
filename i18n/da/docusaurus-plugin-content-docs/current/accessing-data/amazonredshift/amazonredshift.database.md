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

Returnerer en tabel, der viser tabellerne på Amazon Redshift-klyngen `server` i databasen `database`. Der kan angives en valgfri postparameter, `indstillinger`, for at styre følgende indstillinger:

-   `Udbydernavn`: En tekstværdi, der skal bruges som udbydernavn for forbindelsen. Dette bruges, når du bruger Microsoft-godkendelse.
-   `Batchstørrelse`: Antallet af rækker, der hentes i et enkelt kald til serveren.


## Examples

### Example #1

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



