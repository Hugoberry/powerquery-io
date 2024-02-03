---
title: List.Percentile
---

# List.Percentile


## Description

Zwraca co najmniej jeden percentyl próbki odpowiadający podanym prawdopodobieństwom.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Details

Zwraca co najmniej jeden percentyl próbki listy <code>list</code>. Jeśli wartość <code>percentiles</code> jest liczbą z zakresu od 0,0 do 1,0, będzie ona traktowana jako percentyl, a wynik będzie    pojedynczą wartością odpowiadającą temu prawdopodobieństwu. Jeśli wartość <code>percentiles</code> jest listą liczb z wartościami z zakresu od 0,0 do 1,0, wynik będzie listą percentyli    odpowiadających prawdopodobieństwu wejściowemu. Opcja PercentileMode w elemencie <code>options</code> może być używana przez zaawansowanych użytkowników do wybierania bardziej konkretnej metody interpolacji, ale nie jest zalecana w przypadku większości zastosowań.    Wstępnie zdefiniowane symbole <code>PercentileMode.ExcelInc</code> i <code>PercentileMode.ExcelExc</code> są zgodne z metodami interpolacji używanymi przez funkcje programu Excel    <code>PERCENTYL.PRZEDZ.ZAMK</code> i <code>PERCENTYL.PRZEDZ.OTW</code>. Zachowanie domyślne odpowiada użyciu symbolu <code>PercentileMode.ExcelInc</code>. Symbole    <code>PercentileMode.SqlCont</code> i <code>PercentileMode.SqlDisc</code> są zgodne z zachowaniem programu SQL Server w przypadku użycia instrukcji, odpowiednio, <code>PERCENTILE_CONT</code>    i <code>PERCENTILE_DISC</code>.  


## Examples

### Example #1 
Znajdź pierwszy kwartyl na liście &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2 
Znajdź kwartyle na liście &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt; przy użyciu metody interpolacji zgodnej z funkcją &lt;code&gt;PERCENTYL.PRZEDZ.OTW&lt;/code&gt; programu Excel.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
