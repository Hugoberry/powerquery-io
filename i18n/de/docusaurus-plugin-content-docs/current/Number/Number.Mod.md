---
title: Number.Mod
---

# Number.Mod


Eine ganze Zahl dividiert zwei Zahlen und gibt den Restwert zurück.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Gibt den Rest zurück, der sich aus der ganzzahligen Division von <code>number</code> durch <code>divisor</code> ergibt.    Ist <code>number</code> oder <code>divisor</code> NULL, gibt <code>Number.Mod</code> NULL zurück.      <ul>        <li><code>number</code>: Der Dividend.</li>        <li><code>divisor</code>: Der Divisor.</li>      </ul>


## Examples

### Example #1 
Ermittelt den Rest der Division von 5 durch 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
