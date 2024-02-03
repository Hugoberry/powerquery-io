---
title: Sql.Databases
---

# Sql.Databases


## Description

Returnează un table de baze de date pe un server SQL Server.


## Syntax

```powerquery
Sql.Databases(
    server as text,
    optional options as record
) as table
```


## Details

Returnează un tabel cu bazele de date pe serverul SQL Server specificat, <code>server</code>. Poate fi specificat un parametru de înregistrare opțional, <code>options</code>, pentru a controla următoarele opțiuni:    <ul><li><code>CreateNavigationProperties</code> : O valoare logică (true/false) care setează dacă se generează proprietăți de navigare pentru valorile returnate (valoarea implicită este true).</li><li><code>NavigationPropertyNameGenerator</code> : O funcție utilizată pentru crearea numelor proprietăților de navigare.</li><li><code>MaxDegreeOfParallelism</code> : Un număr care setează valoarea clauzei de interogare „maxdop” &#238;n interogarea SQL generată.</li><li><code>CommandTimeout</code> : O durată care controlează c&#226;t timp poate rula interogarea de partea serverului &#238;nainte să fie anulată. Valoarea implicită este de zece minute.</li><li><code>ConnectionTimeout</code> : O durată care controlează c&#226;t timp se așteaptă &#238;nainte de a abandona o &#238;ncercare de a face o conexiune la server. Valoarea implicită depinde de driver.</li><li><code>HierarchicalNavigation</code> : O valoare logică (true/false) care setează dacă se vizualizează tabelele grupate după numele schemelor (valoarea implicită este false).</li><li><code>MultiSubnetFailover</code> : O valoare logică (true/false) care setează valoarea proprietății „MultiSubnetFailover” din șirul de conexiune (valoarea implicită este false).</li><li><code>UnsafeTypeConversions</code> : O valoare logică (true/false) care, dacă este true, &#238;ncearcă să reformuleze conversiile de tip care ar putea eșua și face &#238;ntreaga interogare să eșueze. Nu se recomandă pentru utilizare generală.</li><li><code>ContextInfo</code> : O valoare binară utilizată pentru a seta CONTEXT_INFO &#238;nainte de rularea fiecărei comenzi.</li><li><code>OmitSRID</code> : O valoare logică (true/false) care, dacă este true, omite SRID atunci c&#226;nd produce text Well-Known Text din tipurile de geometrii și geografii.</li><li><code>EnableCrossDatabaseFolding</code> : O valoare logică (True/False) care, dacă este True, permite plierea interogărilor &#238;n bazele de date de pe același server. Valoarea implicită este False.</li></ul>    Parametrul de înregistrare este specificat ca [opțiune1 = valoare1, opțiune2 = valoare2...], de exemplu.    <br />    Nu acceptă setarea unei interogări SQL care să ruleze pe server. Trebuie utilizată comanda <code>Sql.Database</code> în schimb pentru a rula o interogare SQL.    



## Category
Accessing data
