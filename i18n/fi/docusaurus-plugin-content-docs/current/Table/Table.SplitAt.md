---
title: Table.SplitAt
---

# Table.SplitAt


## Description

Palauttaa luettelon, joka sisältää määritetyt ensimmäiset määrärivit ja loput rivit.


## Syntax

```powerquery
Table.SplitAt(
    table as table,
    count as number
) as list
```


## Details

Palauttaa luettelon, joka sisältää kaksi taulukkoa: taulukon, jossa on kohteen <code>table</code> ensimmäiset N riviä (<code>count</code> määrittämä), ja taulukon, joka sisältää kohteen <code>table</code> jäljellä olevat rivit.Jos tuloksena olevan luettelon taulukot lasketaan täsmälleen kerran ja järjestyksessä, toiminto laskee kohteen <code>table</code> vain kerran.


## Examples

### Example #1 
Palauta taulukon ensimmäiset kaksi riviä ja taulukon jäljellä olevat rivit.
```powerquery
Table.SplitAt(#table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}), 2)
```

Result: 
```powerquery
{
    #table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}}),
    #table({"a", "b", "c"}, {{7, 8, 9}})
}
```




## Category
Table.Row operations
