---
title: Number.IntegerDivide
---

# Number.IntegerDivide


## Description

Divideix dos nombres i retorna la part entera del resultat.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Details

Retorna la part entera del resultat a partir de la divisió d'un nombre, <code>number1</code>, per un altre nombre, <code>number2</code>.    Si <code>number1</code> o <code>number2</code> són nuls, <code>Number.IntegerDivide</code> retorna el valor nul.      <ul>        <li><code>number1</code>: dividend.</li>        <li><code>number2</code>: divisor.</li>      </ul>


## Examples

### Example #1 
Divideix 6 per 4.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2 
Divideix 8,3 per 3.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
