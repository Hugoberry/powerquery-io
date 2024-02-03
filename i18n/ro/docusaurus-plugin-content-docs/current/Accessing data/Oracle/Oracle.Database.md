---
title: Oracle.Database
---

# Oracle.Database


## Description

Returnează un tabel de tabele SQL şi vizualizări din baza de date Oracle.


## Syntax

```powerquery
Oracle.Database(
    server as text,
    optional options as record
) as table
```


## Details

Returnează un tabel de tabele și vizualizări SQL din baza de date Oracle de pe serverul <code>server</code>. Portul poate fi specificat opțional împreună cu serverul, separat prin două puncte. Poate fi specificat un parametru de înregistrare opțional, <code>options</code>, pentru a controla următoarele opțiuni:    <ul><li><code>CreateNavigationProperties</code> : O valoare logică (true/false) care setează dacă se generează proprietăți de navigare pentru valorile returnate (valoarea implicită este true).</li><li><code>NavigationPropertyNameGenerator</code> : O funcție utilizată pentru crearea numelor proprietăților de navigare.</li><li><code>Query</code> : O interogare SQL nativă utilizată pentru a prelua date. Dacă interogarea produse mai multe seturi de rezultate, doar primul va fi returnat.</li><li><code>CommandTimeout</code> : O durată care controlează c&#226;t timp poate rula interogarea de partea serverului &#238;nainte să fie anulată. Valoarea implicită este de zece minute.</li><li><code>ConnectionTimeout</code> : O durată care controlează c&#226;t timp se așteaptă &#238;nainte de a abandona o &#238;ncercare de a face o conexiune la server. Valoarea implicită depinde de driver.</li><li><code>HierarchicalNavigation</code> : O valoare logică (true/false) care setează dacă se vizualizează tabelele grupate după numele schemelor (valoarea implicită este false).</li></ul>    Parametrul de înregistrare este specificat ca [opțiune1 = valoare1, opțiune2 = valoare2...] sau [Query = "select ..."], de exemplu.    



## Category
Accessing data
