---
title: List.Percentile
---

# List.Percentile


Retorna un o més percentils de mostra corresponents a les probabilitats especificades.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Remarks

Retorna un o més percentils de mostra de la llista `list`. Si el valor `percentiles` és un número entre 0.0 i 1.0, es considerarà que és un percentil i el resultat serà un valor únic que correspondrà a aquesta probabilitat. Si el valor `percentiles` és una llista de nombres amb valors entre 0.0 i 1.0, el resultat serà una llista de percentils que correspondrà a la probabilitat d'entrada.  
  
Els usuaris avançats poden utilitzar l'opció PercentileMode inclosa a `options` per triar un mètode d'interpolació més específic, però aquesta opció no es recomana per a la majoria d'usos. Els símbols predefinits `PercentileMode.ExcelInc` i `PercentileMode.ExcelExc` coincideixen amb els mètodes d'interpolació que utilitzen les funcions de l'Excel `PERCENTILE.INC` i `PERCENTILE.EXC`. El comportament per defecte coincideix amb `PercentileMode.ExcelInc`. Els símbols `PercentileMode.SqlCont` i `PercentileMode.SqlDisc` coincideixen amb el comportament de l'SQL Server per a `PERCENTILE_CONT` i `PERCENTILE_DISC`, respectivament.


## Examples

### Example #1
Trobeu el primer quartil de la llista `{5, 3, 1, 7, 9}`.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2
Trobeu els quartils de la llista `{5, 3, 1, 7, 9}` amb un mètode d'interpolació que coincideixi amb la funció `PERCENTILE.EXC` de l'Excel.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
