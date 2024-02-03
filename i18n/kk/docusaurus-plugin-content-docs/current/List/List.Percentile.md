---
title: List.Percentile
---

# List.Percentile


## Description

Берілген ықтималдықтарға сәйкес келетін бір немесе бірнеше үлгі процентильді қайтарады.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Details

<code>list</code> тізімінің бір немесе бірнеше үлгі процентилін қайтарады. Егер <code>percentiles</code> мәні 0,0 және 1,0 арасындағы сан болса, ол процентиль ретінде қарастырылады және нәтиже    сол ықтималдыққа сәйкес келетін жалғыз мән болады. Егер <code>percentiles</code> мәні 0,0 және 1,0 арасындағы сандар тізімі болса, нәтиже кіріс ықтималдығына сәйкес келетін    процентильдер тізімі болады. <code>options</code> PercentileMode параметрін тәжірибелі пайдаланушылар нақтырақ интерполяция әдісін таңдау үшін пайдалана алады, бірақ ол жалпы пайдалану үшін ұсынылмаған.    <code>PercentileMode.ExcelInc</code> және <code>PercentileMode.ExcelExc</code> алдын ала анықталған символдары <code>PERCENTILE.INC</code> және <code>PERCENTILE.EXC</code> Excel функциялары пайдаланатын    интерполяция әдістеріне сәйкес келеді. Әдепкі жұмыс режимі <code>PercentileMode.ExcelInc</code> үшін сәйкес.     <code>PercentileMode.SqlCont</code> және <code>PercentileMode.SqlDisc</code> символдары тиісінше <code>PERCENTILE_CONT</code> және    <code>PERCENTILE_DISC</code> үшін SQL Server жұмыс режиміне сәйкес келеді.  


## Examples

### Example #1 
&lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt; тізімінің бірінші квартилін табыңыз.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2 
Excel &lt;code&gt;PERCENTILE.EXC&lt;/code&gt; үшін сәйкес келетін интерполяция әдісін пайдалану арқылы &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt; тізімінің квартильдерін табыңыз.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
