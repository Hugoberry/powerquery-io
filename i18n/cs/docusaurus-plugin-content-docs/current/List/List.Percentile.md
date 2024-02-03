---
title: List.Percentile
---

# List.Percentile


## Description

Vrátí jeden nebo více vzorků percentilů, které odpovídají daným pravděpodobnostem.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Details

Vrátí jeden nebo více dílčích percentilů seznamu <code>list</code>. Pokud je hodnota <code>percentiles</code> číslo mezi 0,0 a 1,0, zpracuje se jako percentil a výsledek bude    jedna hodnota odpovídající této pravděpodobnosti Pokud je hodnota <code>percentiles</code> seznam čísel s hodnotami mezi 0,0 a 1,0, bude výsledkem seznam percentilů.    odpovídající pravděpodobnosti vstupu. Možnost PercentileMode v <code>options</code> můžou používat pokročilí uživatelé pro výběr konkrétnější metody interpolace, pro většinu použití se ale nedoporučuje.    Předdefinované symboly <code>PercentileMode.ExcelInc</code> a <code>PercentileMode.ExcelExc</code> odpovídají metodám interpolace používaným funkcemi Excel    <code>PERCENTIL. INC</code> a <code>PERCENTILE.EXC</code>. Výchozí chování odpovídá <code>PercentileMode.ExcelInc</code>. Symboly    <code>PercentileMode.SqlCont</code> a <code>PercentileMode.SqlDisc</code> odpovídají chování SQL Server pro<code>PERCENTILE_CONT</code> a    <code>PERCENTILE_DISC</code> v uvedeném pořadí.  


## Examples

### Example #1 
Vyhledá první kvartil v seznamu &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2 
Najděte kvartily seznamu &lt;code&gt; \{5, 3, 1, 7, 9} &lt;/code&gt; pomocí metody interpolace odpovídající &lt;code&gt;PERCENTILE.EXC&lt;/code&gt; v Excelu.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
