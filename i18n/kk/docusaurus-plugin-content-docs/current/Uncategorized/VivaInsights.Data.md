---
title: VivaInsights.Data
---

# VivaInsights.Data



## Syntax

```powerquery
VivaInsights.Data(
    scopeId as text,
    optional jobName as text,
    optional jobId as text,
    optional advancedParameters as record
) as table
```


## Details

Апта сайынғы көрсеткіштерді және атрибут деректерін жұмыс орны аналитикасынан импорттау.


## Examples

### Example #1 
Бөлімдегі әр өлшенетін қызметкер үшін көрінетін атрибуттары мен апта сайынғы көрсеткіштері бар кестені қайтарады.
```powerquery
VivaInsights.Data("5f142ea5-c08a-eb02-de68-41dccdefb141")
```

Result: 
```powerquery
#кесте({"Query1"}, {{"PersonId""}, {"PID"}})
```


