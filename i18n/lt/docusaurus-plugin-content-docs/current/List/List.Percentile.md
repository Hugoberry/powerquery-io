---
title: List.Percentile
---

# List.Percentile


## Description

Pateikia vieną arba daugiau imties procentilių, atitinkančių nurodytas tikimybes.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Details

Pateikia vieną arba daugiau <code>list</code> sąrašo imties procentilių. Jei reikšmė <code>percentiles</code> yra skaičius nuo 0,0 iki 1,0, ji bus laikoma procentiliu, o rezultatas bus    viena reikšmė, atitinkanti šią tikimybę. Jei reikšmė <code>percentiles</code> yra skaičių, kurių reikšmės yra nuo 0,0 iki 1,0, sąrašas, rezultatas bus procentilių,    atitinkančių įvesties tikimybę, sąrašas. Parinktį PercentileMode <code>options</code> gali naudoti patyrę vartotojai, norėdami pasirinkti konkretesnę įtraukimo metodą, bet jos nerekomenduojama naudoti daugeliu naudojimo atvejų.    Iš anksto nustatyti simboliai <code>PercentileMode.ExcelInc</code> ir <code>PercentileMode.ExcelExc</code> atitinka įtraukimo metodus, kuriuos naudoja „Excel“ funkcijos    <code>PERCENTILE.INC</code> ir <code>PERCENTILE.EXC</code>. Numatytasis veikimo būdas atitinka <code>PercentileMode.ExcelInc</code>. Simboliai    <code>PercentileMode.SqlCont</code> ir <code>PercentileMode.SqlDisc</code> atitinkamai sutampa su „SQL Server“ <code>PERCENTILE_CONT</code> ir    <code>PERCENTILE_DISC</code> veikimo būdu.  


## Examples

### Example #1 
Raskite pirmąjį sąrašo &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt; kvartilį.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2 
Raskite sąrašo &lt;code&gt; \{5, 3, 1, 7, 9} &lt;/code&gt; kvartilius naudodami įtraukimo metodą, atitinkantį „Excel“ &lt;code&gt;PERCENTILE.EXC&lt;/code&gt;.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
