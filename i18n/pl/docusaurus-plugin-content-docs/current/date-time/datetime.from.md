---
title: DateTime.From
---

# DateTime.From


Tworzy wartość typu datetime na podstawie danej wartości.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

Zwraca wartość typu `datetime` z danej wartości parametru `value`. Można także określić opcjonalny parametr `culture` (na przykład „en-US”). Jeśli dany parametr `value` ma wartość `null`, funkcja `DateTime.From` zwraca wartość `null`. Jeśli dany parametr `value` ma wartość typu `datetime`, zwracana jest wartość `value`. Na wartość typu `datetime` można konwertować wartości następujących typów:

-   `text`: wartość typu `datetime` z reprezentacji tekstowej. Zapoznaj się z opisem funkcji `DateTime.FromText`, aby uzyskać szczegółowe informacje.
-   `date`: wartość typu `datetime` z wartością `value` jako składnikiem daty i wartością `12:00:00 AM` jako składnikiem godziny.
-   `datetimezone`: lokalny odpowiednik wartości `value` w formacie `datetime`.
-   `time`: wartość typu `datetime` z odpowiednikiem daty w formacie daty automatyzacji łączenia i osadzania obiektów o wartości `0` jako składnikiem daty i wartością `value` jako składnikiem godziny.
-   `number`: odpowiednik wartości typu `datetime` w formacie daty automatyzacji łączenia i osadzania obiektów wyrażony przez wartość `value`.

Jeśli wartość parametru `value` jest innego typu, zwracany jest błąd.


## Examples

### Example #1
Przekonwertuj wartość `#time(06, 45, 12)` na wartość typu `datetime`.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2
Przekonwertuj wartość `#date(1975, 4, 4)` na wartość typu `datetime`.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
