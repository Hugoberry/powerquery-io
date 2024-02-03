---
title: Number.IntegerDivide
---

# Number.IntegerDivide


## Description

Két szám hányadosának egész részét adja vissza eredményként.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Details

Egy szám (<code>number1</code>) másik számmal (<code>number2</code>) való osztásából kapott hányados egész szám részét adja vissza eredményként.    Ha a(z) <code>number1</code> vagy a(z) <code>number2</code> érték null, a <code>Number.IntegerDivide</code> függvény nullértéket ad vissza.      <ul>        <li><code>number1</code>: Az osztandó.</li>        <li><code>number2</code>: Az osztó.</li>      </ul>


## Examples

### Example #1 
6 osztása 4-gyel
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2 
8,3 osztása 3-mal
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
