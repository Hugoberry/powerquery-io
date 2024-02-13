---
title: Number.IntegerDivide
---

# Number.IntegerDivide


Deelt twee getallen en retourneert het gehele getal van de uitkomst als resultaat.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Hiermee wordt het deel met het gehele getal geretourneerd van het resultaat van het delen van een getal, <code>number1</code>, door een ander getal, <code>number2</code>. Als <code>number1</code> of <code>number2</code> null zijn, retourneert <code>Number.IntegerDivide</code> null. <ul> <li><code>number1</code>: de noemer.</li> <li><code>number2</code>: de deler.</li> </ul>


## Examples

### Example #1 
6 door 4 delen.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2 
8,3 door 3 delen.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
