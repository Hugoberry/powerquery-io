---
title: List.Percentile
---

# List.Percentile


## Description

Vraća jedan ili više uzoraka percentila koji odgovaraju datim verovatnoćama.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Details

Vraća jedan ili više uzoraka percentila sa liste <code>list</code>. Ako je vrednost <code>percentiles</code> broj između 0,0 i 1,0, tretiraće se kao percentil i rezultat će biti    jedna vrednost koja odgovara toj verovatnoći. Ako je vrednost <code>percentiles</code> lista brojeva sa vrednostima između 0,0 i 1,0, rezultat će biti lista percentila    koji odgovaraju ulaznoj verovatnoći. Napredni korisnici mogu da koriste opciju PercentileMode u <code>options</code> da bi izabrali specifičniji metod interpolacije, s tim što se ona ne preporučuje većini korisnika.    Unapred definisani simboli <code>PercentileMode.ExcelInc</code> i <code>PercentileMode.ExcelExc</code> podudaraju se sa metodima interpolacije koje koriste Excel funkcije    <code>PERCENTILE.INC</code> i <code>PERCENTILE.EXC</code>. Podrazumevano ponašanje podudara se sa <code>PercentileMode.ExcelInc</code>. Simboli    <code>PercentileMode.SqlCont</code> i <code>PercentileMode.SqlDisc</code> podudaraju se sa SQL Server ponašanjem za <code>PERCENTILE_CONT</code> i    <code>PERCENTILE_DISC</code>, tim redosledom.  


## Examples

### Example #1 
Pronalaženje prvog kvartila sa liste &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2 
Pronalaženje kvartila sa liste &lt;code&gt;\{5, 3, 1, 7, 9} &lt;/code&gt; pomoću metoda interpolacije koji se podudara sa &lt;code&gt;PERCENTILE.EXC&lt;/code&gt; u programu Excel.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
