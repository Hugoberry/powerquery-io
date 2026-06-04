---
title: List.Percentile
---

# List.Percentile


Returnează una sau mai multe percentile eșantion care corespund probabilităților date.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Remarks

Returnează una sau mai multe percentile eșantion din lista `list`. Dacă valoarea `percentiles` este un număr între 0,0 și 1,0, va fi tratată ca percentilă, iar rezultatul va fi o singură valoare care corespunde acestei probabilități. Dacă valoarea `percentiles` este o listă de numere cu valori între 0,0 și 1,0, rezultatul va fi o listă de percentile care corespund probabilității de intrare.  
  
Opțiunea PercentileMode din `options` poate fi utilizată de utilizatori avansați pentru a alege o metodă de interpolare mai specifică, dar nu este recomandată pentru majoritatea utilizărilor. Simbolurile predefinite `PercentileMode.ExcelInc` și `PercentileMode.ExcelExc` se potrivesc cu metodele de interpolare utilizate de funcțiile Excel `PERCENTILE.INC` și `PERCENTILE.EXC`. Comportamentul implicit se potrivește cu `PercentileMode.ExcelInc`. Simbolurile `PercentileMode.SqlCont` și `PercentileMode.SqlDisc` corespund comportamentului SQL Server pentru `PERCENTILE_CONT` și, respectiv, `PERCENTILE_DISC`.


## Examples

### Example #1
Găsiți prima cuartilă din lista `{5, 3, 1, 7, 9}`.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2
Găsiți cuartilele listei `{5, 3, 1, 7, 9}` utilizând o metodă de interpolare care se potrivește cu `PERCENTILE.EXC` din Excel.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
