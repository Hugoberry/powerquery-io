---
title: Splitter.SplitTextByRepeatedLengths
---

# Splitter.SplitTextByRepeatedLengths


## Description

Vrátí funkci, která rozdělí text na seznam textových hodnot na základě zadané délky, která je použita opakovaně.


## Syntax

```powerquery
Splitter.SplitTextByRepeatedLengths(
    length as number,
    optional startAtEnd as logical
) as function
```


## Details

Vrátí funkci, která rozdělí text na seznam textových hodnot na základě zadané délky, která je použita opakovaně.


## Examples

### Example #1 
Vstup se opakovaně rozděluje na bloky tří znaků začínající od začátku vstupu.
```powerquery
Splitter.SplitTextByRepeatedLengths(3)("12345678")
```

Result: 
```powerquery
{"123", "456", "78"}
```


### Example #2 
Vstup se opakovaně rozděluje na bloky tří znaků začínající koncem vstupu.
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
