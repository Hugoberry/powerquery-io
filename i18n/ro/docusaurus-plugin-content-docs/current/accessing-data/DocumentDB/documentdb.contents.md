---
title: DocumentDB.Contents
---

# DocumentDB.Contents


Introduceți adresa URL a unui cont Azure Cosmos DB.


## Syntax

```powerquery
DocumentDB.Contents(
    url as text,
    optional database as text,
    optional collection as text,
    optional options as record
) as table
```


## Remarks

Returnează un tabel al bazelor de date Azure Cosmos DB de la `url`. Dacă se specifică `database`, se va returna în schimb un tabel de colecții. În plus, dacă este specificat câmpul `Query` în înregistrarea `options`, se vor returna rezultatele interogării executate pentru baza de date și/sau colecția specificată.


