---
title: List.IsEmpty
---

# List.IsEmpty


## Description

Vrne &#34;true&#34;, če je seznam prazen.


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Details

Vrne <code>true</code>, če seznam, <code>list</code>, ne vsebuje vrednosti (dolžina 0). Če seznam vsebuje vrednosti (dolžina > 0), vrne <code>false</code>.


## Examples

### Example #1 
Ugotovite, ali je seznam \{} prazen.
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2 
Ugotovite, ali je seznam \{1, 2} prazen.
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
