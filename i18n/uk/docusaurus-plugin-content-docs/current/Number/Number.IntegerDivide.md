---
title: Number.IntegerDivide
---

# Number.IntegerDivide


## Description

Ділить два числа та повертає цілу частку результату.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Details

Повертає цілу частку результату ділення числа <code>number1</code> на інше число <code>number2</code>.    Якщо <code>number1</code> або <code>number2</code> має Null-значення, функція <code>Number.IntegerDivide</code> повертає Null-значення.      <ul>        <li><code>number1</code>: ділене.</li>        <li><code>number2</code>: дільник.</li>      </ul>


## Examples

### Example #1 
Поділити 6 на 4.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2 
Поділити 8,3 на 3.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
