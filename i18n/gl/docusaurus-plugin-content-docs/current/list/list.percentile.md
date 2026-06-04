---
title: List.Percentile
---

# List.Percentile


Devolve un ou máis exemplos de percentís correspondentes ás probabilidades indicadas.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Remarks

Devolve un ou máis percentiles de mostra da lista `list` . Se o valor `percentiles` é un número entre 0,0 e 1,0, tratarase como un percentil e o resultado será un único valor correspondente a esa probabilidade. Se o valor `percentiles` é unha lista de números con valores entre 0,0 e 1,0, o resultado será unha lista de percentiles correspondentes á probabilidade de entrada.  
  
A opción PercentileMode en `options` pode ser usada por usuarios avanzados para escoller un método de interpolación máis específico, pero non se recomenda para a maioría dos usos. Os símbolos predefinidos `PercentileMode.ExcelInc` e `PercentileMode.ExcelExc` coinciden cos métodos de interpolación usados polas funcións de Excel `PERCENTILE.INC` e `PERCENTILE.EXC`. O comportamento predeterminado coincide con `PercentileMode.ExcelInc`. Os símbolos `PercentileMode.SqlCont` e `PercentileMode.SqlDisc` coinciden co comportamento de SQL Server para `PERCENTILE_CONT` e `PERCENTILE_DISC`, respectivamente.


## Examples

### Example #1
Busque o primeiro cuartil da lista `{5, 3, 1, 7, 9}`.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2
Busque os cuartís da lista `{5, 3, 1, 7, 9}` mediante un método de interpolación que coincida co `PERCENTILE.EXC` de Excel.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
