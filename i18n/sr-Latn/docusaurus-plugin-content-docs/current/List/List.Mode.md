---
title: List.Mode
---

# List.Mode


## Description

Vraća najčešću vrednost sa liste.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Details

Vraća stavku koja se najčešće pojavljuje na listi, <code>list</code>. Ako je lista prazna, vraća se izuzetak. Ako se više stavki pojavljuje sa istom maksimalnom učestalošću, bira se poslednja.    Može se navesti opcionalna vrednost <code>comparisonCriteria</code>, <code>equationCriteria</code>, radi kontrole testiranja jednakosti. 


## Examples

### Example #1 
Pronalaženje stavke koja se najčešće pojavljuje na listi &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5}&lt;/code&gt;.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2 
Pronalaženje stavke koja se najčešće pojavljuje na listi &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
