---
title: List.Buffer
---

# List.Buffer


## Description

Uloží zoznam do medzipamäte.


## Syntax

```powerquery
List.Buffer(
    list as list
) as list
```


## Details

Uloží zoznam <code>list</code> do medzipamäte. Výsledkom tohto volania je stabilný zoznam.


## Examples

### Example #1 
Vytvorte stabilnú kópiu zoznamu \{1..10}.
```powerquery
List.Buffer({1..10})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```




## Category
List.Selection