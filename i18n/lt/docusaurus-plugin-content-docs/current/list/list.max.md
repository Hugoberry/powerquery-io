---
title: List.Max
---

# List.Max


Pateikiama didžiausia reikšmė arba numatytoji tuščio sąrašo reikšmė.


## Syntax

```powerquery
List.Max(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Remarks

Pateikia didžiausią sąrašo elementą arba pasirinktą numatytąją reikšmę, jei sąrašas tuščias.

-   `list`: reikšmių sąrašas.
-   `default`: (Pasirinktinai) pateikiama reikšmė, jei sąrašas tuščias.
-   `comparisonCriteria`: (Pasirinktinai) Funkcija, naudojama reikšmėms transformuoti prieš jas lyginant. Jei šis parametras yra `null`, reikšmės lyginamos be jokios transformacijos.
-   `includeNulls`: (Pasirinktinai) Nurodo, ar `null` reikšmes sąraše reikia įtraukti nustatant maksimalų elementą. Numatytoji reikšmė yra `true`.


## Examples

### Example #1
Raskite didžiausią reikšmę nurodytame sąraše.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2
Raskite didžiausią reikšmę nurodytame sąraše arba pateikite -1, jei sąrašas tuščias.
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```


### Example #3
Raskite sąraše teksto reikšmę, kuri yra paskutinė abėcėlės tvarka. Jei sąrašas tuščias, pateikite „Nėra“.
```powerquery
let
    Source = {"boy", "dog", "girl", "zebra", "cat", "mouse", "rabbit"},
    MaxText = List.Max(Source, "none")
in
    MaxText
```

Result: 
```powerquery
"zebra"
```


### Example #4
Raskite naujausią datą iš Vokietijos datų sąrašo. Jei sąrašas tuščias, pateikite 2000 m. sausio 1 d.
```powerquery
let
    Source = {"12.02.2024", "15.05.2025", "10.10.2021", "16.01.2025", "30.12.2022"},
    MaxDate = List.Max(Source, #date(2000, 1, 1), each Date.FromText(_, [Culture = "de-DE"]))
in
    MaxDate
```

Result: 
```powerquery
"15.05.2025"
```




## Category
List.Ordering
