---
title: Number.Mod
---

# Number.Mod


L&#39;entier divise deux nombres et retourne le reste.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Retourne le reste résultant de la division entière de <code>number</code> par <code>divisor</code>.    Si <code>number</code> ou <code>divisor</code> ont la valeur null, <code>Number.Mod</code> retourne null.      <ul>        <li><code>number</code> : dividende.</li>        <li><code>divisor</code> : diviseur.</li>      </ul>


## Examples

### Example #1 
Recherche le reste lorsque vous divisez 5 par 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
