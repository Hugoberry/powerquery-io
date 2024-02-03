---
title: Text.Replace
---

# Text.Replace


## Description

Pakeičiami visi nurodytos teksto dalinės eilutės atvejai.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Pateikiamas visų tekstinės reikšmės <code>old</code> atvejų tekstinėje reikšmėje <code>text</code> pakeitimo į tekstinę reikšmę <code>new</code> rezultatas. Ši funkcija skiria didžiąsias ir mažąsias raides.


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
