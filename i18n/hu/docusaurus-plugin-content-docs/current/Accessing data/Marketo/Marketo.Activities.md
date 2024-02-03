---
title: Marketo.Activities
---

# Marketo.Activities


## Description

Az érdeklődési tevékenységeket tartalmazó táblát adja vissza.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Details

Hívást indít az <code>url</code>/rest/v1/activities.json címen található Marketo REST API végpontra. A rendszer az <code>activityIds</code> lista minden olyan tevékenységét kiadja, amelyre <code>startTime</code> óta került sor.


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



