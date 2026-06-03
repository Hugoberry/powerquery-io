---
title: Number.Round
---

# Number.Round


Returnerer det afrundede tal. Antallet af cifre og afrundingstilstand kan angives.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Returnerer resultatet af afrunding `number` til det nærmeste tal. Hvis `number` er null, `Number.Round` returnerer null.  
  
Som standard afrundes `number` til det nærmeste heltal, og bindinger brydes ved at afrunde til det nærmeste lige tal (ved hjælp af `RoundingMode.ToEven`, også kendt som "bankers afrunding").  
  
Disse standarder kan dog tilsidesættes via følgende valgfrie parametre.

-   `digits`: Medfører, at `number` afrundes til det angivne antal decimaler.
-   `roundingMode`: Tilsidesætter standardbrydningsadfærden, når `number` er midtpunktet mellem to potentielle afrundede værdier (se `RoundingMode.Type` for mulige værdier).


## Examples

### Example #1
Afrunder 1,234 til det nærmeste heltal.
```powerquery
Number.Round(1.234)
```

Result: 
```powerquery
1
```


### Example #2
Afrunder 1,56 til det nærmeste heltal.
```powerquery
Number.Round(1.56)
```

Result: 
```powerquery
2
```


### Example #3
Afrund 1,2345 til to decimaler.
```powerquery
Number.Round(1.2345, 2)
```

Result: 
```powerquery
1.23
```


### Example #4
Afrund 1,2345 til tre decimaler (rund op).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Up)
```

Result: 
```powerquery
1.235
```


### Example #5
Afrund 1,2345 til tre decimaler (rund ned).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Down)
```

Result: 
```powerquery
1.234
```




## Category
Number.Rounding
