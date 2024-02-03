---
title: List.MatchesAll
---

# List.MatchesAll


## Description

Vrne &#34;true&#34;, če je funkcija &#34;condition&#34; zadovoljna z vsemi vrednostmi na seznamu.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Details

Vrne <code>true</code>, če je funkcija "condition", <code>condition</code>, zadovoljna z vsemi vrednostmi na seznamu <code>list</code>, sicer vrne <code>false</code>.


## Examples

### Example #1 
Ugotovite, ali so vse vrednosti na seznamu \{11, 12, 13} večje od 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Ugotovite, ali so vse vrednosti na seznamu \{1, 2, 3} večje od 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
