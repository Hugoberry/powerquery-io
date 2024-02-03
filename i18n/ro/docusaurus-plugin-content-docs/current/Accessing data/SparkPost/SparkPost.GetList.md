---
title: SparkPost.GetList
---

# SparkPost.GetList



## Syntax

```powerquery
SparkPost.GetList(
    path as text
) as table
```


## Details

Această funcție se poate utiliza pentru a apela oricare dintre punctele finale „Liste” oferite de API-ul SparkPost v1. Atunci când apelați API-ul SparkPost folosind această funcție, rețineți că API-ul SparkPost are o limită de rată API strictă. Dacă vedeți un cod de stare 429 returnat de serverul SparkPost, ați atins limita de rată și va trebui să așteptați câteva clipe înainte de a face mai multe apeluri.


## Examples

### Example #1 
Returnează un tabel cu o singură coloană completată cu date de la unul dintre punctele finale „Liste” v1 API SparkPost (consultați documentația SparkPost pentru detalii).
```powerquery
Source = SparkPost.GetList("metrics/campaigns")
```

Result: 
```powerquery
Json.Document
```



