---
title: Splitter.SplitTextByRepeatedLengths
---

# Splitter.SplitTextByRepeatedLengths


## Description

Returnează o funcţie care divizează textul într-o listă de text după lungimea specificată în mod repetat.


## Syntax

```powerquery
Splitter.SplitTextByRepeatedLengths(
    length as number,
    optional startAtEnd as logical
) as function
```


## Details

Returnează o funcţie care divizează textul într-o listă de text după lungimea specificată în mod repetat.


## Examples

### Example #1 
Divizează în mod repetat intrarea în blocuri de trei caractere, începând de la începutul intrării.
```powerquery
Splitter.SplitTextByRepeatedLengths(3)("12345678")
```

Result: 
```powerquery
{"123", "456", "78"}
```


### Example #2 
Divizează în mod repetat intrarea în blocuri de trei caractere, începând de la sfârșitul intrării.
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
