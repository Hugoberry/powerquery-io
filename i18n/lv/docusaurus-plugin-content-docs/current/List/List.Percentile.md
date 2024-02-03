---
title: List.Percentile
---

# List.Percentile


## Description

Atgriež vienu vai vairākus procentiļu paraugus, kas atbilst norādītajām varbūtībām.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Details

Atgriež vienu vai vairākus saraksta <code>list</code> procentiļu paraugus. Ja vērtība <code>percentiles</code> ir skaitlis diapazonā no 0,0 līdz 1,0, tā tiek apstrādāta kā procentile, bet rezultāts ir    atsevišķa vērtība, kas atbilst šai varbūtībai. Ja vērtība <code>percentiles</code> ir skaitļu saraksts ar vērtībām no 0,0 līdz 1,0, tad rezultāts ir procentiļu saraksts,    kas atbilst ievades varbūtībai. <code>options</code> opciju PercentileMode var izmantot pieredzējuši lietotāji, lai atlasītu konkrētāku interpolācijas metodi, taču tas nav ieteicams vairākumā lietošanas gadījumu.    Sākotnēji definētie simboli <code>PercentileMode.ExcelInc</code> un <code>PercentileMode.ExcelExc</code> atbilst interpolācijas metodēm, ko izmanto Excel funkcijas    <code>PROCENTILES.INC</code> un <code>PROCENTILES.EXC</code>. Noklusējuma darbība atbilst simbolam <code>PercentileMode.ExcelInc</code>. Simboli    <code>PercentileMode.SqlCont</code> un <code>PercentileMode.SqlDisc</code> atbilst SQL Server funkcijas <code>PERCENTILE_CONT</code> un    <code>PERCENTILE_DISC</code> darbībai.  


## Examples

### Example #1 
Iegūstiet saraksta &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt; pirmo procentili.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2 
Iegūstiet saraksta &lt;code&gt; \{5, 3, 1, 7, 9} &lt;/code&gt; procentiles, izmantojot interpolācijas metodi, kas atbilst Excel funkcijai &lt;code&gt;PROCENTILES.EXC&lt;/code&gt;.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
