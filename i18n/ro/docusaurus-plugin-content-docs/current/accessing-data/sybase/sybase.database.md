---
title: Sybase.Database
---

# Sybase.Database


Returnează un tabel de tabele şi vizualizări SQL disponibile într-o bază de date Sybase.


## Syntax

```powerquery
Sybase.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Returnează un tabel de tabele și vizualizări SQL disponibile într-o bază de date Sybase de pe serverul `server` în instanța de bază de date cu numele `database`. Portul poate fi specificat opțional împreună cu serverul, separat prin două puncte. Un parametru opțional de înregistrare, `options`, poate fi specificat pentru a controla următoarele opțiuni:

-   `CreateNavigationProperties` : O valoare logică (true/false) care setează dacă se generează proprietăți de navigare pentru valorile returnate (valoarea implicită este true).
-   `NavigationPropertyNameGenerator` : O funcție utilizată pentru crearea numelor proprietăților de navigare.
-   `Query` : O interogare SQL nativă utilizată pentru a prelua date. Dacă interogarea produse mai multe seturi de rezultate, doar primul va fi returnat.
-   `CommandTimeout` : O durată care controlează cât timp poate rula interogarea de partea serverului înainte să fie anulată. Valoarea implicită este de zece minute.
-   `ConnectionTimeout` : O durată care controlează cât timp se așteaptă înainte de a abandona o încercare de a face o conexiune la server. Valoarea implicită depinde de driver.
-   `HierarchicalNavigation` : O valoare logică (true/false) care setează dacă se vizualizează tabelele grupate după numele schemelor (valoarea implicită este false).

Parametrul de înregistrare este specificat ca \[opțiune1 = valoare1, opțiune2 = valoare2...\] sau \[Query = "select ..."\], de exemplu.



## Category
Accessing data
