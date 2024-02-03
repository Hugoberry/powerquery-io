---
title: Splitter.SplitTextByPositions
---

# Splitter.SplitTextByPositions


## Description

Returnează o funcţie care divizează textul într-o listă de text la fiecare poziţie specificată.


## Syntax

```powerquery
Splitter.SplitTextByPositions(
    positions as list,
    optional startAtEnd as logical
) as function
```


## Details

Returnează o funcţie care divizează textul într-o listă de text la fiecare poziţie specificată.


## Examples

### Example #1 
Divizează intrarea la pozițiile specificate, începând de la începutul intrării.
```powerquery
Splitter.SplitTextByPositions({0, 3, 4})("ABC|12345")
```

Result: 
```powerquery
{"ABC", "|", "12345"}
```


### Example #2 
Divizează intrarea la pozițiile specificate, începând de la sfârșitul intrării.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByPositions({0, 5}, startAtEnd)("Redmond98052")
```

Result: 
```powerquery
{"Redmond", "98052"}
```




## Category
Splitter
