---
title: Number.IntegerDivide
---

# Number.IntegerDivide


## Description

Padalijami du skaičiai ir pateikiama sveikoji rezultato dalis.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Details

Pateikiama sveikoji dalis rezultato, gauto padalijus skaičių, <code>number1</code>, iš kito skaičiaus, <code>number2</code>.    Jei <code>number1</code> arba <code>number2</code> neapibrėžta, <code>Number.IntegerDivide</code> pateikia neapibrėžtą reikšmę.      <ul>        <li><code>number1</code>: dalinys.</li>        <li><code>number2</code>: daliklis.</li>      </ul>


## Examples

### Example #1 
Padalykite 6 iš 4.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2 
Padalykite 8,3 iš 3.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
