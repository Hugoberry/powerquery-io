---
title: Text.EndsWith
---

# Text.EndsWith


Určuje, zda text končí zadanou hodnotou.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Určuje, jestli daný text `text` končí zadanou hodnotou `substring`. Při určení se rozlišují malá a velká písmena.

`comparer` je porovnávač `Comparer`, který slouží k řízení porovnání. Porovnávače můžou být použité k porovnání bez rozlišení malých a velkých písmen nebo porovnání zohledňujících jazykovou verzi a národní prostředí.

Následující zabudované porovnávače jsou dostupné v jazyce vzorců:

-   `Comparer.Ordinal`: Slouží k provádění přesného řadového porovnání.
-   `Comparer.OrdinalIgnoreCase`: Slouží k provádění přesného řadového porovnání bez rozlišení malých a velkých písmen.
-   `Comparer.FromCulture`: Slouží k provádění porovnání zohledňujících jazykovou verzi.


## Examples

### Example #1
Kontroluje, zda text „Hello, World“ končí textem „world“.
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2
Kontroluje, zda text „Hello, World“ končí textem „World“.
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
