---
title: List.Percentile
---

# List.Percentile


Vráti minimálne jednu hodnotu percentilu vzorky zodpovedajúcu danej pravdepodobnosti.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Remarks

Vráti minimálne jednu hodnotu percentilu vzorky zoznamu `list`. Ak je hodnota `percentiles` číslo v rozsahu od 0,0 do 1,0, spracuje sa ako percentil a výsledkom bude jediná hodnota zodpovedajúca danej pravdepodobnosti. Ak je hodnota `percentiles` zoznamom čísel s hodnotami v rozsahu od 0,0 do 1,0, výsledok bude zoznam percentilov zodpovedajúcich vstupnej pravdepodobnosti.  
  
Možnosť PercentileMode v `options` môžu využiť skúsení používatelia na výber konkrétnej metódy interpolácie, ale pre väčšinu použití sa neodporúča. Vopred zadefinované symboly `PercentileMode.ExcelInc` a `PercentileMode.ExcelExc` zodpovedajú metóde interpolácie, ktorú používajú funkcie Excelu `PERCENTILE.INC` a `PERCENTILE.EXC`. Predvolené správanie zodpovedá `PercentileMode.ExcelInc`. Symboly `PercentileMode.SqlCont` a `PercentileMode.SqlDisc` zodpovedajú správaniu SQL Servera pri použití funkcie `PERCENTILE_CONT` a `PERCENTILE_DISC` v uvedenom poradí.


## Examples

### Example #1
Nájdite prvý kvartil zoznamu `{5, 3, 1, 7, 9}`.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2
Nájdite kvartily zoznamu `{5, 3, 1, 7, 9}` pomocou metódy interpolácie zodpovedajúcej excelovej funkcii `PERCENTILE.EXC`.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
