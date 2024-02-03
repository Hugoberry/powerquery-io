---
title: List.Union
---

# List.Union


## Description

Vráti zjednotenie hodnôt zoznamu nájdených vo vstupe.


## Syntax

```powerquery
List.Union(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

Použije zoznam zoznamov <code>lists</code>, zjednotí položky v jednotlivých zoznamoch a vráti ich vo výstupnom zozname. Vrátený zoznam ako výsledok obsahuje všetky položky vo všetkých vstupných zoznamoch.    Táto operácia zachováva tradičnú sémantiku typu bag, a tak sa duplicitné hodnoty priradia ako súčasť zjednotenia.    Možno zadať voliteľnú hodnotu kritérií rovnosti <code>equationCriteria</code> na kontrolu testovania rovnosti. 


## Examples

### Example #1 
Vytvorte zjednotenie zoznamu \{1..5}, \{2..6}, \{3..7}.
```powerquery
List.Union({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7}
```




## Category
List.Set operations
