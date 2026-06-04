---
title: Number.Round
---

# Number.Round


Vráti zaokrúhlené číslo. Možno zadať počet číslic aj spôsob zaokrúhlenia.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Vráti výsledok zaokrúhlenia `number` na najbližšie číslo. Ak `number` má hodnotu null, `Number. Round` vráti hodnotu null.  
  
Predvolene sa `number` zaokrúhli na najbližšie celé číslo a prepojenia sa zaokrúhlia na najbližšie párne číslo (použitím `RoundingMode.ToEven`, známeho tiež ako „bankárske zaokrúhlenie“).  
  
Tieto predvolené hodnoty však možno prepísať pomocou nasledujúcich voliteľných parametrov.

-   `digits`: spôsobí, že `number` sa zaokrúhli na zadaný počet desatinných miest.
-   `roundingMode`: Prepíše predvolené riešenie zhôd, keď sa `number` nachádza v strede medzi dvomi potenciálnymi zaokrúhlenými hodnotami. (pozrite `RoundingMode.Type` , kde nájdete možné hodnoty).


## Examples

### Example #1
Zaokrúhlite číslo 1,234 na najbližšie celé číslo.
```powerquery
Number.Round(1.234)
```

Result: 
```powerquery
1
```


### Example #2
Zaokrúhlite číslo 1,56 na najbližšie celé číslo.
```powerquery
Number.Round(1.56)
```

Result: 
```powerquery
2
```


### Example #3
Zaokrúhlite číslo 1,2345 na dve desatinné miesta.
```powerquery
Number.Round(1.2345, 2)
```

Result: 
```powerquery
1.23
```


### Example #4
Zaokrúhlite číslo 1,2345 na tri desatinné miesta (zaokrúhlenie nahor).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Up)
```

Result: 
```powerquery
1.235
```


### Example #5
Zaokrúhlite číslo 1,2345 na tri desatinné miesta (zaokrúhlenie nadol).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Down)
```

Result: 
```powerquery
1.234
```




## Category
Number.Rounding
