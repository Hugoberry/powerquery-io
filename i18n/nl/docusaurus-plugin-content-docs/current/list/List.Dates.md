---
title: List.Dates
---

# List.Dates


Genereert een lijst met date-waarden op basis van een aanvankelijke waarde, telling en incrementele duurwaarde.


## Syntax

```powerquery
List.Dates(
    start as date,
    count as number,
    step as duration
) as list
```


## Remarks

Retourneert een lijst met <code>date</code>waarden van grootte <code>count</code>, te beginnen bij <code>start</code>.. De opgegeven verhoging, <code>step</code>, is een <code>duration</code>waarde die aan elke waarde wordt toegevoegd.


## Examples

### Example #1 
Een lijst met vijf waarden maken te beginnen op oudejaarsavond (#date(2011, 12, 31)) en oplopend in stappen van 1 dag (#duration(1, 0, 0, 0)).
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
