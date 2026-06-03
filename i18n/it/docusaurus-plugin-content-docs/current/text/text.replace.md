---
title: Text.Replace
---

# Text.Replace


Sostituisce tutte le occorrenze della sottostringa specificata nel testo.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Restituisce il risultato della sostituzione di tutte le occorrenze del valore di testo `old` nel valore di testo `text` con il valore di testo `new`. Per questa funzione viene applicata la distinzione tra maiuscole e minuscole.


## Examples

### Example #1
Sostituire ogni occorrenza di "the" in una frase con "a".
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
