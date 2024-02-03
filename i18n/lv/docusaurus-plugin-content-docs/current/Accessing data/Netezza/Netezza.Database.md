---
title: Netezza.Database
---

# Netezza.Database


## Description

Importēt datus no IBM Netezza datu bāzes.


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Tiek atgrieztas Netezza tabulas, skati un saglabātās funkcijas no serverī <code>server</code> esošās Netezza servera datubāzes <code>database</code>. Kopā ar serveri pēc izvēles var norādīt pieslēgvietu, atdalot to ar kolu. Var norādīt neobligātu ieraksta parametru <code>options</code>, lai pārvaldītu tālāk norādītās opcijas.<ul>        <li><code>CreateNavigationProperties</code>: loģiskā vērtība (true/false), kas nosaka, vai ir jāģenerē atgriezto vērtību navigācijas rekvizīti (noklusējuma vērtība ir false).</li>        <li><code>HierarchicalNavigation</code>: loģiskā vērtība (true/false), kura nosaka, vai tabulas ir jāskata, grupējot pēc shēmu nosaukumiem (noklusējuma vērtība ir false).</li>        <li><code>ConnectionTimeout</code>: ilgums, kas tiek izmantots, lai pārvaldītu, cik ilgi jāgaida, pirms tiek atmests mēģinājums izveidot savienojumu ar serveri. Noklusējuma vērtība ir atkarīga no draivera.</li>        <li><code>CommandTimeout</code>: ilgums, kas tiek izmantots, lai pārvaldītu, cik ilgi drīkst izpildīt servera puses vaicājumu, pirms tas tiek atcelts. Noklusējuma vērtība ir atkarīga no draivera.</li><li><code>NormalizeDatabaseName</code>: loģiskā vērtība (true/false), kas iestata to, vai normalizēt datu bāzes nosaukumu, izmantojot lielos burtus, vai interpretēt to burtiski (noklusējuma vērtība ir true).</li></ul>Ieraksta parametrs tiek norādīts šādi: [opcija1 = vērtība1, opcija2= vērtība2...].


## Examples

### Example #1 
Norādīt IBM Netezza projektā iekļautās tabulas.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



