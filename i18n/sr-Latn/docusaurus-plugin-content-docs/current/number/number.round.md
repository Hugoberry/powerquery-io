---
title: Number.Round
---

# Number.Round


Vraća zaokruženi broj. Može se navesti broj cifara i način zaokruživanja.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Daje rezultat zaokruživanja `number` na najbliži broj. Ako `number` je bez vrednosti, `Number.Round` vraća rezultat bez vrednosti.  
  
Podrazumevano se `number` zaokružuje na najbliži celi broj, i veze se raskidaju tako što se zaokruže na najbliži paran broj (koristeći `RoundingMode.ToEven`,takođe poznat i kao „banker za zaokruživanje“).  
  
Međutim, ove podrazumevane vrednosti mogu da se zamene pomoću sledećih opcionalnih parametara.

-   `digits`: Uzrokuje `number`da bude zaokružen na navedeni broj decimala.
-   `roundingMode`: Zamenjuje podrazumevano ponašanje preloma veze kada `number` se nalazi u sredini između dve potencijalne zaokružene vrednosti (pogledajte `RoundingMode.Type`za moguće vrednosti).


## Examples

### Example #1
Zaokruživanje broja 1,234 na najbliži ceo broj.
```powerquery
Number.Round(1.234)
```

Result: 
```powerquery
1
```


### Example #2
Zaokruživanje broja 1,56 na najbliži ceo broj.
```powerquery
Number.Round(1.56)
```

Result: 
```powerquery
2
```


### Example #3
Zaokruživanje broja 1,2345 na broj sa dva decimalna mesta.
```powerquery
Number.Round(1.2345, 2)
```

Result: 
```powerquery
1.23
```


### Example #4
Zaokruživanje broja 1,2345 na broj sa tri decimalna mesta (zaokruživanje na veći broj).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Up)
```

Result: 
```powerquery
1.235
```


### Example #5
Zaokruživanje broja 1,2345 na broj sa tri decimalna mesta (zaokruživanje na manji broj).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Down)
```

Result: 
```powerquery
1.234
```




## Category
Number.Rounding
