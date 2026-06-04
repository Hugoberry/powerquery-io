---
title: Duration.ToText
---

# Duration.ToText


Pateikiamas formos „d.h:m:s“ tekstas.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

Pateikiama nurodytos trukmės tekstinė day.hour:mins:sec formos pateiktis `duration`.

-   `duration`: `duration`, kurios tekstinė pateiktis apskaičiuojama.
-   `format`: *(pasirenkama)* nerekomenduojama, jei reikšmė yra ne Null, bus parodyta klaida.


## Examples

### Example #1
Konvertuokite `#duration(2, 5, 55, 20)` į teksto reikšmę.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
