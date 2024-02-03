---
title: Number.Mod
---

# Number.Mod


## Description

Celo število deli dve števili in vrne ostanek.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Details

Vrne ostanek deljenja celega števila <code>number</code> s številom <code>divisor</code>.     Če ima <code>number</code> ali <code>divisor</code> ničelno vrednost, <code>Number.Mod</code> vrne "null".      <ul>        <li><code>number</code>: deljenec.</li>        <li><code>divisor</code>: delitelj.</li>      </ul>


## Examples

### Example #1 
Poiščite ostanek deljenja števila 5 s številom 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
