---
title: Marketo.Leads
---

# Marketo.Leads


Негізгі мәліметтері бар кестені қайтарады.


## Syntax

```powerquery
Marketo.Leads(
    url as text,
    leadIds as list,
    optional options as any
) as table
```


## Remarks

`url`/rest/v1/leads.json мекенжайында Marketo REST API соңғы нүктесіне қоңырау соғады. `leadIds` тізіміндегі барлық негізгілер қайтарылады.


## Examples

### Example #1
Үш негізгіге толық мәліметтер қайтарады
```powerquery
Marketo.Негізгілер("https://100-AAA-999.mktorest.com/rest", {50, 2343, 88498})
```

Result: 
```powerquery
Берілген негізгілерге арналған толық мәліметтері бар кесте
```



