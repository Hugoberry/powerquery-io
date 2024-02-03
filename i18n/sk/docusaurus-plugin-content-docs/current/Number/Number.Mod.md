---
title: Number.Mod
---

# Number.Mod


## Description

Celé číslo vydelí dve čísla a vráti zvyšok.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Details

Vráti zvyšok z delenia celého čísla <code>number</code> číslom <code>divisor</code>.    Ak hodnota <code>number</code> alebo <code>divisor</code> je null, funkcia <code>Number.Mod</code> vráti hodnotu null.      <ul>        <li><code>number</code>: Delenec.</li>        <li><code>divisor</code>: Deliteľ.</li>      </ul>


## Examples

### Example #1 
Nájdite zvyšok delenia čísla 5 číslom 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
