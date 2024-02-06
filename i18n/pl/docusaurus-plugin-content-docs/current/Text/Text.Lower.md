---
title: Text.Lower
---

# Text.Lower


Konwertuje wszystkie znaki na małe litery.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Remarks

Zwraca wynik konwersji wszystkich znaków w elemencie <code>text</code> na małe litery. Można także określić opcjonalny parametr <code>culture</code> (na przykład „en-US”).


## Examples

### Example #1 
Utwórz wersję ciągu „AbCd” składającą się tylko z małych liter.
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
