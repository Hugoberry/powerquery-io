---
title: Number.IntegerDivide
---

# Number.IntegerDivide


## Description

Deli dva broja i vraća deo rezultata koji je ceo broj.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Details

Deli broj, <code>number1</code>, drugim brojem, <code>number2</code>, i vraća deo rezultata koji je ceo broj.    Ako su <code>number1</code> ili <code>number2</code> bez vrednosti, <code>Number.IntegerDivide</code> vraća rezultat bez vrednosti.      <ul>        <li><code>number1</code>: Deljenik.</li>        <li><code>number2</code>: Delilac.</li>      </ul>


## Examples

### Example #1 
Deljenje 6 sa 4.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2 
Deljenje 8,3 sa 3.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
