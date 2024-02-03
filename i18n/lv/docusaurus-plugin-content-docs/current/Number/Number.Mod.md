---
title: Number.Mod
---

# Number.Mod


## Description

Tiek atgriezts divu veselu skaitļu dalījuma atlikums.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Details

Atgriež veselu skaitļu <code>number</code> un <code>divisor</code> dalījuma atlikumu.    Ja <code>number</code> vai <code>divisor</code> vērtība ir Null, funkcija <code>Number.Mod</code> atgriež vērtību Null.      <ul>        <li><code>number</code>: dalāmais.</li>        <li><code>divisor</code>: dalītājs.</li>      </ul>


## Examples

### Example #1 
Iegūstiet atlikumu, kas rodas, 5 dalot ar 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
