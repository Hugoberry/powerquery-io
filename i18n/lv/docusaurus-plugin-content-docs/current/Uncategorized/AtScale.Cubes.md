---
title: AtScale.Cubes
---

# AtScale.Cubes


## Description

Importēt/DirectQuery kuba datus no AtScale.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Details

Atgriež kuba datus no AtScale serverī <code>server</code>. Ir iespējams norādīt papildu ieraksta parametru <code>options</code>, lai kontrolētu tālāk norādītās opcijas.<ul>        <li><code>TypedMeasureColumns</code>: loģiskā vērtība, kas norāda, vai daudzdimensiju vai tabulārajā modelī norādītie tipi tiks izmantoti pievienoto mēru kolonnu tipiem. Ja šī opcija ir iestatīta uz “false” (aplams), tips“skaitlis” tiek izmantots visām mēra kolonnām. Šīs opcijas noklusējuma vērtība ir “false” (aplams).</li>        <li><code>CommandTimeout</code>: ilgums (sekundēs), kas kontrolē, cik ilgi servera puses vaicājumam tiek atļauts darboties, pirms tas tiek atcelts. Noklusējuma vērtība ir atkarīga no draivera. </li>        <li><code>ConnectionTimeout</code>: lgums (sekundēs), kas kontrolē, cik ilgi ir jāgaida, pirms tiek atmests mēģinājums izveidot savienojumu ar serveri. Noklusējuma vērtība ir atkarīga no draivera. </li></ul>Ieraksta parametrs tiek norādīts šādā formātā: [opcija1 = vērtība1, opcija2 = vērtība2...].


