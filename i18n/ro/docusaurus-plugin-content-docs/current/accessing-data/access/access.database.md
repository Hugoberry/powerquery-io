---
title: Access.Database
---

# Access.Database


Returnează o reprezentare structurală a unei baze de date Access.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Remarks

Returnează o reprezentare structurală a unei baze de date Access, `database`. Un parametru opțional de înregistrare, `options`, poate fi specificat pentru a controla următoarele opțiuni:

-   `CreateNavigationProperties` : O valoare logică (true/false) care setează dacă se generează proprietăți de navigare pentru valorile returnate (valoarea implicită este false).
-   `NavigationPropertyNameGenerator` : O funcție utilizată pentru crearea numelor proprietăților de navigare.

Parametrul de înregistrare este specificat ca \[opțiune1 = valoare1, opțiune2 = valoare2...\], de exemplu.



## Category
Accessing data
