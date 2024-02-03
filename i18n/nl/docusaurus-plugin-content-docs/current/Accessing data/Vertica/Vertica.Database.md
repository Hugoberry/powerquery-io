---
title: Vertica.Database
---

# Vertica.Database


## Description

Gegevens importeren uit Vertica


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Hiermee wordt een tabel met chema's geretourneerd die beschikbaar zijn op de server met de naam die wordt bepaald door de parameter <code>server</code> in de database met de naam die wordt bepaald door de parameter <code>database</code>.Er kan een optionele recordparameter <code>options</code> worden opgegeven om aanvullende eigenschappen op te geven. De record kan de volgende velden bevatten:<ul>    <li><code>ConnectionTimeout</code>: Een duur die bepaalt hoe lang er moet worden gewacht voordat er niet meer wordt geprobeerd verbinding te maken met de server. De standaardwaarde is afhankelijk van het stuurprogramma.</li>    <li><code>CommandTimeout </code>: Een duur die bepaalt hoe lang de query aan de serverzijde mag worden uitgevoerd voordat deze wordt geannuleerd. De standaardwaarde is afhankelijk van het stuurprogramma.</li></ul>


## Examples

### Example #1 
De tabellen in Vertica weergeven
```powerquery

```



