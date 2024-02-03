---
title: List.MatchesAny
---

# List.MatchesAny


## Description

Vrne &#34;true&#34;, če je funkcija &#34;condition&#34; zadovoljna s katero koli vrednostjo.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Details

Vrne <code>true</code>, če je funkcija "condition", <code>condition</code>, zadovoljna s katero koli vrednostjo na seznamu <code>list</code>, sicer vrne <code>false</code>.


## Examples

### Example #1 
Ugotovite, ali je katera od vrednosti na seznamu \{9, 10, 11} večja od 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Ugotovite, ali je katera od vrednosti na seznamu \{1, 2, 3} večja od 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
