---
title: Splitter.SplitTextByCharacterTransition
---

# Splitter.SplitTextByCharacterTransition


## Description

Restituisce una funzione che suddivide il testo in un elenco di testo in base a una transizione da un tipo di carattere a un altro. I parametri \{0} e \{1} possono essere un elenco di caratteri oppure una funzione che accetta un carattere e restituisce true/false.


## Syntax

```powerquery
Splitter.SplitTextByCharacterTransition(
    before as any,
    after as any
) as function
```


## Details

Restituisce una funzione che suddivide il testo in un elenco di testo in base a una transizione da un tipo di carattere a un altro. I parametri <code>before</code> e <code>after</code> possono essere un elenco di caratteri oppure una funzione che accetta un carattere e restituisce true/false.


## Examples

### Example #1 
Dividere l&#39;input ogni volta che una lettera maiuscola o minuscola è seguita da una cifra.
```powerquery
Splitter.SplitTextByCharacterTransition({"A".."Z", "a".."z"}, {"0".."9"})("Abc123")
```

Result: 
```powerquery
{"Abc", "123"}
```




## Category
Splitter
