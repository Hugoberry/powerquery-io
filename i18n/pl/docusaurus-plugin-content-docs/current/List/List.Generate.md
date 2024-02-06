---
title: List.Generate
---

# List.Generate


Generuje listę wartości.


## Syntax

```powerquery
List.Generate(
    initial as function,
    condition as function,
    next as function,
    optional selector as function
) as list
```


## Remarks

Generuje listę wartości przy użyciu podanych funkcji. Funkcja <code>initial</code> generuje początkową wartość kandydującą, która jest następnie testowana względem <code>condition</code>. Jeśli wartość kandydata zostanie zatwierdzona, zostanie zwrócona jako część listy wynikowej, a następna wartość kandydująca zostanie wygenerowana przez przekazanie nowo zatwierdzonej wartości do <code>next</code>. Gdy wartość kandydatów nie jest zgodna z <code>condition</code>, proces generowania listy zostanie zatrzymany. Można również podać  opcjonalny parametr <code>selector</code>, aby przekształcić elementy na liście wynikowej.


## Examples

### Example #1 
Utwórz listę, zaczynając od dziesięciu, wielokrotnie zmniejszając o jeden i upewniając się, że każdy element jest większy od zera.
```powerquery
List.Generate(() => 10, each _ > 0, each _ - 1)
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```


### Example #2 
Wygeneruj listę rekordów zawierającą wartości x i y, gdzie x to wartość, a y to lista. Wartość x ma pozostać mniejsza niż 10 i reprezentować liczbę elementów listy y. Po wygenerowaniu listy mają być zwracane tylko wartości x.
```powerquery
List.Generate(
    () => [x = 1, y = {}],
    each [x] < 10,
    each [x = List.Count([y]), y = [y] & {x}],
    each [x]
)
```

Result: 
```powerquery
{1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
```




## Category
List.Generators
