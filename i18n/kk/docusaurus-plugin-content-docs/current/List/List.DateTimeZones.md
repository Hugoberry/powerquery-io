---
title: List.DateTimeZones
---

# List.DateTimeZones


## Description

Бастапқы мән, саны және артатын ұзақтық мәні берілсе, datetimezone мәндерінің тізімін жасайды.


## Syntax

```powerquery
List.DateTimeZones(
    start as datetimezone,
    count as number,
    step as duration
) as list
```


## Details

<code>start</code> дегенде басталатын <code>count</code> өлшемді <code>datetimezone</code> мәндерінің тізімін қайтарады. <code>step</code> көрсетілген артуы — әр мәнге қосылатын <code>duration</code> мәні.


## Examples

### Example #1 
Жаңа жыл күнінен 5 минут бұрыннан (#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0)) бастап 1 минутқа (#duration(0, 0, 1, 0)) арттыру арқылы 10 мәннің тізімін жасау.
```powerquery
List.DateTimeZones(#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0), 10, #duration(0, 0, 1, 0))
```

Result: 
```powerquery
{
    #datetimezone(2011, 12, 31, 23, 55, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 56, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 57, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 58, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 59, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 0, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 1, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 2, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 3, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 4, 0, -8, 0)
}
```




## Category
List.Generators
