---
title: AtScale.Cubes
---

# AtScale.Cubes


## Description

Import-/DirectQuery-kubusgegevens uit een AtScale.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Details

Hiermee worden kubusgegevens van AtScale op de server <code>server</code> geretourneerd. Een optionele recordparameter <code>options</code> kan worden opgegeven voor het bepalen van de volgende opties:<ul>  <li><code>TypedMeasureColumns</code>: Een logische waarde die aangeeft of de typen die zijn opgegevens in het multidimensionale of tabellaire model worden gebruikt voor de typen kolommen voor extra beveiliging. Wanneer ingesteld op false, wordt het type 'number' gebruikt voor alle kolommen van de meting. De standaardwaarde voor deze optie is ingesteld op false. </li> <li><code>CommandTimeout</code>: Een duur (in seconden) waarmee wordt bepaald hoe lang de query aan de serverzijde mag worden uitgevoerd voordat deze wordt geannuleerd. De standaardwaarde is afhankelijk van het stuurprogramma. </li> <li><code>ConnectionTimeout</code>: Een duur (in seconden) waarmee wordt bepaald hoe lang moet worden gewacht voordat een poging om verbinding met de server te maken, wordt afgebroken. De standaardwaarde is afhankelijk van het stuurprogramma. </li> </ul>De recordparameter is opgegeven als [optie1 = waarde1, optie2 = waarde2...].


