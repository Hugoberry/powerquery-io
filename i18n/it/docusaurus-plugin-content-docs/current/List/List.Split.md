---
title: List.Split
---

# List.Split


## Description

Divide l&#39;elenco specificato in un elenco di elenchi usando le dimensioni di pagina specificate.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Details

Divide <code>list</code> in un elenco di elenchi in cui il primo elemento dell'elenco di output è un elenco contenente i primi <code>pageSize</code> elementi dell' elenco di origine, l'elemento successivo dell'elenco di output è un elenco contenente i successivi <code>pageSize</code> elementi dell'elenco di origine e così via.



## Category
List.Transformation functions
