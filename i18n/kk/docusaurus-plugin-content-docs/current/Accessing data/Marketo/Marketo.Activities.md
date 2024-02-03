---
title: Marketo.Activities
---

# Marketo.Activities


## Description

Кестені негізгі әрекеттермен қайтарады.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Details

<code>url</code>/rest/v1/activities.json мекенжайында Marketo REST API соңғы нүктесіне қоңырау соғады. <code>startTime</code> бері болған <code>activityIds</code> тізіміндегі барық әрекеттер қайтарылады.


## Examples

### Example #1 
&#34;Веб-бетке кіру&#34; әрекеттерінің кестесін 2015 жылдың 1 қарашасынан бері қабылдайды.
```powerquery
Marketo.Әрекеттер("https://100-AAA-999.mktorest.com/rest", #күні(2015,11,1), {1})
```

Result: 
```powerquery
Қарашаның 1-нен бергі барлық "Веб-бетке кіру" әрекеттерінің толық мәліметтері бар кесте
```



