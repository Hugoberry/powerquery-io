---
title: List.Range
---

# List.Range


## Description

Zwraca podzbiór listy rozpoczynający się od przesunięcia.


## Syntax

```powerquery
List.Range(
    list as list,
    offset as number,
    optional count as number
) as list
```


## Details

Zwraca podzbiór listy rozpoczynający się od przesunięcia <code>list</code>. Opcjonalny parametr <code>offset</code> określa maksymalną liczbę elementów w podzbiorze.


## Examples

### Example #1 
Zajdź podzbiór listy liczb od 1 do 10, który rozpoczyna się od przesunięcia 6.
```powerquery
List.Range({1..10}, 6)
```

Result: 
```powerquery
{7, 8, 9, 10}
```


### Example #2 
Zajdź podzbiór o długości 2 listy liczb od 1 do 10, który rozpoczyna się od przesunięcia 6.
```powerquery
List.Range({1..10}, 6, 2)
```

Result: 
```powerquery
{7, 8}
```




## Category
List.Selection
