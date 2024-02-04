---
title: List.Percentile
---

# List.Percentile


## Description

Gibt mindestens ein Stichprobenperzentil zurück, das den angegebenen Wahrscheinlichkeiten entspricht.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Details

Gibt mindestens ein Stichprobenperzentil der Liste "<code>list</code>" zurück. Wenn der Wert "<code>percentiles</code>" eine Zahl zwischen 0,0 und 1,0 ist, wird er als Perzentil behandelt, und das Ergebnis ist    ein einzelner Wert, der dieser Wahrscheinlichkeit entspricht. Wenn der Wert "<code>percentiles</code>" eine Zahlenliste mit Werten zwischen 0,0 und 1,0 ist, ist das Ergebnis eine Liste von Perzentilen    entsprechend der Wahrscheinlichkeit der Eingabe. Die PercentileMode-Option in "<code>options</code>" kann von fortgeschrittenen Benutzern verwendet werden, um eine spezifischere Interpolationsmethode auszuwählen, wird aber für die meisten Verwendungszwecke nicht empfohlen.    Die vordefinierten Symbole <code>PercentileMode.ExcelInc</code> und <code>PercentileMode.ExcelExc</code> entsprechen den von den Excel-Funktionen verwendeten Interpolationsmethoden    <code>PERCENTILE.INC</code> und <code>PERCENTILE.EXC</code>. Das Standardverhalten entspricht <code>PercentileMode.ExcelInc</code>. Die Symbole    <code>PercentileMode.SqlCont</code> und <code>PercentileMode.SqlDisc</code> entsprechen dem SQL Server-Verhalten für <code>PERCENTILE_CONT</code> bzw.    <code>PERCENTILE_DISC</code>.  


## Examples

### Example #1 
Ermitteln Sie das erste Quartil der Liste &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2 
Ermitteln Sie die Quartile der Liste &lt;code&gt; \{5, 3, 1, 7, 9} &lt;/code&gt; mithilfe einer Interpolationsmethode, die der Excel-Methode &lt;code&gt;PERCENTILE.EXC&lt;/code&gt; entspricht.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
