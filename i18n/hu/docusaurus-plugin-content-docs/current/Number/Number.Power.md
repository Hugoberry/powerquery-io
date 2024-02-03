---
title: Number.Power
---

# Number.Power


## Description

A megadott hatványra emel egy számot.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Details

A(z) <code>number</code> érték <code>power</code>. hatványra emelésének eredményét adja vissza.    Ha a(z) <code>number</code> vagy a(z) <code>power</code> érték null, a <code>Number.Power</code> függvény null értéket ad vissza.      <ul>        <li><code>number</code>: Az alap.</li>        <li><code>power</code>: A kitevő.</li>      </ul>


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
