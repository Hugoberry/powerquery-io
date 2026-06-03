---
title: List.Percentile
---

# List.Percentile


Devuelve uno o más percentiles de muestra correspondientes a las probabilidades especificadas.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Remarks

Devuelve uno o más percentiles de muestra de la lista `list`. Si el valor `percentiles` es un número entre 0,0 y 1,0, se tratará como un percentil y el resultado será un valor único correspondiente a esa probabilidad. Si el valor `percentiles` es una lista de números con valores entre 0,0 y 1,0, el resultado será una lista de percentiles correspondiente a la probabilidad de entrada.  
  
Los usuarios avanzados pueden usar la opción PercentileMode en `options` para elegir un método de interpolación más específico, pero no se recomienda para la mayoría de los usos. Los símbolos predefinidos `PercentileMode.ExcelInc` y `PercentileMode.ExcelExc` coinciden con los métodos de interpolación usados por las funciones de Excel `PERCENTILE. INC` y `PERCENTILE. EXC`. El comportamiento predeterminado coincide con `PercentileMode.ExcelInc`. Los símbolos `PercentileMode.SqlCont` y `PercentileMode.SqlDisc` coinciden con el comportamiento SQL Server de `PERCENTILE_CONT` y `PERCENTILE_DISC`, respectivamente.


## Examples

### Example #1
Encuentre el primer cuartil de la lista `{5, 3, 1, 7, 9}`.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2
Encuentre los cuartiles de la lista `{5, 3, 1, 7, 9}` usando un método de interpolación que coincida con `PERCENTILE.EXC` de Excel.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
