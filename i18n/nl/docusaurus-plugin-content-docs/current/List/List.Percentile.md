---
title: List.Percentile
---

# List.Percentile


## Description

Hiermee worden een of meer samplepercentielen geretourneerd die overeenkomen met de opgegeven kansen.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Details

Hiermee worden een of meer samplepercentielen van de lijst <code>list</code> geretourneerd. Als de waarde <code>percentiles</code> een getal tussen 0,0 en 1,0 is, wordt de waarde beschouwd als een percentiel en is het resultaat    een enkele waarde die overeenkomt met de betreffende kans. Als de waarden <code>percentiles</code> een lijst met getallen is met waarden tussen 0,0 en 1,0, is het resultaat een lijst met percentielen    die overeenkomen met de ingevoerde kans. De optie PercentileMode in <code>options</code> kan door ervaren gebruikers worden gebruikt om een meer specifieke interpolatiemethode te kiezen, maar wordt voor de meeste gebruiksscenario's afgeraden.    De vooraf gedefinieerde symbolen <code>PercentileMode.ExcelInc</code> en <code>PercentileMode.ExcelExc</code> komen overeen met de interpolatiemethoden die worden gebruikt in de Excel-functies    <code>PERCENTILE.INC</code> en <code>PERCENTILE.EXC</code>. Het standaardgedrag komt overeen met <code>PercentileMode.ExcelInc</code>. De symbolen    <code>PercentileMode.SqlCont</code> en <code>PercentileMode.SqlDisc</code> komen overeen met het SQL Server-gedrag voor respectievelijk <code>PERCENTILE_CONT</code> en    <code>PERCENTILE_DISC</code>.  


## Examples

### Example #1 
Zoek het eerste kwartiel van de lijst &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2 
Zoek de kwartielen van de lijst &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt; met behulp van een interpolatiemethode die overeenkomt met &lt;code&gt;PERCENTILE.EXC&lt;/code&gt; van Excel.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
