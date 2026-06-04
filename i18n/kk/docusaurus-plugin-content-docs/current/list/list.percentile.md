---
title: List.Percentile
---

# List.Percentile


Берілген ықтималдықтарға сәйкес келетін бір немесе бірнеше үлгі процентильді қайтарады.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Remarks

`list` тізімінің бір немесе бірнеше үлгі процентилін қайтарады. Егер `percentiles` мәні 0,0 және 1,0 арасындағы сан болса, ол процентиль ретінде қарастырылады және нәтиже сол ықтималдыққа сәйкес келетін жалғыз мән болады. Егер `percentiles` мәні 0,0 және 1,0 арасындағы сандар тізімі болса, нәтиже кіріс ықтималдығына сәйкес келетін процентильдер тізімі болады.  
  
`options`PercentileMode параметрін тәжірибелі пайдаланушылар нақтырақ интерполяция әдісін таңдау үшін пайдалана алады, бірақ ол жалпы пайдалану үшін ұсынылмаған. `PercentileMode.ExcelInc` және `PercentileMode.ExcelExc` алдын ала анықталған символдары Excel функциялары пайдаланатын интерполяция әдістеріне сәйкес келеді. `PERCENTILE.INC` және `PERCENTILE.EXC`. Әдепкі жұмыс режимі `PercentileMode.ExcelInc` үшін сәйкес. Бұл символдар `PercentileMode.SqlCont` және `PercentileMode.SqlDisc` сәйкес келеді `PERCENTILE_CONT` және `PERCENTILE_DISC` үшін SQL Server жұмыс режиміне сәйкес келеді.


## Examples

### Example #1
`{5, 3, 1, 7, 9}` тізімінің бірінші квартилін табыңыз.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2
Excel `PERCENTILE.EXC` үшін сәйкес келетін интерполяция әдісін пайдалану арқылы `{5, 3, 1, 7, 9}` тізімінің квартильдерін табыңыз.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
