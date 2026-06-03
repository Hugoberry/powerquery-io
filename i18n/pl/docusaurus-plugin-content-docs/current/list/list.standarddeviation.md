---
title: List.StandardDeviation
---

# List.StandardDeviation


Zwraca próbkę opartą na szacowaniu odchylenia standardowego.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Remarks

Zwraca wartość szacunkową odchylenia standardowego wartości z listy `numbersList` opartą na próbkach. Jeśli lista `numbersList` zawiera liczby, zwracana jest liczba. W przypadku pustej listy lub listy zawierającej elementy, które nie są typu `numer`, zgłaszany jest błąd.


## Examples

### Example #1
Znajdź odchylenie standardowe liczb od 1 do 5.
```powerquery
List.StandardDeviation({1..5})
```

Result: 
```powerquery
1.5811388300841898
```




## Category
List.Averages
