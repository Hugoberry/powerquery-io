---
title: Number.Round
---

# Number.Round


Devolve o número arredondado. O número de díxitos e o modo de arredondamento pódese especificar.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Devolve o resultado de arredondar `number` ao número máis próximo. Se `number` é nulo, `Number.Round` devolve nulo.  
  
Por defecto, `number` arredóndase ao enteiro máis próximo, e os valores equivalentes québranse arredondando ao número par máis próximo (mediante `RoundingMode.ToEven`, tamén coñecido como "arredondamento do banqueiro").  
  
Non obstante, se pode invalidar estes valores predefinidos mediante os seguintes parámetros opcionais.

-   `digits`: causa que `number` se arredondase ao número especificado de díxitos decimais.
-   `roundingMode`: anula o comportamento de valor equivalente predefinido cando `number` é do punto medio entre dous valores potencialmente arredondados (consulte `RoundingMode.Type` para posibles valores).


## Examples

### Example #1
Arredondar 1,234 ao enteiro máis próximo.
```powerquery
Number.Round(1.234)
```

Result: 
```powerquery
1
```


### Example #2
Arredondar 1,56 ao enteiro máis próximo.
```powerquery
Number.Round(1.56)
```

Result: 
```powerquery
2
```


### Example #3
Arredondar 1,2345 a dúas posicións decimais.
```powerquery
Number.Round(1.2345, 2)
```

Result: 
```powerquery
1.23
```


### Example #4
Arredondar 1,2345 a tres posicións decimais (arredondamento para arriba).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Up)
```

Result: 
```powerquery
1.235
```


### Example #5
Arredondar 1,2345 a tres posicións decimais (arredondamento para abaixo).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Down)
```

Result: 
```powerquery
1.234
```




## Category
Number.Rounding
