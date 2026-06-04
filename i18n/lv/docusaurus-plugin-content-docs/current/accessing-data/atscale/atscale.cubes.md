---
title: AtScale.Cubes
---

# AtScale.Cubes


Importēt/DirectQuery kuba datus no AtScale.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Remarks

Atgriež kuba datus no AtScale serverī `server`. Ir iespējams norādīt papildu ieraksta parametru `options`, lai kontrolētu tālāk norādītās opcijas.

-   `TypedMeasureColumns`: loģiskā vērtība, kas norāda, vai daudzdimensiju vai tabulārajā modelī norādītie tipi tiks izmantoti pievienoto mēru kolonnu tipiem. Ja šī opcija ir iestatīta uz “false” (aplams), tips“skaitlis” tiek izmantots visām mēra kolonnām. Šīs opcijas noklusējuma vērtība ir “false” (aplams).
-   `CommandTimeout`: ilgums (sekundēs), kas kontrolē, cik ilgi servera puses vaicājumam tiek atļauts darboties, pirms tas tiek atcelts. Noklusējuma vērtība ir atkarīga no draivera.
-   `ConnectionTimeout`: lgums (sekundēs), kas kontrolē, cik ilgi ir jāgaida, pirms tiek atmests mēģinājums izveidot savienojumu ar serveri. Noklusējuma vērtība ir atkarīga no draivera.

Ieraksta parametrs tiek norādīts šādā formātā: \[opcija1 = vērtība1, opcija2 = vērtība2...\].


## Examples

### Example #1
Uzskaita kuba datus AtScale kubā.
```powerquery
AtScale.Cubes("https://contoso.atscale.com:10502/xmla/...")
```



