---
title: Number.Round
---

# Number.Round


Devuelve el número redondeado. Se puede especificar el número de dígitos y el modo de redondeo.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Aporta el resultado de redondear `number` al número más próximo. Si `number` es nulo, `Number.Round` resultará nulo.  
  
De manera predeterminada, `number` se redondea al número entero más próximo y los empates se desharán redondeando al número par más próximo (mediante `RoundingMode.ToEven`, o «redondeo bancario» ).  
  
Sin embargo, estos valores predeterminados se pueden anular a través de los siguientes parámetros opcionales.

-   `digits`: Redondea `number` al número especificado de dígitos decimales.
-   `roundingMode`: Anula el desempate predeterminado cuando `number` se encuentra en el punto medio entre dos posibles valores redondeados (visite `RoundingMode.Type` para ver posibles valores).


## Examples

### Example #1
Redondear 1,234 al entero más próximo.
```powerquery
Number.Round(1.234)
```

Result: 
```powerquery
1
```


### Example #2
Redondear 1,56 al entero más próximo.
```powerquery
Number.Round(1.56)
```

Result: 
```powerquery
2
```


### Example #3
Redondear 1,2345 con dos posiciones decimales.
```powerquery
Number.Round(1.2345, 2)
```

Result: 
```powerquery
1.23
```


### Example #4
Redondear 1,2345 con tres posiciones decimales (redondear hacia arriba).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Up)
```

Result: 
```powerquery
1.235
```


### Example #5
Redondear 1,2345 con tres posiciones decimales (redondear hacia abajo).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Down)
```

Result: 
```powerquery
1.234
```




## Category
Number.Rounding
