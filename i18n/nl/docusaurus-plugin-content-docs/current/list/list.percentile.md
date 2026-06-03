---
title: List.Percentile
---

# List.Percentile


Hiermee worden een of meer samplepercentielen geretourneerd die overeenkomen met de opgegeven kansen.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Remarks

Hiermee worden een of meer samplepercentielen van de lijst `list` geretourneerd. Als de waarde `percentiles` een getal tussen 0,0 en 1,0 is, wordt de waarde beschouwd als een percentiel en is het resultaat een enkele waarde die overeenkomt met de betreffende kans. Als de waarden `percentiles` een lijst met getallen is met waarden tussen 0,0 en 1,0, is het resultaat een lijst met percentielen die overeenkomen met de ingevoerde kans.  
  
De optie PercentileMode in `options` kan door ervaren gebruikers worden gebruikt om een meer specifieke interpolatiemethode te kiezen, maar wordt voor de meeste gebruiksscenario's afgeraden. De vooraf gedefinieerde symbolen `PercentileMode.ExcelInc` en `PercentileMode.ExcelExc` komen overeen met de interpolatiemethoden die worden gebruikt in de Excel-functies `PERCENTILE.INC` en `PERCENTILE.EXC`. Het standaardgedrag komt overeen met `PercentileMode.ExcelInc`. De symbolen `PercentileMode.SqlCont` en `PercentileMode.SqlDisc` komen overeen met het SQL Server-gedrag voor respectievelijk `PERCENTILE_CONT` en `PERCENTILE_DISC`.


## Examples

### Example #1
Zoek het eerste kwartiel van de lijst `{5, 3, 1, 7, 9}`.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2
Zoek de kwartielen van de lijst `{5, 3, 1, 7, 9}` met behulp van een interpolatiemethode die overeenkomt met `PERCENTILE.EXC` van Excel.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
