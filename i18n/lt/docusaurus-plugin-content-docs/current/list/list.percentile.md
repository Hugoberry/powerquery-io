---
title: List.Percentile
---

# List.Percentile


Pateikia vieną arba daugiau imties procentilių, atitinkančių nurodytas tikimybes.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Remarks

Pateikia vieną arba daugiau `list` sąrašo imties procentilių. Jei reikšmė `percentiles` yra skaičius nuo 0,0 iki 1,0, ji bus laikoma procentiliu, o rezultatas bus viena reikšmė, atitinkanti šią tikimybę. Jei reikšmė `percentiles` yra skaičių, kurių reikšmės yra nuo 0,0 iki 1,0, sąrašas, rezultatas bus procentilių atitinkančių įvesties tikimybę, sąrašas.  
  
Parinktį „PercentileMode“ `options` gali naudoti patyrę vartotojai, norėdami pasirinkti konkretesnę įtraukimo metodą, bet jos nerekomenduojama naudoti daugeliu naudojimo atvejų. Iš anksto nustatyti simboliai `PercentileMode.ExcelInc` ir `PercentileMode.ExcelExc` atitinka įtraukimo metodus, kuriuos naudoja „Excel“ funkcijos `PERCENTILE.INC` ir `PERCENTILE.EXC`. Numatytasis veikimo būdas atitinka `PercentileMode.ExcelInc`. Simboliai `PercentileMode.SqlCont` ir `PercentileMode.SqlDisc` atitinkamai sutampa su „SQL Server“ `PERCENTILE_CONT` ir `PERCENTILE_DISC` veikimo būdu.


## Examples

### Example #1
Raskite pirmąjį sąrašo `{5, 3, 1, 7, 9}` kvartilį.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2
Raskite sąrašo `{5, 3, 1, 7, 9}` kvartilius naudodami įtraukimo metodą, atitinkantį „Excel“ `PERCENTILE.EXC`.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
