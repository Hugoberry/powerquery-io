---
title: List.Percentile
---

# List.Percentile


Gibt mindestens ein Stichprobenperzentil zurück, das den angegebenen Wahrscheinlichkeiten entspricht.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Remarks

Gibt mindestens ein Stichprobenperzentil der Liste „`list`“ zurück. Wenn der Wert „`percentiles`“ eine Zahl zwischen 0,0 und 1,0 ist, wird er als Perzentil behandelt, und das Ergebnis ist ein einzelner Wert, der dieser Wahrscheinlichkeit entspricht. Wenn der Wert „`percentiles`“ eine Zahlenliste mit Werten zwischen 0,0 und 1,0 ist, ist das Ergebnis eine Liste von Perzentilen entsprechend der Wahrscheinlichkeit der Eingabe.  
  
Die PercentileMode-Option in „`options`“ kann von fortgeschrittenen Benutzern verwendet werden, um eine spezifischere Interpolationsmethode auszuwählen, wird aber für die meisten Verwendungszwecke nicht empfohlen. Die vordefinierten Symbole `PercentileMode.ExcelInc` und `PercentileMode.ExcelExc` entsprechen den von den Excel-Funktionen verwendeten Interpolationsmethoden `PERCENTILE.INC` und `PERCENTILE.EXC`. Das Standardverhalten entspricht `PercentileMode.ExcelInc`. Die Symbole `PercentileMode.SqlCont` und `PercentileMode.SqlDisc` entsprechen dem SQL Server-Verhalten für `PERCENTILE_CONT` bzw. `PERCENTILE_DISC`.


## Examples

### Example #1
Ermitteln Sie das erste Quartil der Liste `{5, 3, 1, 7, 9}`.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2
Ermitteln Sie die Quartile der Liste `{5, 3, 1, 7, 9}` mithilfe einer Interpolationsmethode, die der Excel-Methode `PERCENTILE.EXC` entspricht.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
