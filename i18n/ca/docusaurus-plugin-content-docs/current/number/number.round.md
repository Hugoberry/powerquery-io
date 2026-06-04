---
title: Number.Round
---

# Number.Round


Retorna el nombre arrodonit. Es pot especificar el nombre de dígits i el mode d'arrodoniment.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Retorna els resultats de l'arrodoniment de `number` al nombre més proper. Si `number` és nul, `Number.Round` retorna un valor nul.  
  
De manera predeterminada, `number` s'arrodoneix a l'enter més proper, i els vincles es trenquen mitjançant l'arrodoniment al nombre parell més proper (amb `RoundingMode.ToEven`, també conegut com a "arrodoniment bancari").  
  
No obstant això, aquests valors predeterminats es poden substituir mitjançant els paràmetres opcionals que s'indiquen a continuació.

-   `digits`: fa que `number` s'arrodoneixi al número especificat de dígits decimals.
-   `roundingMode`: substitueix el comportament de trencament de vincles predeterminat quan `number` se situa al punt intermedi entre dos valors arrodonits potencials (consulteu `RoundingMode.Type` per veure els valors possibles).


## Examples

### Example #1
Arrodoneix 1,234 a l'enter més proper.
```powerquery
Number.Round(1.234)
```

Result: 
```powerquery
1
```


### Example #2
Arrodoneix 1,56 a l'enter més proper.
```powerquery
Number.Round(1.56)
```

Result: 
```powerquery
2
```


### Example #3
Arrodoneix 1,2345 a dues posicions decimals.
```powerquery
Number.Round(1.2345, 2)
```

Result: 
```powerquery
1.23
```


### Example #4
Arrodoneix 1,2345 a tres posicions decimals (arrodoniment cap amunt).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Up)
```

Result: 
```powerquery
1.235
```


### Example #5
Arrodoneix 1,2345 a tres posicions decimals (arrodoniment cap avall).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Down)
```

Result: 
```powerquery
1.234
```




## Category
Number.Rounding
