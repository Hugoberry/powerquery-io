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

Zwraca wartość szacunkową odchylenia standardowego wartości z listy <code>numbersList</code> opartą na próbkach.    Jeśli lista <code>numbersList</code> zawiera liczby, zwracana jest liczba.    Gdy lista jest pusta lub zawiera elementy, które nie są wartościami typu <code>number</code>, jest zwracany wyjątek.


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
