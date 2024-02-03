---
title: AnalysisServices.Databases
---

# AnalysisServices.Databases


## Description

Returnează bazele de date Analysis Services de la o gazdă anume.


## Syntax

```powerquery
AnalysisServices.Databases(
    server as text,
    optional options as record
) as table
```


## Details

Returnează bazele de date dintr-o instanță Analysis Services, <code>server</code>. Poate fi furnizat un parametru de înregistrare opțional, <code>options</code>, pentru a specifica proprietăți suplimentare. Înregistrarea poate conține următoarele câmpuri:    <ul><li><code>TypedMeasureColumns</code> : O valoare logică ce indică dacă tipurile specificate &#238;n modelul tabelar sau multidimensional va fi utilizat pentru tipurile de coloane cu măsură adăugată. Atunci c&#226;nd este setată la false, „numărul” tipului va fi utilizat pentru toate coloanele cu măsuri. Valoarea implicită pentru această opțiune este false.</li><li><code>Culture</code> : Un nume de cultură care specifică cultura datelor. Acesta corespunde cu proprietatea șirului de conexiune „Identificator setări regionale”.</li><li><code>CommandTimeout</code> : O durată care controlează c&#226;t timp poate rula interogarea de partea serverului &#238;nainte să fie anulată. Valoarea implicită depinde de driver.</li><li><code>ConnectionTimeout</code> : O durată care controlează c&#226;t timp se așteaptă &#238;nainte de a abandona o &#238;ncercare de a face o conexiune la server. Valoarea implicită depinde de driver.</li><li><code>SubQueries</code> : Un număr (0, 1 sau 2) care setează valoarea proprietății „SubQueries” &#238;n șirul de conexiune. Aceasta controlează comportamentul membrilor calculați la subselectări sau subcuburi. (Valoarea implicită este 2).</li><li><code>Implementation</code></li></ul>    



## Category
Accessing data
