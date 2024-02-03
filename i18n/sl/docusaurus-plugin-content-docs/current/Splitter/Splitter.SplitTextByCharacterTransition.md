---
title: Splitter.SplitTextByCharacterTransition
---

# Splitter.SplitTextByCharacterTransition


## Description

Vrne funkcijo, ki razdeli besedilo na seznam besedila v skladu s prehodom iz ene vrste znaka v drugo. Parametra \{0} in \{1} sta lahko seznam znakov ali funkcija, ki vzame znak in vrne vrednost &#34;true/false&#34;.


## Syntax

```powerquery
Splitter.SplitTextByCharacterTransition(
    before as any,
    after as any
) as function
```


## Details

Vrne funkcijo, ki razdeli besedilo na seznam besedila v skladu s prehodom iz ene vrste znaka v drugo. Parametra <code>before</code> in <code>after</code> sta lahko seznam znakov ali funkcija, ki vzame znak in vrne vrednost "true/false".


## Examples

### Example #1 
Razdelite vnos vsakič, ko števkam sledi velika ali male črke.
```powerquery
Splitter.SplitTextByCharacterTransition({"A".."Z", "a".."z"}, {"0".."9"})("Abc123")
```

Result: 
```powerquery
{"Abc", "123"}
```




## Category
Splitter
