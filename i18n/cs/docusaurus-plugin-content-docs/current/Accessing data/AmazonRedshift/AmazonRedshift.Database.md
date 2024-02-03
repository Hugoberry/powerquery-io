---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


## Description

Umožňuje importovat data z databáze Amazon Redshift.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Vrátí tabulku se seznamem tabulek v Amazon Redshift clusterovém <code>serveru</code> v <code>databázi</code>. Zadáním volitelného parametru záznamu <code>možností</code> můžete řídit následující možnosti:<ul><li><code>Název zprostředkovatele</code>: Textová hodnota, která se má použít jako název zprostředkovatele pro připojení. Používá se při použití Microsoft Authentication.</li><li><code>Velikost dávky</code> : Počet řádků načtených jedním voláním do serveru.</li></ul>  


## Examples

### Example #1 

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



