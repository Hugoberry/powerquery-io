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

Zwraca dane modułu z usługi AtScale na serwerze <code>server</code>. Można podać opcjonalny parametr rekordu, <code>options</code>, aby sterować następującymi opcjami:<ul>        <li><code>TypedMeasureColumns</code>: wartość logiczna wskazująca, czy typy określone w modelu wielowymiarowym lub tabelarycznym będą używane jako typy dodanych kolumn miar. W przypadku ustawienia wartości false wszystkie kolumny miar będą miały typ „number”. Wartość domyślna tej opcji to false.</li>        <li><code>CommandTimeout</code>: czas trwania (w sekundach) określający, jak długo zapytanie po stronie serwera może być uruchomione, zanim zostanie anulowane. Wartość domyślna zależy od sterownika. </li>        <li><code>ConnectionTimeout</code>: czas trwania (w sekundach) określający, jak długo czekać przed porzuceniem próby nawiązania połączenia z serwerem. Wartość domyślna zależy od sterownika. </li></ul>Parametr rekordu jest określany w formacie [opcja1 = wartość1, opcja2 = wartość2...].


