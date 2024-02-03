---
title: Number.Power
---

# Number.Power


## Description

Verheft een getal tot de opgegeven macht.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Details

Hiermee wordt het resultaat van het verheffen van <code>number</code> tot de macht <code>power</code> geretourneerd. Als <code>number</code> of <code>power</code> null is, retourneert <code>Number.Power</code> null. <ul> <li><code>number</code>: De basis.</li> <li><code>power</code>: De exponent.</li> </ul>


## Examples

### Example #1 
De waarde van 5 zoeken, verheven tot de macht 3 (5 tot de derde macht)
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
