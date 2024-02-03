---
title: Number.IntegerDivide
---

# Number.IntegerDivide


## Description

Dividerar två tal och returnerar heltalsdelen av resultatet.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Details

Returnerar heltalsdelen av resultatet från divisionen av ett tal, <code>number1</code>, med ett annat tal, <code>number2</code>.    Om <code>number1</code> eller <code>number2</code> är null returnerar <code>Number.IntegerDivide</code> null.      <ul>        <li><code>number1</code>: Täljaren.</li>        <li><code>number2</code>: Nämnaren.</li>      </ul>


## Examples

### Example #1 
Dividera 6 med 4.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2 
Dividera 8,3 med 3.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
