---
title: Splitter.SplitTextByLengths
---

# Splitter.SplitTextByLengths


## Description

Returnează o funcţie care divizează textul într-o listă de text la fiecare lungime specificată.


## Syntax

```powerquery
Splitter.SplitTextByLengths(
    lengths as list,
    optional startAtEnd as logical
) as function
```


## Details

Returnează o funcţie care divizează textul într-o listă de text la fiecare lungime specificată.


## Examples

### Example #1 
Divizează intrarea în primele două caractere urmate de următoarele trei, începând de la începutul intrării.
```powerquery
Splitter.SplitTextByLengths({2, 3})("AB123")
```

Result: 
```powerquery
{"AB", "123"}
```


### Example #2 
Divizează intrarea în primele trei caractere urmate de următoarele două, începând de la sfârșitul intrării.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByLengths({5, 2}, startAtEnd)("RedmondWA98052")
```

Result: 
```powerquery
{"WA", "98052"}
```




## Category
Splitter
