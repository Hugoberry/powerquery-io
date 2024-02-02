---
title: Number.IntegerDivide
---

# Number.IntegerDivide


## Description

Divise deux nombres et retourne la partie d&#39;entier du résultat.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Details

Retourne la partie entière du résultat de la division d'un nombre <code>number1</code> par un autre nombre <code>number2</code>.    Si <code>number1</code> ou <code>number2</code> ont la valeur null, <code>Number.IntegerDivide</code> retourne null.      <ul>        <li><code>number1</code> : dividende.</li>        <li><code>number2</code> : diviseur.</li>      </ul>


## Examples

### Example #1 
Divise 6 par 4.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2 
Divise 8,3 par 3.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
