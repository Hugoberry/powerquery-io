---
title: List.Modes
---

# List.Modes


Vraća listu vrednosti koje se najčešće pojavljuju na listi.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Vraća stavke koje se najčešće pojavljuju na lokaciji `list`. Ako je lista prazna, javlja se greška. Ako se više stavki pojavi sa istom maksimalnom učestalošću, sve se vraćaju. Opciona vrednost kriterijuma poređenja, `equationCriteria`, može da se navede za kontrolu testiranja jednakosti.


## Examples

### Example #1
Pronalaženje stavki koje se najčešće pojavljuju na listi `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
