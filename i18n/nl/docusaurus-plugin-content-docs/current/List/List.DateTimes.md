---
title: List.DateTimes
---

# List.DateTimes


## Description

Genereert een lijst met datetime-waarden op basis van een aanvankelijke waarde, telling en incrementele duurwaarde.


## Syntax

```powerquery
List.DateTimes(
    start as datetime,
    count as number,
    step as duration
) as list
```


## Details

Retourneert een lijst met <code>datetime</code>waarden van grootte <code>count</code>, te beginnen bij <code>start</code>. De opgegeven verhoging, <code>step</code>, is een <code>duration</code>waarde die aan elke waarde is toegevoegd.


## Examples

### Example #1 
Een lijst met 10 waarden maken te beginnen bij 5 minuten voor nieuwjaarsdag (#datetime(2011, 12, 31, 23, 55, 0)) en oplopend in stappen van 1 minuut (#duration(0, 0, 1, 0)).
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
