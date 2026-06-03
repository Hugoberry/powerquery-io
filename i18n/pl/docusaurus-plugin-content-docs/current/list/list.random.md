---
title: List.Random
---

# List.Random


Zwraca listę liczb losowych.


## Syntax

```powerquery
List.Random(
    count as number,
    optional seed as number
) as list
```


## Remarks

Zwraca listę losowych liczb z zakresu od 0 do 1, używając liczby wartości do wygenerowania opcjonalnej wartości inicjatora.

-   `count`: liczba losowych wartości do wygenerowania.
-   `seed`: *(opcjonalnie)* Wartość liczbowa używana w celu zainicjowania generatora liczb losowych. Jeśli ten parametr zostanie pominięty, przy każdym wywołaniu tej funkcji będzie generowana unikatowa lista losowych liczb. Jeśli zostanie określona wartość liczbowa inicjatora, przy każdym wywołaniu tej funkcji będzie generowana taka sama lista liczb losowych.


## Examples

### Example #1
Utwórz listę zawierającą 3 liczby losowe.
```powerquery
List.Random(3)
```

Result: 
```powerquery
{0.992332, 0.132334, 0.023592}
```


### Example #2
Utwórz listę zawierającą 3 liczby losowe, określając wartość inicjatora.
```powerquery
List.Random(3, 2)
```

Result: 
```powerquery
{0.883002, 0.245344, 0.723212}
```




## Category
List.Generators
