---
title: Number.IntegerDivide
---

# Number.IntegerDivide


## Description

Vydelí dve čísla a vráti celočíselnú časť výsledku.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Details

Vráti celočíselnú časť výsledku z delenia čísla <code>number1</code> iným číslom <code>number2</code>.    Ak hodnota <code>number1</code> alebo <code>number2</code> je null, funkcia <code>Number.IntegerDivide</code> vráti hodnotu null.      <ul>        <li><code>number1</code>: Delenec.</li>        <li><code>number2</code>: Deliteľ.</li>      </ul>


## Examples

### Example #1 
Vydeľte číslo 6 číslom 4.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2 
Vydeľte číslo 8,3 číslom 3.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
