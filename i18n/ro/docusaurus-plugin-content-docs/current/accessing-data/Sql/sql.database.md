---
title: Sql.Database
---

# Sql.Database


Returnează un tabel de tabele SQL, vizualizări şi funcţii stocate din baza de date SQL Server.


## Syntax

```powerquery
Sql.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Returnează un tabel cu tabele, vizualizări și funcții stocate SQL din baza de date SQL Server `database` de pe serverul `server`. Portul poate fi specificat opțional împreună cu serverul, separat prin virgulă sau două puncte. Un parametru opțional de înregistrare, `options`, poate fi specificat pentru a controla următoarele opțiuni:

-   `Query` : O interogare SQL nativă utilizată pentru a prelua date. Dacă interogarea produse mai multe seturi de rezultate, doar primul va fi returnat.
-   `CreateNavigationProperties` : O valoare logică (true/false) care setează dacă se generează proprietăți de navigare pentru valorile returnate (valoarea implicită este true).
-   `NavigationPropertyNameGenerator` : O funcție utilizată pentru crearea numelor proprietăților de navigare.
-   `MaxDegreeOfParallelism` : Un număr care setează valoarea clauzei de interogare „maxdop” în interogarea SQL generată.
-   `CommandTimeout` : O durată care controlează cât timp poate rula interogarea de partea serverului înainte să fie anulată. Valoarea implicită este de zece minute.
-   `ConnectionTimeout` : O durată care controlează cât timp se așteaptă înainte de a abandona o încercare de a face o conexiune la server. Valoarea implicită depinde de driver.
-   `HierarchicalNavigation` : O valoare logică (true/false) care setează dacă se vizualizează tabelele grupate după numele schemelor (valoarea implicită este false).
-   `MultiSubnetFailover` : O valoare logică (true/false) care setează valoarea proprietății „MultiSubnetFailover” din șirul de conexiune (valoarea implicită este false).
-   `UnsafeTypeConversions` : O valoare logică (true/false) care, dacă este true, încearcă să reformuleze conversiile de tip care ar putea eșua și face întreaga interogare să eșueze. Nu se recomandă pentru utilizare generală.
-   `ContextInfo` : O valoare binară utilizată pentru a seta CONTEXT\_INFO înainte de rularea fiecărei comenzi.
-   `OmitSRID` : O valoare logică (true/false) care, dacă este true, omite SRID atunci când produce text Well-Known Text din tipurile de geometrii și geografii.
-   `EnableCrossDatabaseFolding` : O valoare logică (True/False) care, dacă este True, permite plierea interogărilor în bazele de date de pe același server. Valoarea implicită este False.

Parametrul de înregistrare este specificat ca \[opțiune1 = valoare1, opțiune2 = valoare2...\] sau \[Query = "select ..."\], de exemplu.



## Category
Accessing data
