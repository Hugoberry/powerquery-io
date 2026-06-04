---
title: Marketo.Activities
---

# Marketo.Activities


Vrací tabulku s aktivitami ohledně potenciálních zákazníků.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Remarks

Zavolá koncový bod služby Marketo REST API na adrese `url`/rest/v1/activities.json. Vrátí všechny aktivity ze seznamu `ID_aktivit`, ke kterým došlo od `čas_začátku`.


## Examples

### Example #1
Vrátí tabulku aktivit typu „návštěva webu“ od 1. listopadu 2015.
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
Tabulka obsahující všechny „návštěvy webu“ od 1. listopadu 2015
```



