---
title: Splitter.SplitTextByCharacterTransition
---

# Splitter.SplitTextByCharacterTransition


## Description

Vráti funkciu, ktorá rozdelí text na zoznam textu podľa prechodu z jedného druhu znaku na iný. Parametrami \{0} a \{1} môže byť buď zoznam znakov, alebo funkcia, ktorá použije znak a vráti hodnotu pravda alebo nepravda.


## Syntax

```powerquery
Splitter.SplitTextByCharacterTransition(
    before as any,
    after as any
) as function
```


## Details

Vráti funkciu, ktorá rozdelí text na zoznam textu podľa prechodu z jedného druhu znaku na iný. Parametrami <code>before</code> a <code>after</code> môže byť buď zoznam znakov, alebo funkcia, ktorá použije znak a vráti hodnotu pravda alebo nepravda.


## Examples

### Example #1 
Rozdelí vstup vždy, keď za veľkým alebo malým písmenom nasleduje číslica.
```powerquery
Splitter.SplitTextByCharacterTransition({"A".."Z", "a".."z"}, {"0".."9"})("Abc123")
```

Result: 
```powerquery
{"Abc", "123"}
```




## Category
Splitter
