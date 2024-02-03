---
title: Number.Round
---

# Number.Round


## Description

Returnează numărul rotunjit. Numărul de cifre şi modul de rotunjire pot fi specificate.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Returnează rezultatul rotunjirii <code>number</code> la cel mai apropiat număr. Dacă <code>number</code> este nul, <code>Number.Round</code> returnează null.<br />      <br />      În mod implicit, <code>number</code> este rotunjit până la cel mai apropiat întreg, iar legăturile sunt întrerupte prin rotunjire la cel mai apropiat număr par (utilizând <code>RoundingMode.ToEven</code> numit și „rotunjire prin ant”).<br />      <br />      Cu toate acestea, aceste valori implicite pot fi înlocuite prin următorii parametri opționali.       <ul>        <li><code>digits</code>: determină ca <code>number</code> să fie rotunjit la numărul specificat de cifre zecimale.</li>        <li><code>roundingMode</code>: înlocuiește comportamentul implicit de separare atunci <code>number</code> este la punctul median dintre două valori rotunjite potențiale      (consultați <code>RoundingMode.Type</code> pentru valori posibile).</li>      </ul>


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
