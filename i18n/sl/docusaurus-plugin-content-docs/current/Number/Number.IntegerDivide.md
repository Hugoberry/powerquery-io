---
title: Number.IntegerDivide
---

# Number.IntegerDivide


## Description

Deli dve števili in vrne del celega števila rezultata.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Details

Vrne del celega števila rezultata deljenja števila <code>number1</code> s številom <code>number2</code>.    Če ima <code>number1</code> ali <code>number2</code> ničelno vrednost, <code>Number.IntegerDivide</code> vrne "null".      <ul>        <li><code>number1</code>: deljenec.</li>        <li><code>number2</code>: delitelj.</li>      </ul>


## Examples

### Example #1 
Delite število 6 s številom 4.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2 
Delite število 8,3 s številom 3.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
