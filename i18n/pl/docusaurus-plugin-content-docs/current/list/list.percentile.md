---
title: List.Percentile
---

# List.Percentile


Zwraca co najmniej jeden percentyl próbki odpowiadający podanym prawdopodobieństwom.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Remarks

Zwraca co najmniej jeden percentyl próbki listy `list`. Jeśli wartość `percentiles` jest liczbą z zakresu od 0,0 do 1,0, będzie ona traktowana jako percentyl, a wynik będzie pojedynczą wartością odpowiadającą temu prawdopodobieństwu. Jeśli wartość `percentiles` jest listą liczb z wartościami z zakresu od 0,0 do 1,0, wynik będzie listą percentyli odpowiadających prawdopodobieństwu wejściowemu..  
  
Opcja PercentileMode w elemencie `options` może być używana przez zaawansowanych użytkowników do wybierania bardziej konkretnej metody interpolacji, ale nie jest zalecana w przypadku większości zastosowań. Wstępnie zdefiniowane symbole `PercentileMode.ExcelInc` i `PercentileMode.ExcelExc` są zgodne z metodami interpolacji używanymi przez funkcje programu Excel `PERCENTILE.INC` and `PERCENTILE.EXC`. Zachowanie domyślne odpowiada użyciu symbolu `PercentileMode.ExcelInc`. Symbole `PercentileMode.SqlCont` i `PercentileMode.SqlDisc` są zgodne z zachowaniem programu SQL Server w przypadku użycia instrukcji, odpowiednio, `PERCENTILE_CONT` `PERCENTILE_DISC`.


## Examples

### Example #1
Znajdź pierwszy kwartyl na liście `{5, 3, 1, 7, 9}`.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2
Znajdź kwartyle na liście `{5, 3, 1, 7, 9}` przy użyciu metody interpolacji zgodnej z funkcją `PERCENTYL.PRZEDZ.OTW` programu Excel.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
