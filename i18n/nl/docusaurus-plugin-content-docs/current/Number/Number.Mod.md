---
title: Number.Mod
---

# Number.Mod


## Description

Geheel getal deelt twee getallen en retourneert de rest.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Details

Hiermee wordt de rest van de deling van het gehele getal van <code>number</code> door <code>divisor</code> geretourneerd.  Als <code>number</code> of <code>divisor</code> null is, retourneert <code> Number.Mod</code> null. <ul>  <li> <code>number</code>: het deeltal.</li>  <li> <code>divisor</code>: de deler.</li>  </ul>


## Examples

### Example #1 
De rest zoeken wanneer u 5 door 3 deelt.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
