---
title: OleDb.DataSource
---

# OleDb.DataSource


## Description

Returnează un tabel de tabele SQL și vizualizări din sursa de date OLE DB.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Details

Returnează un tabel de tabele SQL și vizualizări din sursa de date OLE DB specificată de șirul de conexiune <code>connectionString</code>. <code>connectionString</code> poate fi text sau o înregistrare cu perechi proprietăți-valoare. Valorile proprietăților pot fi text sau numere. Poate fi furnizat un parametru de înregistrare opțional, <code>options</code>, pentru a specifica proprietăți suplimentare. Înregistrarea poate conține următoarele câmpuri:    <ul><li><code>CreateNavigationProperties</code> : O valoare logică (true/false) care setează dacă se generează proprietăți de navigare pentru valorile returnate (valoarea implicită este true).</li><li><code>NavigationPropertyNameGenerator</code> : O funcție utilizată pentru crearea numelor proprietăților de navigare.</li><li><code>Query</code> : O interogare SQL nativă utilizată pentru a prelua date. Dacă interogarea produse mai multe seturi de rezultate, doar primul va fi returnat.</li><li><code>HierarchicalNavigation</code> : O valoare logică (true/false) care setează dacă se vizualizează tabelele grupate după numele schemelor (valoarea implicită este true).</li><li><code>ConnectionTimeout</code> : O durată care controlează c&#226;t timp se așteaptă &#238;nainte de a abandona o &#238;ncercare de a face o conexiune la server. Valoarea implicită depinde de driver.</li><li><code>CommandTimeout</code> : O durată care controlează c&#226;t timp poate rula interogarea de partea serverului &#238;nainte să fie anulată. Valoarea implicită este de zece minute.</li><li><code>SqlCompatibleWindowsAuth</code> : O valoare logică (true/false) ce determină dacă se produc opțiuni șir de conexiune compatibile cu SQL Server pentru autentificarea Windows. Valoarea implicită este true.</li></ul>    Parametrul de înregistrare este specificat ca [opțiune1 = valoare1, opțiune2 = valoare2...] sau [Query = "select ..."], de exemplu.



## Category
Accessing data
