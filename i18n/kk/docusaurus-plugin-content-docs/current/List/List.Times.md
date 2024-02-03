---
title: List.Times
---

# List.Times


## Description

Бастапқы мән, саны және артатын ұзақтық мәні берілсе, time мәндерінің тізімін жасайды.


## Syntax

```powerquery
List.Times(
    start as time,
    count as number,
    step as duration
) as list
```


## Details

<code>start</code> дегенде басталатын <code>count</code> өлшемді <code>time</code> мәндерінің тізімін қайтарады. <code>step</code> көрсетілген артуы — әр мәнге қосылатын <code>duration</code> мәні.


## Examples

### Example #1 
Талтүстен (#time(12, 0, 0)) басталып бір сағатпен (#duration(0, 1, 0, 0)) артатын 4 мәннен тұратын тізімді жасау.
```powerquery
List.Times(#time(12, 0, 0), 4, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #time(12, 0, 0),
    #time(13, 0, 0),
    #time(14, 0, 0),
    #time(15, 0, 0)
}
```




## Category
List.Generators
