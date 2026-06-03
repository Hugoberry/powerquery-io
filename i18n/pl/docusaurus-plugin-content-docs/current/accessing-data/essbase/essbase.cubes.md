---
title: Essbase.Cubes
---

# Essbase.Cubes


Zwraca moduły w ramach wystąpienia programu Essbase pogrupowane według serwera Essbase.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Remarks

Zwraca tabelę modułów pogrupowanych według serwera Essbase z wystąpienia programu Essbase na serwerze APS `url`. Możliwe jest określenie opcjonalnego parametru rekordu `options` w celu kontrolowania następujących opcji:

-   `CommandTimeout` : Czas określający, jak długo może być wykonywane zapytanie po stronie serwera, zanim zostanie anulowane. Wartość domyślna wynosi dziesięć minut.



## Category
Accessing data
