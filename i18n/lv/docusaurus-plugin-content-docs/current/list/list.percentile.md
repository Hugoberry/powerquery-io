---
title: List.Percentile
---

# List.Percentile


Atgriež vienu vai vairākus procentiļu paraugus, kas atbilst norādītajām varbūtībām.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Remarks

Atgriež vienu vai vairākus saraksta `list`procentiļu paraugus. Ja vērtība `percentiles` ir skaitlis diapazonā no 0,0 līdz 1,0, tā tiek apstrādāta kā procentile, un rezultāts būs atsevišķa vērtība, kas atbilst šai varbūtībai. Ja vērtība `percentiles` ir skaitļu saraksts ar vērtībām no 0,0 līdz 1,0, rezultāts būs procentiļu saraksts , kas atbilst ievades varbūtībai.  
  
Opciju PercentileMode programmā `options` var izmantot pieredzējuši lietotāji, lai izvēlētos konkrētāku interpolācijas metodi, taču tas nav ieteicams lielākajai daļai lietojumu. Sākotnēji definētie simboli `PercentileMode.ExcelInc` un `PercentileMode.ExcelExc` atbilst interpolācijas metodēm, ko izmanto Excel funkcijas `PERCENTILE.INC` un `PERCENTILE.EXC`. Noklusējuma darbība atbilst `PercentileMode.ExcelInc`. Simboli `PercentileMode.SqlCont` un `PercentileMode.SqlDisc` atbilst SQL Server darbībai funkcijām `PERCENTILE_CONT` un `PERCENTILE_DISC`, attiecīgi.


## Examples

### Example #1
Iegūstiet saraksta `{5, 3, 1, 7, 9}` pirmo procentili.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2
Iegūstiet saraksta `{5, 3, 1, 7, 9}` procentiles, izmantojot interpolācijas metodi, kas atbilst Excel funkcijai `PROCENTILES.EXC`.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
