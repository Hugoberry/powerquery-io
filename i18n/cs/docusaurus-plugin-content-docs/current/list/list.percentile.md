---
title: List.Percentile
---

# List.Percentile


Vrátí jeden nebo více vzorků percentilů, které odpovídají daným pravděpodobnostem.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Remarks

Vrátí jeden nebo více dílčích percentilů seznamu `list`. Pokud je hodnota `percentiles` číslo mezi 0,0 a 1,0, zpracuje se jako percentil a výsledek bude jedna hodnota odpovídající této pravděpodobnosti. Pokud je hodnota `percentiles` seznam čísel s hodnotami mezi 0,0 a 1,0, bude výsledkem seznam percentilů odpovídající pravděpodobnosti vstupu.  
  
Možnost PercentileMode v `options` můžou používat pokročilí uživatelé pro výběr konkrétnější metody interpolace, pro většinu použití se ale nedoporučuje. Předdefinované symboly `PercentileMode.ExcelInc` a `PercentileMode.ExcelExc` odpovídají metodám interpolace používaným funkcemi Excelu `PERCENTILE.INC` a `PERCENTILE.EXC`. Výchozí chování odpovídá `PercentileMode.ExcelInc`. Symboly `PercentileMode.SqlCont` a `PercentileMode.SqlDisc` odpovídají chování SQL Server pro`PERCENTILE_CONT` a `PERCENTILE_DISC` v uvedeném pořadí.


## Examples

### Example #1
Vyhledá první kvartil v seznamu `{5, 3, 1, 7, 9}`.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2
Najděte kvartily seznamu `{5, 3, 1, 7, 9}` pomocí metody interpolace odpovídající `PERCENTILE.EXC` v Excelu.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
