---
title: List.Percentile
---

# List.Percentile


## Description

Returnează una sau mai multe percentile eșantion care corespund probabilităților date.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Details

Returnează una sau mai multe percentile eșantion din lista <code>list</code>. Dacă valoarea <code>percentiles</code> este un număr între 0,0 și 1,0, va fi tratată ca percentilă, iar rezultatul va fi    o singură valoare care corespunde acestei probabilități. Dacă valoarea <code>percentiles</code> este o listă de numere cu valori între 0,0 și 1,0, rezultatul va fi o listă de percentile    care corespund probabilității de intrare. Opțiunea PercentileMode din <code>options</code> poate fi utilizată de utilizatori avansați pentru a alege o metodă de interpolare mai specifică, dar nu este recomandată pentru majoritatea utilizărilor.    Simbolurile predefinite <code>PercentileMode.ExcelInc</code> și <code>PercentileMode.ExcelExc</code> se potrivesc cu metodele de interpolare utilizate de funcțiile Excel    <code>PERCENTILE.INC</code> și <code>PERCENTILE.EXC</code>. Comportamentul implicit se potrivește cu <code>PercentileMode.ExcelInc</code>. Simbolurile    <code>PercentileMode.SqlCont</code> și <code>PercentileMode.SqlDisc</code> corespund comportamentului SQL Server pentru <code>PERCENTILE_CONT</code> și, respectiv,     <code>PERCENTILE_DISC</code>.  


## Examples

### Example #1 
Găsiți prima cuartilă din lista &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2 
Găsiți cuartilele listei &lt;code&gt; \{5, 3, 1, 7, 9} &lt;/code&gt; utilizând o metodă de interpolare care se potrivește cu &lt;code&gt;PERCENTILE.EXC&lt;/code&gt; din Excel.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
