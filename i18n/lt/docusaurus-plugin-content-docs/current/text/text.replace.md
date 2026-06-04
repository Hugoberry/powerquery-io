---
title: Text.Replace
---

# Text.Replace


Pakeičiami visi nurodytos teksto dalinės eilutės atvejai.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Pateikiamas visų tekstinės reikšmės `old` atvejų tekstinėje reikšmėje `text` pakeitimo į tekstinę reikšmę `new` rezultatas. Ši funkcija skiria didžiąsias ir mažąsias raides.


## Examples

### Example #1
Pakeiskite kiekvieną „the“ atvejį sakinyje į „a“.
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
