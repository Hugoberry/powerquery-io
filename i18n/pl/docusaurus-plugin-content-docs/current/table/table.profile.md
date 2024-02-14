---
title: Table.Profile
---

# Table.Profile


Zwraca profil kolumn tabeli.


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Remarks

Zwraca profil kolumn w: <code>table</code>.<br />Dla każdej kolumny są zwracane następujące informacje (jeśli mają zastosowanie):<ul>  <li>wartość minimalna</li>  <li>wartość maksymalna</li>  <li>średnia</li>  <li>odchylenie standardowe</li>  <li>liczba</li>  <li>liczba wartości null</li>  <li>liczba wartości odrębnych</li></ul><br />



## Category
Table.Information
