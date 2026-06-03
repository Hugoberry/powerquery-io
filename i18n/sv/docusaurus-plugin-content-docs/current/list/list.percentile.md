---
title: List.Percentile
---

# List.Percentile


Returnerar en eller flera percentiler som motsvarar de givna sannolikheterna.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Remarks

Returnerar en eller flera exempelpercentiler i listan `list`. Om värdet `percentiles` är ett tal mellan 0,0 och 1,0 betraktas det som en percentil och resultatet blir ett enstaka värde som motsvarar den sannolikheten. Om värdet `percentiles` är en lista över tal med värden mellan 0,0 och 1,0 blir resultatet en lista över percentiler som motsvarar den angivna sannolikheten.  
  
Avancerade användare kan använda alternativet PercentileMode i `options` för att välja en mer specifik interpoleringsmetod, men detta rekommenderas i de flesta fall inte. Fördefinierade symboler `PercentileMode.ExcelInc` och `PercentileMode.ExcelExc` matchar de interpoleringsmetoder som används av Excel-funktionerna `PERCENTIL.INK` och `PERCENTIL.EXK`. Standardfunktionssättet matchar `PercentileMode.ExcelInc`. Symbolerna `PercentileMode.SqlCont` och `PercentileMode.SqlDisc` matchar SQL Server-funktionssättet för `PERCENTILE_CONT` respektive `PERCENTILE_DISC`.


## Examples

### Example #1
Hitta den första kvartilen i listan `{5, 3, 1, 7, 9}`.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2
Hitta kvartilerna i listan `{5, 3, 1, 7, 9}` med en interpoleringsmetod som matchar Excels `PERCENTIL.EXK`.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
