---
title: Text.Replace
---

# Text.Replace


## Description

Sostituisce tutte le occorrenze della sottostringa specificata nel testo.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Restituisce il risultato della sostituzione di tutte le occorrenze del valore di testo <code>old</code> nel valore di testo <code>text</code> con il valore di testo <code>new</code>. Per questa funzione viene applicata la distinzione tra maiuscole e minuscole.


## Examples

### Example #1 
Sostituire ogni occorrenza di &#34;the&#34; in una frase con &#34;a&#34;.
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
