---
title: List.Sort
---

# List.Sort


Rikiuoja duomenų sąrašą pagal nurodytus kriterijus.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Remarks

Rikiuoja duomenų sąrašą, `list`, pagal nurodytus pasirenkamus kriterijus. Galima nurodyti pasirenkamą parametrą, `comparisonCriteria`, kaip palyginimo kriterijų. Jis gali apimti toliau nurodytas reikšmes:

-   Norint valdyti tvarką, palyginimo kriterijus gali būti tvarkos išvardijimo reikšmė. (`Order.Descending`, `Order.Ascending`).
-   Norint apskaičiuoti raktą, kuris bus naudojamas rikiuojant, galima naudoti 1 argumento funkciją.
-   Norint pasirinkti raktą ir valdyti tvarką, palyginimo kriterijus gali būti sąrašas, kuriame yra raktas ir tvarka (`{each 1 / _, Order.Descending}`).
-   Norint visiškai valdyti palyginimą, galima naudoti 2 argumentų funkciją (pvz., Value.Compare). Ši funkcija pateiks du elementus iš sąrašo (bet kokius du elementus bet kokia tvarka). Funkcija turi pateikti vieną iš šių reikšmių:
    -   `-1`: pirmas elementas yra mažesnis už antrą elementą.
    -   `0`: elementai yra vienodi.
    -   `1`: pirmas elementas yra didesnis už antrą elementą.


## Examples

### Example #1
Rikiuokite sąrašą \{2, 3, 1\}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Rūšiuokite sąrašą \{2, 3, 1\} mažėjimo tvarka.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3
Rūšiuokite sąrašą \{2, 3, 1\} mažėjimo tvarka naudodami metodą Value.Compare.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
