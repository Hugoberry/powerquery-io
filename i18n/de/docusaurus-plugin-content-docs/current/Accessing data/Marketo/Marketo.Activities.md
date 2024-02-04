---
title: Marketo.Activities
---

# Marketo.Activities


## Description

Gibt eine Tabelle mit Leadaktivitäten zurück.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Details

Ruft den Marketo-REST-API-Endpunkt unter <code>url</code>/rest/v1/activities.json auf. Es werden alle Aktivitäten in Liste <code>activityIds</code> zurückgegeben, die seit <code>startTime</code> aufgetreten sind.


## Examples

### Example #1 
Ruft eine Tabelle mit Besuchsaktivitäten auf Webseiten seit dem 1. November 2015 ab.
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
Eine Tabelle mit Details zu Besuchsaktivitäten auf Webseiten seit dem 1. November.
```



