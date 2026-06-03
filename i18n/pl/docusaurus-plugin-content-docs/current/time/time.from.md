---
title: Time.From
---

# Time.From


Tworzy godzinę na podstawie danej wartości.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

Zwraca wartość typu `time` z danej wartości parametru `value`. Można także określić opcjonalny parametr `culture` (na przykład „en-US”). Jeśli dany parametr `value` ma wartość `null`, funkcja `Time.From` zwraca wartość `null`. Jeśli dany parametr `value` ma wartość typu `time`, zwracana jest wartość `value`. Na wartość typu `time` można konwertować wartości następujących typów:

-   `text`: wartość typu `time` z reprezentacji tekstowej. Zobacz opis funkcji `Time.FromText`, aby uzyskać szczegółowe informacje.
-   `datetime`: składnik godziny z wartości `value`.
-   `datetimezone`: składnik godziny z lokalnego odpowiednika typu data/godzina o wartości `value`.
-   `number`: odpowiednik wartości typu `time` dla liczby ułamkowych dni wyrażonej przez wartość `value`. Jeśli wartość parametru `value` jest ujemna albo większa lub równa 1, jest zwracany błąd.

Jeśli wartość parametru `value` jest innego typu, jest zwracany błąd.


## Examples

### Example #1
Przekonwertuj wartość `0.7575` na wartość typu `time`.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2
Przekonwertuj wartość `#datetime(1899, 12, 30, 06, 45, 12)` na wartość typu `time`.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
