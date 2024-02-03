---
title: List.Distinct
---

# List.Distinct


## Description

Pateikiamas reikšmių sąrašas su pašalintais pasikartojimais.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

Pateikiamas sąrašas, kuriame yra visos sąrašo reikšmės <code>list</code> su pašalintais pasikartojimais. Jei sąrašas tuščias, rezultatas yra tuščias sąrašas.


## Examples

### Example #1 
Pašalinkite iš sąrašo pasikartojimus \{1, 1, 2, 3, 3, 3}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
List.Selection
