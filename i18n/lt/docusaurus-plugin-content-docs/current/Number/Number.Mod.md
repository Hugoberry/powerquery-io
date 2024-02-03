---
title: Number.Mod
---

# Number.Mod


## Description

Sveikasis skaičius dalija du skaičius ir pateikia liekaną.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Details

Pateikiama liekana, gauta sveikajam skaičiui padalijus <code>number</code> iš <code>divisor</code>.    Jei <code>number</code> arba <code>divisor</code> neapibrėžta, <code>Number.Mod</code> pateikia neapibrėžtą reikšmę.      <ul>        <li><code>number</code>: dalinys.</li>        <li><code>divisor</code>: daliklis.</li>      </ul>


## Examples

### Example #1 
Raskite liekaną, kai dalijate 5 iš 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
