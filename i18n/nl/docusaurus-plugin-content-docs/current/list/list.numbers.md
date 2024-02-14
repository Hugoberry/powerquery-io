---
title: List.Numbers
---

# List.Numbers


Retourneert een lijst met getallen op basis van een aanvankelijke waarde, telling en optionele incrementele waarde.


## Syntax

```powerquery
List.Numbers(
    start as number,
    count as number,
    optional increment as number
) as list
```


## Remarks

Retourneert een lijst met getallen op basis van een aanvankelijke waarde, telling en optionele incrementele waarde. De standaard incrementele waarde is 1.<ul>   <li><code>start</code>: De aanvankelijke waarde in de lijst.</li>   <li><code>count</code>: Het aantal waarden dat moet worden gemaakt.</li>   <li><code>increment</code>: <i>[Optioneel]</i> De waarde waarmee moet worden verhoogd. Als weggelaten waarden worden verhoogd met 1.</li></ul>


## Examples

### Example #1 
Een lijst met tien opeenvolgende getallen genereren, te beginnen bij 1.
```powerquery
List.Numbers(1, 10)
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
}
```


### Example #2 
Een lijst met tien opeenvolgende getallen genereren, te beginnen bij 1, met een toename van 2 voor elk volgend getal.
```powerquery
List.Numbers(1, 10, 2)
```

Result: 
```powerquery
{
    1,
    3,
    5,
    7,
    9,
    11,
    13,
    15,
    17,
    19
}
```




## Category
List.Generators
