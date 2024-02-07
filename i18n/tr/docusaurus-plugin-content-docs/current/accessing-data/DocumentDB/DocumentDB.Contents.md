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

<code>url</code> adresinde bulunan Azure Cosmos DB veritabanlarına ilişkin bir tablo döndürür. <code>database</code> belirtilirse bunun yerine koleksiyonlara ilişkin bir tablo döndürülür. Ayrıca <code>options</code> kaydında <code>Query</code> alanı belirtilirse belirtilen veritabanında ve/veya koleksiyonda yürütülen sorguya ilişkin sonuçlar döndürülür.


