---
title: List.Percentile
---

# List.Percentile


Vrne enega ali več vzorčnih percentilov, ki ustrezajo navedenim verjetnostnim.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Remarks

Vrne enega ali več vzorčnih percentilov seznama `list`. Če je vrednost `percentiles` številka med 0,0 in 1,0, bo obravnavana kot percentil, zato bo rezultat enojna vrednost, ki ustreza tej verjetnosti. Če je vrednost `percentiles` seznam številk z vrednostmi med 0,0 in 1,0, bo rezultat seznam percentilov, ki ustreza verjetnosti vnosa.  
  
Izkušeni uporabniki lahko uporabijo možnost"PercentileMode"v `options`, da izberejo dolj določen način interpolacije, vendar ta možnost ni priporočena za večino uporabnikov. Vnaprej določena simbola `PercentileMode.ExcelInc` in `PercentileMode.ExcelExc` sta enaka kot načini interpolacije, ki jih uporabljata Excelovi funkciji `PERCENTILE.INC` in `PERCENTILE.EXC`. Privzeti način delovanja je enak kot pri `PercentileMode.ExcelInc`. Simboli `PercentileMode.SqlCont` in `PercentileMode.SqlDisc` sta enaka delovanju v strežniku SQL Server za `PERCENTILE_CONT` in `PERCENTILE_DISC`.


## Examples

### Example #1
Poiščite prvi kvartil seznama `{5, 3, 1, 7, 9}`.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2
Poiščite kvartile seznama `{5, 3, 1, 7, 9}` z uporabo načina interpolacije, ki se ujema z Excelovo funkcijo `PERCENTILE.EXC`.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
