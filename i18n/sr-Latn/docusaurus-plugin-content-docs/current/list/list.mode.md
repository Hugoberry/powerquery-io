---
title: List.Mode
---

# List.Mode


Vraća najčešću vrednost sa liste.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Remarks

Vraća stavku koja se najčešće pojavljuje u `list`. Ako je lista prazna, javlja se greška. Ako se više stavki pojavljuje sa istom maksimalnom učestalošću, bira se poslednja. Opciona vrednost kriterijuma poređenja, `equationCriteria`, može da se navede za kontrolu testiranja jednakosti.


## Examples

### Example #1
Pronalaženje stavke koja se najčešće pojavljuje na listi `{"A", 1, 2, 3, 3, 4, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2
Pronalaženje stavke koja se najčešće pojavljuje na listi `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
