---
title: Number.Round
---

# Number.Round


Returnează numărul rotunjit. Numărul de cifre şi modul de rotunjire pot fi specificate.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Returnează rezultatul rotunjirii `number` la cel mai apropiat număr. Dacă `number` este nul, `Number.Round` returnează null.  
  
În mod implicit, `number` este rotunjit până la cel mai apropiat întreg, iar legăturile sunt întrerupte prin rotunjire la cel mai apropiat număr par (utilizând `RoundingMode.ToEven` numit și „rotunjire prin ant”).  
  
Cu toate acestea, aceste valori implicite pot fi înlocuite prin următorii parametri opționali.

-   `digits`: determină ca `number` să fie rotunjit la numărul specificat de cifre zecimale.
-   `roundingMode`: înlocuiește comportamentul implicit de separare atunci `number` este la punctul median dintre două valori rotunjite potențiale (consultați `RoundingMode.Type` pentru valori posibile).


## Examples

### Example #1
Rotunjiţi 1,234 la cel mai apropiat număr întreg.
```powerquery
Number.Round(1.234)
```

Result: 
```powerquery
1
```


### Example #2
Rotunjiţi 1,56 la cel mai apropiat număr întreg.
```powerquery
Number.Round(1.56)
```

Result: 
```powerquery
2
```


### Example #3
Rotunjiţi 1,2345 la două zecimale.
```powerquery
Number.Round(1.2345, 2)
```

Result: 
```powerquery
1.23
```


### Example #4
Rotunjiţi 1,2345 la trei zecimale (rotunjire prin adaos).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Up)
```

Result: 
```powerquery
1.235
```


### Example #5
Rotunjiţi 1,2345 la trei zecimale (rotunjire prin lipsă).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Down)
```

Result: 
```powerquery
1.234
```




## Category
Number.Rounding
