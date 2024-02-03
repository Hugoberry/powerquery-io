---
title: Marketo.Activities
---

# Marketo.Activities


## Description

Returnerer en tabel, der viser kundeemners aktiviteter.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Details

Foretager et kald til Marketo REST API-slutpunktet på <code>url</code>/rest/v1/activities.json. Alle aktiviteter på listen <code>activityIds</code>, der er sket siden den <code>startTime</code>, returneres.


## Examples

### Example #1 
Opretter en tabel med &#34;websidebesøg&#34;-aktiviteter siden den 1. november 2015
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
En tabel med alle "websidebesøg"-aktiviteter siden den 1. november 2015
```



