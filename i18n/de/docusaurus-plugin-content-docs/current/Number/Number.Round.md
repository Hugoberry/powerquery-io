---
title: Number.Round
---

# Number.Round


## Description

Gibt die gerundete Zahl zurück. Dezimalstellenanzahl und Rundungsmodus können angegeben werden.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Gibt das Ergebnis der Rundung von <code>number</code> auf die nächste Zahl zurück. Wenn <code>number</code> NULL ist, gibt <code>Number.Round</code> NULL zurück.<br />      <br />      Standardmäßig wird <code>number</code> auf die nächste ganze Zahl gerundet, und Gleichstände werden durch Rundung auf die nächste gerade Zahl aufgelöst (unter Verwendung von <code>RoundingMode.ToEven</code>, auch bekannt als „unverzerrte Rundung“).<br />      <br />      Diese Standardwerte können jedoch über die folgenden optionalen Parameter überschrieben werden.       <ul>        <li><code>digits</code>: Bewirkt, dass <code>number</code> auf die angegebene Anzahl von Dezimalstellen gerundet wird.</li>        <li><code>roundingMode</code>: Überschreibt das Standardverhalten zur Auflösung von Gleichständen, wenn sich <code>number</code> in der Mitte zwischen zwei möglichen gerundeten Werten befindet.      (siehe <code>RoundingMode.Type</code> für mögliche Werte).</li>      </ul>


## Examples

### Example #1 
Rundet 1,234 auf die nächste ganze Zahl.
```powerquery
Number.Round(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
Rundet 1,56 auf die nächste ganze Zahl.
```powerquery
Number.Round(1.56)
```

Result: 
```powerquery
2
```


### Example #3 
Rundet 1,2345 auf zwei Dezimalstellen.
```powerquery
Number.Round(1.2345, 2)
```

Result: 
```powerquery
1.23
```


### Example #4 
Rundet 1,2345 auf drei Dezimalstellen (Aufrundung).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Up)
```

Result: 
```powerquery
1.235
```


### Example #5 
Rundet 1,2345 auf drei Dezimalstellen (Abrundung).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Down)
```

Result: 
```powerquery
1.234
```




## Category
Number.Rounding
