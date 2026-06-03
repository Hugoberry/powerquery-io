---
title: Number.From
---

# Number.From


Tworzy liczbę na podstawie danej wartości.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Zwraca wartość typu `number` z danej wartości parametru `value`. Można także określić opcjonalny parametr `culture` (na przykład „en-US”). Jeśli dany parametr `value` ma wartość `null`, funkcja `Number.From` zwraca wartość `null`. Jeśli dany parametr `value` ma wartość typu `number`, zwracana jest wartość `value`. Na wartość typu `number` można konwertować wartości następujących typów:

-   `text`: wartość typu `number` z reprezentacji tekstowej. Obsługiwane są typowe formaty tekstowe („15”, „3 423,10”, „5,0E-10”). Zobacz opis funkcji `Number.FromText`, aby uzyskać szczegółowe informacje.
-   `logical`: 1 dla wartości `true`, 0 dla wartości `false`.
-   `datetime`: liczba zmiennoprzecinkowa o podwójnej precyzji, która zawiera odpowiednik daty automatyzacji łączenia i osadzania obiektów.
-   `datetimezone`: liczba zmiennoprzecinkowa o podwójnej precyzji, która zawiera odpowiednik daty automatyzacji łączenia i osadzania obiektów dla lokalnej daty i godziny określonej w parametrze `value`.
-   `date`: liczba zmiennoprzecinkowa o podwójnej precyzji, która zawiera odpowiednik daty automatyzacji łączenia i osadzania obiektów.
-   `time`: wartość wyrażona w ułamkowych dniach.
-   `duration`: wartość wyrażona w całych i ułamkowych dniach.

Jeśli wartość parametru `value` jest innego typu, jest zwracany błąd.


## Examples

### Example #1
Pobierz wartość typu `number` z wartości `"4"`.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Pobierz wartość typu `number` z wartości `#datetime(2020, 3, 20, 6, 0, 0)`.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3
Pobierz wartość `number` z `"12.3%"`.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
