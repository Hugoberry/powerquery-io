---
title: Number.Round
---

# Number.Round


Retourneert het afgeronde getal. Het aantal cijfers en de afrondingsmodus kunnen worden opgegeven.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Hiermee wordt het resultaat geretourneerd voor de afronding van `number` op het dichtstbijzijnde getal. Als `number` null is, wordt met `Number.Round` null geretourneerd.  
  
Standaard wordt `number` afgerond op het dichtstbijzijnde gehele getal en worden tiebreaks afgerond op het dichtstbijzijnde even getal (met behulp van `RoundingMode.ToEven`, ook wel 'bankiersafronding' genoemd).  
  
U kunt deze standaardwaarden echter overschrijven via de volgende optionele parameters.

-   `digits`: hiermee wordt `number` afgerond op het opgegeven aantal decimale cijfers.
-   `roundingMode`: hiermee wordt het standaardgedrag bij een tiebreak overschreven als `number` in het midden tussen twee mogelijke afgeronde waarden staat (raadpleeg `RoundingMode.Type` voor mogelijke waarden).


## Examples

### Example #1
Het getal 1,234 afronden op het dichtstbijzijnde gehele getal.
```powerquery
Number.Round(1.234)
```

Result: 
```powerquery
1
```


### Example #2
Het getal 1,56 afronden op het dichtstbijzijnde gehele getal.
```powerquery
Number.Round(1.56)
```

Result: 
```powerquery
2
```


### Example #3
Het getal 1,2345 afronden op twee decimalen.
```powerquery
Number.Round(1.2345, 2)
```

Result: 
```powerquery
1.23
```


### Example #4
Het getal 1,2345 afronden op drie decimalen (naar boven afronden).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Up)
```

Result: 
```powerquery
1.235
```


### Example #5
Het getal 1,2345 afronden op drie decimalen (naar beneden afronden).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Down)
```

Result: 
```powerquery
1.234
```




## Category
Number.Rounding
