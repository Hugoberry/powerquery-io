---
title: DB2.Database
---

# DB2.Database


Returnează un tabel de tabele și vizualizări SQL disponibile într-o bază de date Db2.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Returnează un tabel de tabele și vizualizări SQL disponibile într-o bază de date Db2 de pe serverul `server`, din instanța de bază de date cu numele `database`. Portul poate fi specificat opțional împreună cu serverul, separat prin două puncte. Un parametru opțional de înregistrare, `options`, poate fi specificat pentru a controla următoarele opțiuni:

-   `CreateNavigationProperties` : O valoare logică (true/false) care setează dacă se generează proprietăți de navigare pentru valorile returnate (valoarea implicită este true).
-   `NavigationPropertyNameGenerator` : O funcție utilizată pentru crearea numelor proprietăților de navigare.
-   `Query` : O interogare SQL nativă utilizată pentru a prelua date. Dacă interogarea produse mai multe seturi de rezultate, doar primul va fi returnat.
-   `CommandTimeout` : O durată care controlează cât timp poate rula interogarea de partea serverului înainte să fie anulată. Valoarea implicită este de zece minute.
-   `ConnectionTimeout` : O durată care controlează cât timp se așteaptă înainte de a abandona o încercare de a face o conexiune la server. Valoarea implicită depinde de driver.
-   `HierarchicalNavigation` : O valoare logică (true/false) care setează dacă se vizualizează tabelele grupate după numele schemelor (valoarea implicită este false).
-   `Implementation` : Specifică implementarea furnizorului intern de baze de date care se va utiliza. Valorile valide sunt: „IBM” și „Microsoft”.
-   `BinaryCodePage` : Un număr pentru CCSID (Coded Character Set Identifier - identificator set de caractere codat) pentru a decoda datele binare DB2 FOR BIT în șiruri de caractere. Se aplică pentru implementarea = “Microsoft”. Setați la 0 pentru a dezactiva conversia (implicit). Setați la 1 pentru a face conversia pe baza codificării bazei de date. Setați alt număr CCSID pentru a face conversia la codificarea aplicației.
-   `PackageCollection` : Specifică o valoare șir de caractere pentru colecția de pachete (valoarea implicită este „NULLID”) pentru a activa utilizarea pachetelor partajate necesare pentru a procesa instrucțiunile SQL. Se aplică pentru Implementation = "Microsoft".
-   `UseDb2ConnectGateway` : Specifică dacă conexiunea este efectuată prin intermediul unui gateway Db2 Connect. Se aplică la Implementare = "Microsoft".

Parametrul de înregistrare este specificat ca \[opțiune1 = valoare1, opțiune2 = valoare2...\] sau \[Query = "select ..."\], de exemplu.



## Category
Accessing data
