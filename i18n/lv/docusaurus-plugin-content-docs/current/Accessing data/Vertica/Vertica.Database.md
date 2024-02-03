---
title: Vertica.Database
---

# Vertica.Database


## Description

Importēt datus no platformas Vertica


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Atgriež noteiktā serverī un datu bāzē pieejamo shēmu tabulu. Servera nosaukums ir norādīts parametrā <code>server</code>, un datu bāzes nosaukums ir norādīts parametrā <code>database</code>.Lai precizētu papildu rekvizītus, var norādīt neobligātu ieraksta parametru <code>options</code>. Ierakstā var būt tālāk norādītie lauki.<ul>    <li><code>ConnectionTimeout</code>: ilgums, kas tiek izmantots, lai pārvaldītu, cik ilgi jāgaida, pirms tiek atmests mēģinājums izveidot savienojumu ar serveri. Noklusējuma vērtība ir atkarīga no draivera.</li>    <li><code>CommandTimeout</code>: ilgums, ko izmanto, lai pārvaldītu to, cik ilgi tiek atļauts izpildīt servera puses vaicājumu, pirms tas tiek atcelts. Noklusējuma vērtība ir atkarīga no draivera.</li></ul>


## Examples

### Example #1 
Uzskaitīt platformā Vertica esošās tabulas
```powerquery

```



