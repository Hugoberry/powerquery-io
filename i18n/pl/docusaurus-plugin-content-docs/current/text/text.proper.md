---
title: Text.Proper
---

# Text.Proper


Zamienia pierwszą literę każdego wyrazu na wielką.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Zwraca wynik zamiany na wielką literę pierwszej litery każdego wyrazu w wartości tekstowej `text`. Wszystkie inne litery w zwracanej wartości są małymi literami. Można także określić opcjonalny parametr `culture` (na przykład „en-US”).


## Examples

### Example #1
Użyj funkcji `Text.Proper` w prostym zdaniu.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
