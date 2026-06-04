---
title: List.Percentile
---

# List.Percentile


Vraća jedan ili više uzoraka percentila koji odgovaraju datim verovatnoćama.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Remarks

Vraća jedan ili više uzoraka percentila sa liste `list`. Ako je vrednost `percentiles` broj između 0,0 i 1,0, tretiraće se kao percentil i rezultat će biti jedna vrednost koja odgovara toj verovatnoći. Ako je vrednost `percentiles` lista brojeva sa vrednostima između 0,0 i 1,0, rezultat će biti lista percentila koji odgovaraju ulaznoj verovatnoći.  
  
Napredni korisnici mogu da koriste opciju PercentileMode u `options` da bi izabrali specifičniji metod interpolacije, s tim što se ona ne preporučuje većini korisnika. Unapred definisani simboli `PercentileMode.ExcelInc` i `PercentileMode.ExcelExc` podudaraju se sa metodima interpolacije koje koriste Excel funkcije `PERCENTILE.INC` i `PERCENTILE.EXC`. Podrazumevano ponašanje podudara se sa `PercentileMode.ExcelInc`. Simboli `PercentileMode.SqlCont` i `PercentileMode.SqlDisc` podudaraju se sa SQL Server ponašanjem za `PERCENTILE_CONT` i `PERCENTILE_DISC`, tim redosledom.


## Examples

### Example #1
Pronalaženje prvog kvartila sa liste `{5, 3, 1, 7, 9}`.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2
Pronalaženje kvartila sa liste `{5, 3, 1, 7, 9}` pomoću metoda interpolacije koji se podudara sa `PERCENTILE.EXC` u programu Excel.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
