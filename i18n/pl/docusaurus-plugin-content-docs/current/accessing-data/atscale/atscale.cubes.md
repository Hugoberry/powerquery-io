---
title: AtScale.Cubes
---

# AtScale.Cubes


Zaimportuj dane modułu z usługi AtScale lub zastosuj dla nich tryb DirectQuery.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Remarks

Zwraca dane modułu z usługi AtScale na serwerze `server`. Można podać opcjonalny parametr rekordu, `options`, aby sterować następującymi opcjami:

-   `TypedMeasureColumns`: wartość logiczna wskazująca, czy typy określone w modelu wielowymiarowym lub tabelarycznym będą używane jako typy dodanych kolumn miar. W przypadku ustawienia wartości false wszystkie kolumny miar będą miały typ „number”. Wartość domyślna tej opcji to false.
-   `CommandTimeout`: czas trwania (w sekundach) określający, jak długo zapytanie po stronie serwera może być uruchomione, zanim zostanie anulowane. Wartość domyślna zależy od sterownika.
-   `ConnectionTimeout`: czas trwania (w sekundach) określający, jak długo czekać przed porzuceniem próby nawiązania połączenia z serwerem. Wartość domyślna zależy od sterownika.

Parametr rekordu jest określany w formacie \[opcja1 = wartość1, opcja2 = wartość2...\].


## Examples

### Example #1
Wyświetl listę danych w module AtScale.
```powerquery
AtScale.Cubes("https://contoso.atscale.com:10502/xmla/...")
```



