---
title: DocumentDB.Contents
---

# DocumentDB.Contents


Azure Cosmos DB hesabına ilişkin bir URL girin.


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

`url` adresinde bulunan Azure Cosmos DB veritabanlarına ilişkin bir tablo döndürür. `database` belirtilirse bunun yerine koleksiyonlara ilişkin bir tablo döndürülür. Ayrıca `options` kaydında `Query` alanı belirtilirse belirtilen veritabanında ve/veya koleksiyonda yürütülen sorguya ilişkin sonuçlar döndürülür.


