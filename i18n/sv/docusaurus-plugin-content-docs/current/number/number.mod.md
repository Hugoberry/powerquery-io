---
title: Number.Mod
---

# Number.Mod


En heltalsdivision dividerar två tal och returnerar resten.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Returnerar resten från heltalsdivisionen av <code>number</code> med <code>divisor</code>.    Om <code>number</code> eller <code>divisor</code> är null returnerar <code>Number.Mod</code> null.      <ul>        <li><code>number</code>: Täljaren.</li>        <li><code>divisor</code>: Nämnaren.</li>      </ul>


## Examples

### Example #1 
Hitta resten när 5 divideras med 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
