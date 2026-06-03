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

Zwraca profil kolumn w: `table`.

Dla każdej kolumny są zwracane następujące informacje (jeśli mają zastosowanie):

-   wartość minimalna
-   wartość maksymalna
-   średnia
-   odchylenie standardowe
-   liczba
-   liczba wartości null
-   liczba wartości odrębnych



## Category
Table.Information
