---
title: List.Union
---

# List.Union


## Description

Vraća združene vrednosti liste pronađene u unosu.


## Syntax

```powerquery
List.Union(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

Uzima spisak lista <code>lists</code>, pravi uniju stavki sa pojedinačnih lista i vraća ih u vidu izlazne liste. U skladu sa time, vraćena lista sadrži sve stavke iz izlaznih lista.    Ova operacija koristi tradicionalnu semantiku duplikata elemenata, tako da se duplirane vrednosti uparuju u okviru unije.    Može se navesti opcionalna vrednost kriterijuma jednakosti, <code>equationCriteria</code>, radi kontrole testiranja jednakosti. 


## Examples

### Example #1 
Kreiranje unije liste \{1..5}, \{2..6}, \{3..7}.
```powerquery
List.Union({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7}
```




## Category
List.Set operations
