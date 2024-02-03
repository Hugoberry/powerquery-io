---
title: Marketo.Activities
---

# Marketo.Activities


## Description

Šī funkcija atgriež tabulu, kurā norādītas potenciālo klientu darbības.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Details

Šī funkcija izsauc Marketo REST API galapunktu adresē <code>URL</code>/rest/v1/activities.json. Tiek atgrieztas visas darbības sarakstā <code>activityIds</code>, kuras ir notikušas kopš datuma <code>startTime</code>.


## Examples

### Example #1 
Šī funkcija atgādā tabulu, kurā uzskaitītas darbības kategorijā Visit Webpage (Tīmekļa lapas apmeklējums) kopš 2015. gada 1. novembra
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
Tabula, kurā norādīta detalizēta informācija par visām darbībām kategorijā Visit Webpage (Tīmekļa lapas apmeklējums) kopš 1. novembra
```



