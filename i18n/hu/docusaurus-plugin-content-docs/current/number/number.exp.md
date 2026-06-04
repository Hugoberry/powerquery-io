---
title: Number.Exp
---

# Number.Exp


A megadott hatványra emeli az e értéket.


## Syntax

```powerquery
Number.Exp(
    number as number
) as number
```


## Remarks

Az e érték `number`. hatványra emelésének eredményét adja vissza (exponenciális függvény).

-   `number`: Egy `number` típusú érték, amelyre ki kell számítani az exponenciális függvényt. Ha a(z) `number` érték null, a `Number.Exp` függvény null értéket ad vissza.


## Examples

### Example #1
Az e érték 3. hatványra emelése
```powerquery
Number.Exp(3)
```

Result: 
```powerquery
20.085536923187668
```




## Category
Number.Operations
