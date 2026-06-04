---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


Umožňuje importovat data z databáze Amazon Redshift.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Vrátí tabulku se seznamem tabulek v Amazon Redshift clusterovém `serveru` v `databázi`. Můžete zadat `možnosti`, což je volitelný parametr záznamu, který řídí následující možnosti:

-   `Název zprostředkovatele`: Textová hodnota, která se má použít jako název zprostředkovatele pro připojení.. Používá se při použití ověřování od Microsoftu.
-   `Velikost dávky`: Počet řádků načtených jedním voláním do serveru.


## Examples

### Example #1

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



