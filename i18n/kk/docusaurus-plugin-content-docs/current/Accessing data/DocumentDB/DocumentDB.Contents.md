---
title: DocumentDB.Contents
---

# DocumentDB.Contents


## Description

Azure Cosmos DB тіркелгісінің URL мекенжайын енгізіңіз.


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

Azure Cosmos DB дерекқорларының кестесін <code>url</code> мекенжайында қайтарады. Егер <code>дерекқор</code> көрсетілсе, оның орнына жинақтар кестесі қайтарылады. Сонымен қатар, егер <code>Сұрау</code> өрісі <code>параметрлер</code>жазбасында көрсетілсе, көрсетілген дерекқорда және/немесе жинақта орындалып жатқан сұрау нәтижелері қайтарылады.


