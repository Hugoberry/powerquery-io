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

Gibt den ganzzahligen Teil des Ergebnisses der Division einer Zahl (<code>number1</code>) durch eine andere Zahl (<code>number2</code>) zurück.    Ist <code>number1</code> oder <code>number2</code> NULL, gibt <code>Number.IntegerDivide</code> NULL zurück.      <ul>        <li><code>number1</code>: Der Dividend.</li>        <li><code>number2</code>: Der Divisor.</li>      </ul>


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
