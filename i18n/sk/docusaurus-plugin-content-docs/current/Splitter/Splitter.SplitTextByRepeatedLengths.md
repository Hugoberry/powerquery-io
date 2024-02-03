---
title: Splitter.SplitTextByRepeatedLengths
---

# Splitter.SplitTextByRepeatedLengths


## Description

Vráti funkciu, ktorá rozdelí text do zoznamu textu opakovane po stanovenej dĺžke.


## Syntax

```powerquery
Splitter.SplitTextByRepeatedLengths(
    length as number,
    optional startAtEnd as logical
) as function
```


## Details

Vráti funkciu, ktorá rozdelí text do zoznamu textu opakovane po stanovenej dĺžke.


## Examples

### Example #1 
Opakovane rozdelí vstup na bloky troch znakov počnúc od začiatku vstupu.
```powerquery
Splitter.SplitTextByRepeatedLengths(3)("12345678")
```

Result: 
```powerquery
{"123", "456", "78"}
```


### Example #2 
Opakovane rozdelí vstup na bloky troch znakov počnúc od konca vstupu.
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
