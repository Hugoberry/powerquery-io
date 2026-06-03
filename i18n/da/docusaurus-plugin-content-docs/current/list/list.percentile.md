---
title: List.Percentile
---

# List.Percentile


Returnerer en eller flere eksempelpercentiler, der svarer til de angivne sandsynligheder.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Remarks

Returnerer en eller flere eksempelfraktiler for listen `list`. Hvis værdien `percentiles` er et tal mellem 0,0 og 1,0, behandles det som en fraktil, og resultatet bliver en enkelt værdi, der svarer til sandsynligheden. Hvis værdien `percentiles` er en liste med tal med værdier mellem 0,0 og 1,0, vil resultatet være en liste over percentiler svarende til inputsandsynligheden.  
  
Indstillingen PercentileMode i `options` kan bruges af erfarne brugere til at vælge en mere specifik interpolationsmetode, men det anbefales ikke til de fleste formål. De foruddefinerede symboler `PercentileMode.ExcelInc` og `PercentileMode.ExcelExc` passer til de interpolationsmetoder, der bruges af Excel-funktionerne `PERCENTILE.INC` og `PERCENTILE.EXC`. Standardfunktionsmåden svarer til `PercentileMode.ExcelInc`. Symbolerne `PercentileMode.SqlCont` og `PercentileMode.SqlDisc` stemmer overens med SQL Server-adfærden for henholdsvis `PERCENTILE_CONT` og `PERCENTILE_DISC`.


## Examples

### Example #1
Find den første kvartil på listen `{5, 3, 1, 7, 9}`.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2
Find listens kvartiler `{5, 3, 1, 7, 9}` ved hjælp af en interpolationsmetode, der matcher Excels `PERCENTILE.EXC`.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
