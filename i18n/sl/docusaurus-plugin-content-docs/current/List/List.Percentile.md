---
title: List.Percentile
---

# List.Percentile


## Description

Vrne enega ali več vzorčnih percentilov, ki ustrezajo navedenim verjetnostnim.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Details

Vrne enega ali več vzorčnih percentilov seznama <code>list</code>. Če je vrednost <code>percentiles</code> številka med 0,0 in 1,0, bo obravnavana kot percentil, zato bo rezultat    enojna vrednost, ki ustreza tej verjetnosti. Če je vrednost <code>percentiles</code> seznam številk z vrednostmi med 0,0 in 1,0, bo rezultat seznam percentilov,    ki ustreza verjetnosti vnosa. Izkušeni uporabniki lahko uporabijo možnost "PercentileMode" v <code>options</code>, da izberejo dolj določen način interpolacije, vendar ta možnost ni priporočena za večino uporabnikov.    Vnaprej določena simbola <code>PercentileMode.ExcelInc</code> in <code>PercentileMode.ExcelExc</code> sta enaka kot načini interpolacije, ki jih uporabljata Excelovi funkciji    <code>PERCENTILE.INC</code> in <code>PERCENTILE.EXC</code>. Privzeti način delovanja je enak kot pri <code>PercentileMode.ExcelInc</code>. Simbola    <code>PercentileMode.SqlCont</code> in <code>PercentileMode.SqlDisc</code> sta enaka delovanju v strežniku SQL Server za <code>PERCENTILE_CONT</code> in    <code>PERCENTILE_DISC</code>.  


## Examples

### Example #1 
Poiščite prvi kvartil seznama &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2 
Poiščite kvartile seznama &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt; z uporabo načina interpolacije, ki se ujema z Excelovo funkcijo &lt;code&gt;PERCENTILE.EXC&lt;/code&gt;.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
