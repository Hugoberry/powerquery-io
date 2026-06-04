---
title: Number.Power
---

# Number.Power


A megadott hatványra emel egy számot.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Remarks

A(z) `number` érték `power`. hatványra emelésének eredményét adja vissza. Ha a(z) `number` vagy a(z) `power` érték null, a `Number.Power` függvény null értéket ad vissza.

-   `number`: Az alap.
-   `power`: A kitevő.


## Examples

### Example #1
Az 5 érték 3. hatványra emelésének eredménye (5 köbe)
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
