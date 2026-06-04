---
title: List.MaxN
---

# List.MaxN


Pateikiama (-os) didžiausia (-ios) sąrašo reikšmė (-ės). Turi būti nurodytas pateiktinų reikšmių skaičius arba filtro sąlyga.


## Syntax

```powerquery
List.MaxN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Remarks

Pateikiama (-os) didžiausia (-os) nurodyto sąrašo reikšmė (-ės). Surikiavus eilutes, galima nurodyti pasirinktinius parametrus, kad būtų galima toliau filtruoti rezultatą.

-   `list`: reikšmių sąrašas.
-   `countOrCondition`: nurodo pateikiamų reikšmių skaičių arba filtro sąlygą. Jei nurodomas skaičius, pateikiama iki `countOrCondition` elementų sąrašas mažėjimo tvarka. Jei nurodoma sąlyga, pateiktame sąraše bus visi elementai, atitinkantys sąlygą.
-   `comparisonCriteria`: (Pasirinktinai) Funkcija, naudojama reikšmėms transformuoti prieš jas lyginant. Jei šis parametras yra `null`, reikšmės lyginamos be jokios transformacijos.
-   `includeNulls`: (Pasirinktinai) Nurodo, ar `null` reikšmes sąraše reikia įtraukti nustatant maksimalų elementą. Numatytoji reikšmė yra `true`.


## Examples

### Example #1
Raskite 5 didžiausias reikšmes nurodytame sąraše.
```powerquery
List.MaxN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{8, 7, 5, 4, 3}
```


### Example #2
Raskite žodžius, kurių ilgis didesnis nei 3 simboliai.
```powerquery
List.MaxN(
    {"boy", "dog", "pony", "cat", "rabbit", "bat"},
    each Text.Length(_) > 3
)
```

Result: 
```powerquery
{"rabbit", "pony"}
```


### Example #3
Raskite tris naujausias datas iš Vokietijos datų sąrašo.
```powerquery
let
    Source = {"12.02.2024", "15.05.2025", "10.10.2021", "16.01.2025", "30.12.2022"},
    MaxDate = List.MaxN(Source, 3, each Date.FromText(_, [Culture = "de-DE"]))
in
    MaxDate
```

Result: 
```powerquery
{
    "15.05.2025",
    "16.01.2025",
    "12.02.2024"
}
```




## Category
List.Ordering
