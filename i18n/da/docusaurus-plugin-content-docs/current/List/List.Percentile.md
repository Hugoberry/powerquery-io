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

Returnerer en eller flere eksempelfraktiler for listen <code>list</code>. Hvis værdien <code>percentiles</code> er et tal mellem 0,0 og 1,0, behandles det som en fraktil, og resultatet bliver    en enkelt værdi, der svarer til sandsynligheden. Hvis værdien <code>percentiles</code> er en liste med tal med værdier mellem 0,0 og 1,0, vil resultatet være en liste over percentiler    svarende til inputsandsynligheden. Indstillingen PercentileMode i <code>options</code> kan bruges af erfarne brugere til at vælge en mere specifik interpolationsmetode, men det anbefales ikke til de fleste formål.    De foruddefinerede symboler <code>PercentileMode.ExcelInc</code> og <code>PercentileMode.ExcelExc</code> passer til de interpolationsmetoder, der bruges af Excel-funktionerne    <code>PERCENTILE.INC</code> og <code>PERCENTILE.EXC</code>. Standardfunktionsmåden svarer til <code>PercentileMode.ExcelInc</code>. Symbolerne    <code>PercentileMode.SqlCont</code> og <code>PercentileMode.SqlDisc</code> stemmer overens med SQL Server-adfærden for henholdsvis <code>PERCENTILE_CONT</code> og    <code>PERCENTILE_DISC</code>.  


## Examples

### Example #1 
Find den første kvartil på listen &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2 
Find listens kvartiler &lt;code&gt; \{5, 3, 1, 7, 9} &lt;/code&gt; ved hjælp af en interpolationsmetode, der matcher Excels &lt;code&gt;PERCENTILE.EXC&lt;/code&gt;.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
