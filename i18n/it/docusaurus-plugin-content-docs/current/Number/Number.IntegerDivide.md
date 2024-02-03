---
title: Number.IntegerDivide
---

# Number.IntegerDivide


## Description

Divide due numeri e restituisce la parte intera del risultato.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Details

Restituisce la parte intera del risultato della divisione di un numero, <code>number1</code>, per un altro numero, <code>number2</code>.    Se <code>number1</code> o <code>number2</code> è Null, <code>Number.IntegerDivide</code> restituisce Null.      <ul>        <li><code>number1</code>: dividendo.</li>        <li><code>number2</code>: divisore.</li>      </ul>


## Examples

### Example #1 
Dividere 6 per 4.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2 
Dividere 8.3 per 3.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
