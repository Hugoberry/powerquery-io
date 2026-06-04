---
title: DocumentDB.Contents
---

# DocumentDB.Contents


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


## Remarks

Azure Cosmos DB дерекқорларының кестесін `url` мекенжайында қайтарады. Егер `дерекқор` көрсетілсе, оның орнына жинақтар кестесі қайтарылады. Сонымен қатар, егер `Сұрау` өрісі `параметрлер`жазбасында көрсетілсе, көрсетілген дерекқорда және/немесе жинақта орындалып жатқан сұрау нәтижелері қайтарылады.


