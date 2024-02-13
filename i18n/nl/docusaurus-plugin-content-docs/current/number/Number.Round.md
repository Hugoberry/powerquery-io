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

Hiermee wordt het resultaat geretourneerd voor de afronding van <code>number</code> op het dichtstbijzijnde getal. Als <code>number</code> null is, wordt met <code>Number.Round</code> null geretourneerd.<br />      <br />      Standaard wordt <code>number</code> afgerond op het dichtstbijzijnde gehele getal en worden tiebreaks afgerond op het dichtstbijzijnde even getal (met behulp van <code>RoundingMode.ToEven</code>, ook wel 'bankiersafronding' genoemd).<br />      <br />      U kunt deze standaardwaarden echter overschrijven via de volgende optionele parameters.      <ul>        <li><code>digits</code>: hiermee wordt <code>number</code> afgerond op het opgegeven aantal decimale cijfers.</li>        <li><code>roundingMode</code>: hiermee wordt het standaardgedrag bij een tiebreak overschreven als <code>number</code> in het midden tussen twee mogelijke afgeronde waarden staat      (raadpleeg <code>RoundingMode.Type</code> voor mogelijke waarden).</li>      </ul>


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
