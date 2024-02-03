---
title: List.Percentile
---

# List.Percentile


## Description

Vráti minimálne jednu hodnotu percentilu vzorky zodpovedajúcu danej pravdepodobnosti.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Details

Vráti minimálne jednu hodnotu percentilu vzorky zoznamu <code>list</code>. Ak je hodnota <code>percentiles</code> číslo v rozsahu od 0,0 do 1,0, spracuje sa ako percentil a výsledkom bude    jediná hodnota zodpovedajúca danej pravdepodobnosti. Ak je hodnota <code>percentiles</code> zoznamom čísel s hodnotami v rozsahu od 0,0 do 1,0, výsledok bude zoznam percentilov    zodpovedajúcich vstupnej pravdepodobnosti. Možnosť PercentileMode v <code>options</code> môžu využiť skúsení používatelia na výber konkrétnej metódy interpolácie, ale pre väčšinu použití sa neodporúča.    Vopred zadefinované symboly <code>PercentileMode.ExcelInc</code> a <code>PercentileMode.ExcelExc</code> zodpovedajú metóde interpolácie, ktorú používajú funkcie Excelu     <code>PERCENTILE.INC</code> a <code>PERCENTILE.EXC</code>. Predvolené správanie zodpovedá <code>PercentileMode.ExcelInc</code>. Symboly    <code>PercentileMode.SqlCont</code> a <code>PercentileMode.SqlDisc</code> zodpovedajú správaniu SQL Servera pri použití funkcie <code>PERCENTILE_CONT</code> a    <code>PERCENTILE_DISC</code> v uvedenom poradí.  


## Examples

### Example #1 
Nájdite prvý kvartil zoznamu &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2 
Nájdite kvartily zoznamu &lt;code&gt; \{5, 3, 1, 7, 9} &lt;/code&gt; pomocou metódy interpolácie zodpovedajúcej excelovej funkcii &lt;code&gt;PERCENTILE.EXC&lt;/code&gt;.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
