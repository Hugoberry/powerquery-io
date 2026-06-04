---
title: OleDb.DataSource
---

# OleDb.DataSource


Returnează un tabel de tabele SQL și vizualizări din sursa de date OLE DB.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Returnează un tabel de tabele SQL și vizualizări din sursa de date OLE DB specificată de șirul de conexiune `connectionString`. `connectionString` poate fi text sau o înregistrare cu perechi proprietăți-valoare. Valorile proprietăților pot fi text sau numere. Poate fi furnizat un parametru de înregistrare opțional `options` pentru a specifica proprietăți suplimentare. Înregistrarea poate conține următoarele câmpuri:

-   `CreateNavigationProperties` : O valoare logică (true/false) care setează dacă se generează proprietăți de navigare pentru valorile returnate (valoarea implicită este true).
-   `NavigationPropertyNameGenerator` : O funcție utilizată pentru crearea numelor proprietăților de navigare.
-   `Query` : O interogare SQL nativă utilizată pentru a prelua date. Dacă interogarea produse mai multe seturi de rezultate, doar primul va fi returnat.
-   `HierarchicalNavigation` : O valoare logică (true/false) care setează dacă se vizualizează tabelele grupate după numele schemelor (valoarea implicită este true).
-   `ConnectionTimeout` : O durată care controlează cât timp se așteaptă înainte de a abandona o încercare de a face o conexiune la server. Valoarea implicită depinde de driver.
-   `CommandTimeout` : O durată care controlează cât timp poate rula interogarea de partea serverului înainte să fie anulată. Valoarea implicită este de zece minute.
-   `SqlCompatibleWindowsAuth` : O valoare logică (true/false) ce determină dacă se produc opțiuni șir de conexiune compatibile cu SQL Server pentru autentificarea Windows. Valoarea implicită este true.

Parametrul de înregistrare este specificat ca \[opțiune1 = valoare1, opțiune2 = valoare2...\] sau \[Query = "select ..."\], de exemplu.



## Category
Accessing data
