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

Returnerar en eller flera exempelpercentiler i listan <code>list</code>. Om värdet <code>percentiles</code> är ett tal mellan 0,0 och 1,0 betraktas det som en percentil och resultatet blir    ett enstaka värde som motsvarar den sannolikheten. Om värdet <code>percentiles</code> är en lista över tal med värden mellan 0,0 och 1,0 blir resultatet en lista över percentiler    som motsvarar den angivna sannolikheten. Avancerade användare kan använda alternativet PercentileMode i <code>options</code> för att välja en mer specifik interpoleringsmetod, men detta rekommenderas i de flesta fall inte.    Fördefinierade symboler <code>PercentileMode.ExcelInc</code> och <code>PercentileMode.ExcelExc</code> matchar de interpoleringsmetoder som används av Excel-funktionerna    <code>PERCENTIL.INK</code> och <code>PERCENTIL.EXK</code>. Standardfunktionssättet matchar <code>PercentileMode.ExcelInc</code>. Symbolerna    <code>PercentileMode.SqlCont</code> och <code>PercentileMode.SqlDisc</code> matchar SQL Server-funktionssättet för <code>PERCENTILE_CONT</code> respektive    <code>PERCENTILE_DISC</code>.  


## Examples

### Example #1 
Hitta den första kvartilen i listan &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2 
Hitta kvartilerna i listan &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt; med en interpoleringsmetod som matchar Excels &lt;code&gt;PERCENTIL.EXK&lt;/code&gt;.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
