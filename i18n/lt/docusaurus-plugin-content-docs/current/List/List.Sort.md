---
title: List.Sort
---

# List.Sort


## Description

Rikiuoja duomenų sąrašą pagal nurodytus kriterijus.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Details

Rikiuoja duomenų sąrašą, <code>list</code>, pagal nurodytus pasirenkamus kriterijus.    Galima nurodyti pasirenkamą parametrą, <code>comparisonCriteria</code>, kaip palyginimo kriterijų. Jis gali apimti toliau nurodytas reikšmes:    <ul>    <li> Norint valdyti tvarką, palyginimo kriterijus gali būti tvarkos išvardijimo reikšmė. (<code>Order.Descending</code>, <code>Order.Ascending</code>). </li>    <li> Norint apskaičiuoti raktą, kuris bus naudojamas rikiuojant, galima naudoti 1 argumento funkciją. </li>    <li> Norint pasirinkti raktą ir valdyti tvarką, palyginimo kriterijus gali būti sąrašas, kuriame yra raktas ir tvarka (<code>\{each 1 / _, Order.Descending}</code>). </li>    <li> Norint visiškai valdyti palyginimą, galima naudoti 2 argumentų funkciją. Ši funkcija pateiks du elementus iš sąrašo (bet kokius du elementus bet kokia tvarka). Funkcija turi pateikti vieną iš šių reikšmių:        <ul>            <li> <code>-1</code>: pirmas elementas yra mažesnis už antrą elementą.</li>            <li> <code>0</code>: elementai yra vienodi.</li>            <li> <code>1</code>: pirmas elementas yra didesnis už antrą elementą.</li>        </ul>        Value.Compare yra būdas, kuris gali būti naudojamas šiai logikai perduoti. </li>    </ul>


## Examples

### Example #1 
Rikiuokite sąrašą \{2, 3, 1}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
Rūšiuokite sąrašą \{2, 3, 1} mažėjimo tvarka.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3 
Rūšiuokite sąrašą \{2, 3, 1} mažėjimo tvarka naudodami metodą Value.Compare.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
