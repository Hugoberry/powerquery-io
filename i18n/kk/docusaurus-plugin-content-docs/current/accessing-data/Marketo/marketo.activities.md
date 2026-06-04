---
title: Marketo.Activities
---

# Marketo.Activities


Кестені негізгі әрекеттермен қайтарады.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Remarks

`url`/rest/v1/activities.json мекенжайында Marketo REST API соңғы нүктесіне қоңырау соғады. `startTime` бері болған `activityIds` тізіміндегі барық әрекеттер қайтарылады.


## Examples

### Example #1
"Веб-бетке кіру" әрекеттерінің кестесін 2015 жылдың 1 қарашасынан бері қабылдайды.
```powerquery
Marketo.Әрекеттер("https://100-AAA-999.mktorest.com/rest", #күні(2015,11,1), {1})
```

Result: 
```powerquery
Қарашаның 1-нен бергі барлық "Веб-бетке кіру" әрекеттерінің толық мәліметтері бар кесте
```



