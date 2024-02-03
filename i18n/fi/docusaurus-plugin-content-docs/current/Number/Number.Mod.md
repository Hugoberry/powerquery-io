---
title: Number.Mod
---

# Number.Mod


## Description

Kokonaisluku jakaa kaksi lukua ja palauttaa jakojäännöksen.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Details

Palauttaa luvun <code>number</code> luvulla <code>divisor</code> kokonaisluvulla jakamisen jakojäännöksen.    Jos <code>number</code> tai <code>divisor</code> on tyhjäarvo, <code>Number.Mod</code> palauttaa tyhjäarvon.      <ul>        <li><code>number</code>: jaettava.</li>        <li><code>divisor</code>: jakaja.</li>      </ul>


## Examples

### Example #1 
Selvitä jakojäännös, kun luku 5 jaetaan luvulla 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
