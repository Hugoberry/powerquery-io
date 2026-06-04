---
title: Text.Proper
---

# Text.Proper


Katra vārda pirmais burts tiek rakstīts ar lielo burtu.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Tiek atgriezts rezultāts, kas iegūts, pārveidojot par lielajiem burtiem tikai katra vārda pirmo burtu teksta vērtībā `text`. Pārējie burti tiek atgriezti kā mazie burti. Var norādīt arī neobligātu parametru `culture` (piemēram, "lv-LV").


## Examples

### Example #1
Vienkāršā teikumā lietojiet `Text.Proper`.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
