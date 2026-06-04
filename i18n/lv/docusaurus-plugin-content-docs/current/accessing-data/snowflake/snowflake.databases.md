---
title: Snowflake.Databases
---

# Snowflake.Databases


Importēt datus no Snowflake Computing noliktavas.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Remarks

Atgriež tabulu, kurā ir norādītas Snowflake Computing `noliktavas` tabulas, kas atrodas `serverī`. Var norādīt papildu ieraksta parametru `opcijas`, lai pārvaldītu šādas opcijas:

-   `Role`: teksta vērtība, ko izmantot kā lomas nosaukumu savienojumam.
-   `CreateNavigationProperties`: loģiskā vērtība (true/false), kas nosaka, vai atgrieztajām vērtībām ģenerēt navigācijas rekvizītus (noklusējuma vērtība ir true).
-   `ConnectionTimeout`: ilgums sekundēs, cik ilgi gaidīt tīkla atbildes no Snowflake.
-   `CommandTimeout`: ilgums sekundēs, cik ilgi gaidīt vaicājuma izpildi.


## Examples

### Example #1
Uzskaitīt Snowflake noliktavā ietvertās tabulas.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



