---
title: List.DateTimeZones
---

# List.DateTimeZones


## Description

Genereert een lijst met datetimezone-waarden op basis van een aanvankelijke waarde, telling en incrementele duurwaarde.


## Syntax

```powerquery
List.DateTimeZones(
    start as datetimezone,
    count as number,
    step as duration
) as list
```


## Details

Retourneert een lijst met <code>datetimezone</code>waarden van grootte <code>count</code>, te beginnen bij <code>start</code>. De opgegeven verhoging, <code>step</code>, is een <code>duration</code>waarde die aan elke waarde is toegevoegd.


## Examples

### Example #1 
Een lijst met 10 waarden maken te beginnen bij 5 minuten voor nieuwjaarsdag (#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0)) en oplopend in stappen van 1 minuut (#duration(0, 0, 1, 0)).
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
