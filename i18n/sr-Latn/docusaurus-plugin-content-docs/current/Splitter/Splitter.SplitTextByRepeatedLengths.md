---
title: Splitter.SplitTextByRepeatedLengths
---

# Splitter.SplitTextByRepeatedLengths


## Description

Vraća funkciju koja iznova deli tekst na listu teksta prema navedenoj dužini.


## Syntax

```powerquery
Splitter.SplitTextByRepeatedLengths(
    length as number,
    optional startAtEnd as logical
) as function
```


## Details

Vraća funkciju koja iznova deli tekst na listu teksta prema navedenoj dužini.


## Examples

### Example #1 
Razdelite unos više puta na odlomke od tri znaka, počevši od početka unosa.
```powerquery
Splitter.SplitTextByRepeatedLengths(3)("12345678")
```

Result: 
```powerquery
{"123", "456", "78"}
```


### Example #2 
Razdelite unos više puta na odlomke od tri znaka, počevši od kraja unosa.
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
