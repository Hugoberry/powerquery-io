---
title: DocumentDB.Contents
---

# DocumentDB.Contents


## Description

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


## Details

Returnează un tabel al bazelor de date Azure Cosmos DB de la <code>url</code>. Dacă se specifică <code>database</code>, se va returna în schimb un tabel de colecții. În plus, dacă este specificat câmpul <code>Query</code> în înregistrarea <code>options</code>, se vor returna rezultatele interogării executate pentru baza de date și/sau colecția specificată.


