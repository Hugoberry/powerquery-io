---
title: List.Sort
---

# List.Sort


## Description

Sortira listu podataka prema navedenim kriterijumima.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Details

Sortira listu podataka, <code>list</code>, prema navedenim opcionalnim kriterijumima.    Može se navesti opcionalni parametar, <code>comparisonCriteria</code>, kao kriterijum poređenja. Može da uzme jednu od sledećih vrednosti:    <ul>    <li> Da bi se kontrolisao redosled, kriterijum poređenja može da bude Order enum vrednost. (<code>Order.Descending</code>, <code>Order.Ascending</code>). </li>    <li> Da bi se izračunao ključ koji će se koristiti za sortiranje, može se koristiti funkcija sa 1 argumentom. </li>    <li> Da bi se izabrao ključ i kontrolisao redosled, kriterijum poređenja može da bude lista koja sadrži ključ i redosled (<code>\{each 1 / _, Order.Descending}</code>). </li>    <li> Za potpunu kontrolu poređenja, može se koristiti funkcija od 2 argumenta. Ovoj funkciji će biti prosleđene dve stavke sa liste (bilo koje dve stavke, bilo kojim redosledom). Funkcija treba da vrati jednu od sledećih vrednosti:       <ul>              <li> <code>-1</code>: Prva stavka je manja od druge stavke.</li>              <li> <code>0</code>: Stavke su jednake.</li>              <li> <code>1</code>: Prva stavka je veća od druge stavke.</li>          </ul>          Value.Compare je metod koji se može koristiti za delegiranje ove logike. </li>    </ul>


## Examples

### Example #1 
Sortiranje liste \{2, 3, 1}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
Sortiranje liste \{2, 3, 1} po opadajućem redosledu.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3 
Sortiranje liste \{2, 3, 1} po opadajućem redosledu pomoću metoda Value.Compare.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
