---
title: List.Modes
---

# List.Modes


## Description

Vraća listu vrednosti koje se najčešće pojavljuju na listi.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

Vraća stavku koja se najčešće pojavljuje na listi, <code>list</code>. Ako je lista prazna, vraća se izuzetak. Ako se više stavki pojavljuje sa istom maksimalnom učestalošću, bira se poslednja.    Može se navesti opcionalna vrednost <code>comparisonCriteria</code>, <code>equationCriteria</code>, radi kontrole testiranja jednakosti. 


## Examples

### Example #1 
Pronalaženje stavki koje se najčešće pojavljuju na listi &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
