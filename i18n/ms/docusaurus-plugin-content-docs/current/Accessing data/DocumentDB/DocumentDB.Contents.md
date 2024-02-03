---
title: DocumentDB.Contents
---

# DocumentDB.Contents


## Description

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


## Details

Mengembalikan jadual pangkalan data Azure Cosmos DB di <code>url</code>. Jika <code>pangkalan data</code> ditentukan, jadual koleksi akan dikembalikan. Selain itu, jika medan <code>Pertanyaan</code> ditentukan dalam rekod <code>opsyen</code>, hasil pertanyaan yang dijalankan pada sama ada pangkalan data yang ditentukan dan/atau koleksi akan dikembalikan.


