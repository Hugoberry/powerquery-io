---
title: Marketo.Activities
---

# Marketo.Activities


## Description

Vrací tabulku s aktivitami ohledně potenciálních zákazníků.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Details

Zavolá koncový bod služby Marketo REST API na adrese <code>url</code>/rest/v1/activities.json. Vrátí všechny aktivity ze seznamu <code>ID_aktivit</code>, ke kterým došlo od <code>čas_začátku</code>.


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



