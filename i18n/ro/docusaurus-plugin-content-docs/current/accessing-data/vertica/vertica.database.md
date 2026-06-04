---
title: Vertica.Database
---

# Vertica.Database


Importați date din Vertica


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Returnează un tabel de scheme disponibile pe serverul numit de parametrul `server`, în baza de date numită de parametrul `database`. Un parametru de înregistrare opțional, `options`, poate fi furnizat pentru a specifica proprietăți suplimentare. Înregistrarea poate conține următoarele câmpuri:

-   `ConnectionTimeout`: o durată care controlează cât se așteaptă înainte de a abandona încercarea de a realiza o conexiune la server. Valoarea implicită depinde de driver.
-   `CommandTimeout` : o durată care controlează cât timp poate rula interogarea de partea serverului înainte să fie anulată. Valoarea implicită depinde de driver.


## Examples

### Example #1
Listați tabelele din Vertica
```powerquery

```



