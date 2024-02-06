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

Zwraca tabelę modułów pogrupowanych według serwera Essbase z wystąpienia programu Essbase na serwerze APS <code>url</code>. Możliwe jest określenie opcjonalnego parametru rekordu <code>options</code> w celu kontrolowania następujących opcji:     <ul><li><code>CommandTimeout</code> : Czas określający, jak długo może być wykonywane zapytanie po stronie serwera, zanim zostanie anulowane. Wartość domyślna wynosi dziesięć minut.</li></ul>



## Category
Accessing data
