---
title: List.Dates
---

# List.Dates


## Description

Бастапқы мән, саны және артатын ұзақтық мәні берілсе, date мәндерінің тізімін жасайды.


## Syntax

```powerquery
List.Dates(
    start as date,
    count as number,
    step as duration
) as list
```


## Details

<code>start</code> дегенде басталатын <code>count</code> өлшемді <code>date</code> мәндерінің тізімін қайтарады. <code>step</code> көрсетілген артуы — әр мәнге қосылатын <code>duration</code> мәні.


## Examples

### Example #1 
Жаңа жыл кешінен (#date(2011, 12, 31)) бастап 1 күнге (#duration(1, 0, 0, 0)) арттыру арқылы 5 мәннің тізімін жасау.
```powerquery
List.Dates(#date(2011, 12, 31), 5, #duration(1, 0, 0, 0))
```

Result: 
```powerquery
{
    #date(2011, 12, 31),
    #date(2012, 1, 1),
    #date(2012, 1, 2),
    #date(2012, 1, 3),
    #date(2012, 1, 4)
}
```




## Category
List.Generators
