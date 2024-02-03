---
title: Number.IntegerDivide
---

# Number.IntegerDivide


## Description

Provede dělení dvou čísel a vrátí celočíselnou část výsledku.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Details

Vrátí celočíselnou část výsledku dělení čísla <code>number1</code> číslem <code>number2</code>.    Pokud je hodnota <code>number1</code> nebo <code>number2</code> null, funkce <code>Number.IntegerDivide</code> vrátí hodnotu null.      <ul>        <li><code>number1</code>: Dělenec</li>        <li><code>number2</code>: Dělitel</li>      </ul>


## Examples

### Example #1 
Vydělí číslo 6 číslem 4.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2 
Vydělí číslo 8,3 číslem 3.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
