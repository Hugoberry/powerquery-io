---
title: Text.Proper
---

# Text.Proper


Pretvara prvo slovo svake reči u veliko slovo.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Vraća rezultat pretvaranja samo prvog slova svake reči u veliko slovo u tekstualnoj vrednosti `text`. Sva druga slova se vraćaju u vidu malih slova. Opcionalno se može navesti i `culture` (na primer, „en-US“).


## Examples

### Example #1
Upotreba `Text.Proper` na prostoj rečenici.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
