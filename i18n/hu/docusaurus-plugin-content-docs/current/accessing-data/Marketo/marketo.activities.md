---
title: Marketo.Activities
---

# Marketo.Activities


Az érdeklődési tevékenységeket tartalmazó táblát adja vissza.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Remarks

Hívást indít az `url`/rest/v1/activities.json címen található Marketo REST API végpontra. A rendszer az `activityIds` lista minden olyan tevékenységét kiadja, amelyre `startTime` óta került sor.


## Examples

### Example #1
A 2015. november 1-gyel kezdődő időszak „Webhelylátogatás” tevékenységeit tartalmazó táblát kéri le.
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
A november 1-gyel kezdődő időszak „Webhelylátogatás” tevékenységeinek részleteit tartalmazó tábla
```



