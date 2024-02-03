---
title: Splitter.SplitTextByRepeatedLengths
---

# Splitter.SplitTextByRepeatedLengths


## Description

Mengembalikan fungsi yang memisahkan teks kepada senarai teks selepas panjang yang ditentukan berulang kali.


## Syntax

```powerquery
Splitter.SplitTextByRepeatedLengths(
    length as number,
    optional startAtEnd as logical
) as function
```


## Details

Mengembalikan fungsi yang memisahkan teks kepada senarai teks selepas panjang yang ditentukan berulang kali.


## Examples

### Example #1 
Secara berulang kali pisahkan input kepada cebisan tiga aksara, bermula dari permulaan input.
```powerquery
Splitter.SplitTextByRepeatedLengths(3)("12345678")
```

Result: 
```powerquery
{"123", "456", "78"}
```


### Example #2 
Secara berulang kali pisahkan input kepada cebisan tiga aksara, bermula dari hujung input.
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
