---
title: Vertica.Database
---

# Vertica.Database


Importēt datus no platformas Vertica


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Atgriež noteiktā serverī un datu bāzē pieejamo shēmu tabulu. Servera nosaukums ir norādīts parametrā `server`, un datu bāzes nosaukums ir norādīts parametrā `database`. Lai precizētu papildu rekvizītus, var norādīt neobligātu ieraksta parametru `options`. Ierakstā var būt tālāk norādītie lauki.

-   `ConnectionTimeout`: ilgums, kas tiek izmantots, lai pārvaldītu, cik ilgi jāgaida, pirms tiek atmests mēģinājums izveidot savienojumu ar serveri. Noklusējuma vērtība ir atkarīga no draivera.
-   `CommandTimeout`: ilgums, ko izmanto, lai pārvaldītu to, cik ilgi tiek atļauts izpildīt servera puses vaicājumu, pirms tas tiek atcelts. Noklusējuma vērtība ir atkarīga no draivera.


## Examples

### Example #1
Uzskaitīt platformā Vertica esošās tabulas
```powerquery

```



