---
title: Number.IntegerDivide
---

# Number.IntegerDivide


Dividiert zwei Zahlen und gibt den ganzzahligen Teil des Ergebnisses zurück.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Gibt den ganzzahligen Teil des Ergebnisses der Division einer Zahl (`number1`) durch eine andere Zahl (`number2`) zurück. Ist `number1` oder `number2` NULL, gibt `Number.IntegerDivide` NULL zurück.

-   `number1`: Der Dividend.
-   `number2`: Der Divisor.


## Examples

### Example #1
Teilt 6 durch 4.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2
Teilt 8,3 durch 3.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
