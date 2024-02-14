---
title: Splitter.SplitTextByRepeatedLengths
---

# Splitter.SplitTextByRepeatedLengths


Restituisce una funzione che suddivide il testo in un elenco di testo dopo la lunghezza specificata ripetutamente.


## Syntax

```powerquery
Splitter.SplitTextByRepeatedLengths(
    length as number,
    optional startAtEnd as logical
) as function
```


## Remarks

Restituisce una funzione che suddivide il testo in un elenco di testo dopo la lunghezza specificata ripetutamente.


## Examples

### Example #1 
Dividere ripetutamente l&#39;input in blocchi di tre caratteri, a partire dall&#39;inizio dell&#39;input.
```powerquery
Splitter.SplitTextByRepeatedLengths(3)("12345678")
```

Result: 
```powerquery
{"123", "456", "78"}
```


### Example #2 
Dividere ripetutamente l&#39;input in blocchi di tre caratteri, a partire dalla fine dell&#39;input.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByRepeatedLengths(3, startAtEnd)("87654321")
```

Result: 
```powerquery
{"87", "654", "321"}
```




## Category
Splitter
