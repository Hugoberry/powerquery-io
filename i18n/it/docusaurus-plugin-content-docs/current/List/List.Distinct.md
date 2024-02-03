---
title: List.Distinct
---

# List.Distinct


## Description

Restituisce l&#39;elenco dei valori con i duplicati rimossi.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

Restituisce un elenco che contiene tutti i valori dell'elenco <code>list</code> con i duplicati rimossi. Se l'elenco è vuoto, il risultato è un elenco vuoto.


## Examples

### Example #1 
Rimuovere i duplicati dall&#39;elenco \{1, 1, 2, 3, 3, 3}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
List.Selection
