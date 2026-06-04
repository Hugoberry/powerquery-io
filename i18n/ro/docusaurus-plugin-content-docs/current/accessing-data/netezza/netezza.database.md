---
title: Netezza.Database
---

# Netezza.Database


Importați date dintr-o bază de date IBM Netezza.


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Returnează un tabel de tabele, vizualizări și funcții Netezza stocate din baza de date Netezza Server `database` de pe serverul `server`. Portul poate fi specificat opțional împreună cu serverul, separat de semnul două puncte. Un parametru opțional de înregistrare, `options`, poate fi specificat pentru a controla următoarele opțiuni:

-   `CreateNavigationProperties`: O valoare logică (true/false) care stabilește dacă se generează proprietățile de navigare pentru valorile returnate (valoarea implicită este true)
-   `HierarchicalNavigation`: O valoare logică (true/false) care stabilește dacă se vizualizează tabelele grupate după numele schemelor (valoarea implicită este false)
-   `ConnectionTimeout`: O durată care controlează cât timp se așteaptă până la abandonarea unei încercări de a realiza o conexiune la server. Valoarea implicită depinde de driver.
-   `CommandTimeout`: O durată care controlează care controlează cât timp îi este permis interogării de pe partea server să ruleze înainte de a fi revocată. Valoarea implicită depinde de driver.
-   `NormalizeDatabaseName`: O valoare logică (true/false) care stabilește dacă normalizează numele bazei de date la majuscule sau îl interpretează literal (implicit este true).

Parametrul înregistrare este specificat ca \[opțiune1 = valoare1, opțiune2 = valoare2...\].


## Examples

### Example #1
Listați tabelele dintr-un proiect IBM Netezza.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



