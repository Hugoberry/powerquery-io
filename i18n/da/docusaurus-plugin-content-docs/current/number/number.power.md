---
title: Number.Power
---

# Number.Power


Opløfter et tal til en angivet potens.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Remarks

Returnerer resultatet af at opløfte <code>number</code> til potensen <code>power</code>.    Hvis <code>number</code> eller <code>power</code> er null, returnerer <code>Number.Power</code> null.      <ul>        <li><code>number</code>: Grundtallet.</li>        <li><code>power</code>: Eksponenten.</li>      </ul>


## Examples

### Example #1 
Find værdien for 5 opløftet til potensen 3 (5 i tredje potens).
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
