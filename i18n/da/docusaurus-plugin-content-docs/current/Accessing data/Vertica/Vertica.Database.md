---
title: Vertica.Database
---

# Vertica.Database


## Description

Importér data fra Vertica


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Returnerer en tabel over skemaer, der er tilgængelige på den server, som er angivet af parameteren <code>server</code>, i den database, som er angivet af parameteren <code>database</code>.Du kan angive den valgfri parameter <code>options</code> for at angive yderligere egenskaber. Posten kan indeholde følgende felter:<ul>    <li> <code>ConnectionTimeout</code>: En varighed, der bestemmer, hvor lang tid der skal ventes, før et forsøg på at oprette forbindelse til serveren opgives. Standardværdien er driverafhængig.</li>    <li><code>CommandTimeout</code>: En varighed, der bestemmer, hvor længe forespørgslen på serversiden får lov til at køre, før den annulleres. Standardværdien er driverafhængig.</li></ul>


## Examples

### Example #1 
Vis tabellerne i Vertica
```powerquery

```



