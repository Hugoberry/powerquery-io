---
title: HdInsight.Containers
---

# HdInsight.Containers


Zwraca tabelę nawigacji zawierającą kontenery znalezione na określonym koncie z magazynu systemu Azure.


## Syntax

```powerquery
HdInsight.Containers(
    account as text
) as table
```


## Remarks

Zwraca tabelę nawigacji zawierającą wiersz każdego kontenera znalezionego pod adresem URL konta (`account`) z magazynu systemu Azure. Każdy wiersz zawiera link do obiektów blob kontenera.



## Category
Accessing data
