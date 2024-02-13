---
title: List.Times
---

# List.Times


Genereert een lijst met time-waarden op basis van een aanvankelijke waarde, telling en incrementele duurwaarde.


## Syntax

```powerquery
List.Times(
    start as time,
    count as number,
    step as duration
) as list
```


## Remarks

Retourneert een lijst met <code>time</code>-waarden van grootte <code>count</code>, te beginnen bij <code>start</code>. De opgegeven verhoging, <code>step</code>, is een <code>duration</code>-waarde die aan elke waarde wordt toegevoegd.


## Examples

### Example #1 
Een lijst met vier waarden maken, te beginnen bij 12 uur &#39;s middags (#time(12, 0, 0)) en oplopend in stappen van één uur (#duration(0, 1, 0, 0)).
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
