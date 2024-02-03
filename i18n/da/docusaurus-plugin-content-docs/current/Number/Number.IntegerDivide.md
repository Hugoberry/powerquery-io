---
title: Number.IntegerDivide
---

# Number.IntegerDivide


## Description

Dividerer to tal og returnerer heltalsdelen af resultatet.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Details

Returnerer heltalsdelen af resultatet efter at have divideret et tal, <code>number1</code>, med et andet tal, <code>number2</code>.    Hvis <code>number1</code> eller <code>number2</code> er null, returnerer <code>Number.IntegerDivide</code> null.      <ul>        <li><code>number1</code>: Dividenden.</li>        <li><code>number2</code>: Divisoren.</li>      </ul>


## Examples

### Example #1 
Divider 6 med 4.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2 
Divider 8,3 med 3.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
