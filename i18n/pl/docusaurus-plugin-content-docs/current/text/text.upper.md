---
title: Text.Upper
---

# Text.Upper


Konwertuje wszystkie znaki na wielkie litery.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Zwraca wynik konwersji wszystkich znaków w elemencie <code>text</code> na wielkie litery. Można także określić opcjonalny parametr <code>culture</code> (na przykład „en-US”).


## Examples

### Example #1 
Utwórz wersję ciągu „aBcD” składającą się tylko z wielkich liter.
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
