---
title: DocumentDB.Contents
---

# DocumentDB.Contents


Masukkan URL untuk akaun Azure Cosmos DB.


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

Mengembalikan jadual pangkalan data Azure Cosmos DB di `url`. Jika `pangkalan data` ditentukan, jadual koleksi akan dikembalikan. Selain itu, jika medan `Pertanyaan` ditentukan dalam rekod `opsyen`, hasil pertanyaan yang dijalankan pada sama ada pangkalan data yang ditentukan dan/atau koleksi akan dikembalikan.


