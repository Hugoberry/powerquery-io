---
title: Vertica.Database
---

# Vertica.Database


Importér data fra Vertica


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Returnerer en tabel over skemaer, der er tilgængelige på den server, som er angivet af parameteren `server`, i den database, som er angivet af parameteren `database`. Du kan angive den valgfri parameter `options` for at angive yderligere egenskaber. Posten kan indeholde følgende felter:

-   `ConnectionTimeout`: En varighed, der bestemmer, hvor lang tid der skal ventes, før et forsøg på at oprette forbindelse til serveren opgives. Standardværdien er driverafhængig.
-   `CommandTimeout`: En varighed, der bestemmer, hvor længe forespørgslen på serversiden får lov til at køre, før den annulleres. Standardværdien er driverafhængig.


## Examples

### Example #1
Vis tabellerne i Vertica
```powerquery

```



