---
title: Number.IntegerDivide
---

# Number.IntegerDivide


## Description

Tiek atgriezta divu skaitļu dalījuma veselā skaitļa daļa.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Details

Atgriež skaitļu <code>number1</code> un <code>number2</code> dalījuma veselā skaitļa daļu.    Ja <code>number1</code> vai <code>number2</code> vērtība ir Null, funkcija <code>Number.IntegerDivide</code> atgriež vērtību Null.      <ul>        <li><code>number1</code>: dalāmais.</li>        <li><code>number2</code>: dalītājs.</li>      </ul>


## Examples

### Example #1 
Daliet 6 ar 4.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2 
Daliet 8,3 ar 3.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
