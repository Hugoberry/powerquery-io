---
title: Netezza.Database
---

# Netezza.Database


## Description

Importați date dintr-o bază de date IBM Netezza.


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Returnează un tabel de tabele, vizualizări și funcții Netezza stocate din baza de date Netezza Server <code>database</code> de pe serverul <code>server</code>. Portul poate fi specificat opțional împreună cu serverul, separat de semnul două puncte. Un parametru opțional de înregistrare, <code>options</code>, poate fi specificat pentru a controla următoarele opțiuni:<ul>        <li><code>CreateNavigationProperties</code>: O valoare logică (true/false) care stabilește dacă se generează proprietățile de navigare pentru valorile returnate (valoarea implicită este true)</li>        <li><code>HierarchicalNavigation</code>: O valoare logică (true/false) care stabilește dacă se vizualizează tabelele grupate după numele schemelor (valoarea implicită este false)</li>        <li><code>ConnectionTimeout</code>: O durată care controlează cât timp se așteaptă până la abandonarea unei încercări de a realiza o conexiune la server. Valoarea implicită depinde de driver.</li>        <li><code>CommandTimeout</code>: O durată care controlează care controlează cât timp îi este permis interogării de pe partea server să ruleze înainte de a fi revocată. Valoarea implicită depinde de driver.</li><li><code>NormalizeDatabaseName</code>: O valoare logică (true/false) care stabilește dacă normalizează numele bazei de date la majuscule sau îl interpretează literal (implicit este true).</li></ul>Parametrul înregistrare este specificat ca [opțiune1 = valoare1, opțiune2 = valoare2...].


## Examples

### Example #1 
Listați tabelele dintr-un proiect IBM Netezza.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



