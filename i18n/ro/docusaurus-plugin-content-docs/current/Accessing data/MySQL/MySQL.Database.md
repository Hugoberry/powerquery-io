---
title: MySQL.Database
---

# MySQL.Database


## Description

Returnează un tabel de tabele SQL, vizualizări şi funcţii scalare stocate disponibile într-o bază de date MySQL.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Returnează un tabel de tabele, vizualizări și funcții scalare stocate SQL disponibile într-o bază de date MySQL de pe serverul <code>server</code>, în instanța de bază de date cu numele <code>database</code>. Portul poate fi specificat opțional împreună cu serverul, separat prin două puncte. Poate fi specificat un parametru de înregistrare opțional, <code>options</code>, pentru a controla următoarele opțiuni:    <ul><li><code>Encoding</code> : O valoare TextEncoding ce specifică setul de caractere utilizat pentru a codifica toate interogările trimise la server (valoarea implicită este nul).</li><li><code>CreateNavigationProperties</code> : O valoare logică (true/false) care setează dacă se generează proprietăți de navigare pentru valorile returnate (valoarea implicită este true).</li><li><code>NavigationPropertyNameGenerator</code> : O funcție utilizată pentru crearea numelor proprietăților de navigare.</li><li><code>Query</code> : O interogare SQL nativă utilizată pentru a prelua date. Dacă interogarea produse mai multe seturi de rezultate, doar primul va fi returnat.</li><li><code>CommandTimeout</code> : O durată care controlează c&#226;t timp poate rula interogarea de partea serverului &#238;nainte să fie anulată. Valoarea implicită este de zece minute.</li><li><code>ConnectionTimeout</code> : O durată care controlează c&#226;t timp se așteaptă &#238;nainte de a abandona o &#238;ncercare de a face o conexiune la server. Valoarea implicită depinde de driver.</li><li><code>TreatTinyAsBoolean</code> : O valoare logică (true/false) care determină dacă se forțează coloanele tinyint de pe server ca valori logice. Valoarea implicită este true.</li><li><code>OldGuids</code> : O valoare logică (true/false) care setează dacă coloanele char(36) (dacă este false) sau binary(16) (dacă este true) vor fi tratate ca GUID-uri. Valoarea implicită este false.</li><li><code>ReturnSingleDatabase</code> : O valoare logică (true/false) care setează dacă se returnează toate tabelele din toate bazele de date (dacă este false) sau se returnează tabelele și vizualizările bazei de date specificate (dacă este true). Valoarea implicită este false.</li><li><code>HierarchicalNavigation</code> : O valoare logică (true/false) care setează dacă se vizualizează tabelele grupate după numele schemelor (valoarea implicită este false).</li></ul>    Parametrul de înregistrare este specificat ca [opțiune1 = valoare1, opțiune2 = valoare2...] sau [Query = "select ..."], de exemplu.    



## Category
Accessing data
