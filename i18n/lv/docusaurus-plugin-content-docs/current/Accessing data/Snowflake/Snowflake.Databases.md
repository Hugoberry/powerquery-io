---
title: Snowflake.Databases
---

# Snowflake.Databases


## Description

Importēt datus no Snowflake Computing noliktavas.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Details

Atgriež tabulu, kurā ir norādītas Snowflake Computing <code>noliktavas</code> tabulas, kas atrodas <code>serverī</code>. Var norādīt papildu ieraksta parametru <code>opcijas</code>, lai pārvaldītu šādas opcijas:<ul><li><code>Role</code>: teksta vērtība, ko izmantot kā lomas nosaukumu savienojumam.</li><li><code>CreateNavigationProperties</code>: loģiskā vērtība (true/false), kas nosaka, vai atgrieztajām vērtībām ģenerēt navigācijas rekvizītus (noklusējuma vērtība ir true).</li><li><code>ConnectionTimeout</code>: ilgums sekundēs, cik ilgi gaidīt tīkla atbildes no Snowflake.</li><li><code>CommandTimeout</code>: ilgums sekundēs, cik ilgi gaidīt vaicājuma izpildi.</li></ul>    


## Examples

### Example #1 
Uzskaitīt Snowflake noliktavā ietvertās tabulas.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



