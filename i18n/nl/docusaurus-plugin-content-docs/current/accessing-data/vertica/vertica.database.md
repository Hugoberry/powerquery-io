---
title: Vertica.Database
---

# Vertica.Database


Gegevens importeren uit Vertica


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Hiermee wordt een tabel met chema's geretourneerd die beschikbaar zijn op de server met de naam die wordt bepaald door de parameter `server` in de database met de naam die wordt bepaald door de parameter `database`. Er kan een optionele recordparameter `options` worden opgegeven om aanvullende eigenschappen op te geven. De record kan de volgende velden bevatten:

-   `ConnectionTimeout`: Een duur die bepaalt hoe lang er moet worden gewacht voordat er niet meer wordt geprobeerd verbinding te maken met de server. De standaardwaarde is afhankelijk van het stuurprogramma.
-   `CommandTimeout` : Een duur die bepaalt hoe lang de query aan de serverzijde mag worden uitgevoerd voordat deze wordt geannuleerd. De standaardwaarde is afhankelijk van het stuurprogramma.


## Examples

### Example #1
De tabellen in Vertica weergeven
```powerquery

```



