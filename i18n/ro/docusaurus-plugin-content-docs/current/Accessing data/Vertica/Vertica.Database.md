---
title: Vertica.Database
---

# Vertica.Database


## Description

Importați date din Vertica


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Returnează un tabel de scheme disponibile pe serverul numit de parametrul <code>server</code>, în baza de date numită de parametrul <code>database</code>.Un parametru de înregistrare opțional, <code>options</code>, poate fi furnizat pentru a specifica proprietăți suplimentare. Înregistrarea poate conține următoarele câmpuri:<ul>    <li><code>ConnectionTimeout</code>: o durată care controlează cât se așteaptă înainte de a abandona încercarea de a realiza o conexiune la server. Valoarea implicită depinde de driver.</li>    <li><code>CommandTimeout </code>: o durată care controlează cât timp poate rula interogarea de partea serverului înainte să fie anulată. Valoarea implicită depinde de driver.</li></ul>


## Examples

### Example #1 
Listați tabelele din Vertica
```powerquery

```



