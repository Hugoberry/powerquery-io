---
title: Number.IntegerDivide
---

# Number.IntegerDivide


## Description

Jakaa kaksi lukua ja palauttaa tuloksen kokonaislukuosan.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Details

Palauttaa luvun <code>number1</code> toisella luvulla <code>number2</code> jakamisen tuloksen kokonaislukuosan.    Jos <code>number1</code> tai <code>number2</code> on tyhjäarvo, <code>Number.IntegerDivide</code> palauttaa tyhjäarvon.      <ul>        <li><code>number1</code>: jaettava.</li>        <li><code>number2</code>: jakaja.</li>      </ul>


## Examples

### Example #1 
Jaa luku 6 luvulla 4.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2 
Jaa luku 8,3 luvulla 3.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
