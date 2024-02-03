---
title: List.DateTimes
---

# List.DateTimes


## Description

Бастапқы мән, саны және артатын ұзақтық мәні берілсе, datetime мәндерінің тізімін жасайды.


## Syntax

```powerquery
List.DateTimes(
    start as datetime,
    count as number,
    step as duration
) as list
```


## Details

<code>start</code> дегенде басталатын <code>count</code> өлшемді <code>datetime</code> мәндерінің тізімін қайтарады. <code>step</code> көрсетілген артуы — әр мәнге қосылатын <code>duration</code> мәні.


## Examples

### Example #1 
Жаңа жыл күнінен 5 минут бұрыннан (#datetime(2011, 12, 31, 23, 55, 0)) бастап 1 минутқа (#duration(0, 0, 1, 0)) арттыру арқылы 10 мәннің тізімін жасау.
```powerquery
List.DateTimes(#datetime(2011, 12, 31, 23, 55, 0), 10, #duration(0, 0, 1, 0))
```

Result: 
```powerquery
{
    #datetime(2011, 12, 31, 23, 55, 0),
    #datetime(2011, 12, 31, 23, 56, 0),
    #datetime(2011, 12, 31, 23, 57, 0),
    #datetime(2011, 12, 31, 23, 58, 0),
    #datetime(2011, 12, 31, 23, 59, 0),
    #datetime(2012, 1, 1, 0, 0, 0),
    #datetime(2012, 1, 1, 0, 1, 0),
    #datetime(2012, 1, 1, 0, 2, 0),
    #datetime(2012, 1, 1, 0, 3, 0),
    #datetime(2012, 1, 1, 0, 4, 0)
}
```




## Category
List.Generators
