---
title: Number.Mod
---

# Number.Mod


## Description

Eloszt két számot maradékos osztással, és a maradékot adja vissza.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Details

Visszaadja egy egész szám (<code>number</code>) egy másik számmal (<code>divisor</code>) való maradékos osztásából kapott maradékot.    Ha a(z) <code>number</code> vagy a(z) <code>divisor</code> érték null, a <code>Number.Mod</code> függvény nullértéket ad vissza.      <ul>        <li><code>number</code>: Az osztandó.</li>        <li><code>divisor</code>: Az osztó.</li>      </ul>


## Examples

### Example #1 
A maradék meghatározása az 5 szám 3-mal való osztásakor
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
