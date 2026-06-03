---
title: List.Alternate
---

# List.Alternate


Zwraca listę złożoną ze wszystkich elementów przesunięcia na liście, które mają nieparzyste numery.


## Syntax

```powerquery
List.Alternate(
    list as list,
    count as number,
    optional repeatInterval as number,
    optional offset as number
) as list
```


## Remarks

Zwraca listę złożoną ze wszystkich elementów przesunięcia na liście, które mają nieparzyste numery. Zmiany w pobieraniu i pomijaniu wartości z listy `list` są zależne od parametrów.

-   `count`: określa liczbę wartości, które są za każdym razem pomijane.
-   `repeatInterval`: opcjonalny interwał powtarzania wskazujący, ile wartości jest dodawanych między pominiętymi wartościami.
-   `offset`: opcjonalny parametr przesunięcia umożliwiający rozpoczęcie pomijania wartości od początkowego przesunięcia.


## Examples

### Example #1
Utwórz listę z zakresu \{1..10\} z pominięciem pierwszej liczby.
```powerquery
List.Alternate({1..10}, 1)
```

Result: 
```powerquery
{2, 3, 4, 5, 6, 7, 8, 9, 10}
```


### Example #2
Utwórz listę z zakresu \{1..10\} z pominięciem co drugiej liczby.
```powerquery
List.Alternate({1..10}, 1, 1)
```

Result: 
```powerquery
{2, 4, 6, 8, 10}
```


### Example #3
Utwórz listę z zakresu \{1..10\}, która rozpoczyna się od 1, z pominięciem co drugiej liczby.
```powerquery
List.Alternate({1..10}, 1, 1, 1)
```

Result: 
```powerquery
{1, 3, 5, 7, 9}
```


### Example #4
Utwórz listę z zakresu \{1..10\}, która rozpoczyna się od 1, z pominięciem jednej wartości, zachowaniem dwóch wartości itd.
```powerquery
List.Alternate({1..10}, 1, 2, 1)
```

Result: 
```powerquery
{1, 3, 4, 6, 7, 9, 10}
```




## Category
List.Selection
