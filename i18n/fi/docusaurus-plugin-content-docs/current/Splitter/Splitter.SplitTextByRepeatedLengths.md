---
title: Splitter.SplitTextByRepeatedLengths
---

# Splitter.SplitTextByRepeatedLengths


## Description

Palauttaa funktion, joka jakaa tekstin osiin tekstiluetteloksi määritetyn pituuden jälkeen toistuvasti.


## Syntax

```powerquery
Splitter.SplitTextByRepeatedLengths(
    length as number,
    optional startAtEnd as logical
) as function
```


## Details

Palauttaa funktion, joka jakaa tekstin osiin tekstiluetteloksi määritetyn pituuden jälkeen toistuvasti.


## Examples

### Example #1 
Jaa syöte toistuvasti kolmen merkin lohkoihin syötteen alusta alkaen.
```powerquery
Splitter.SplitTextByRepeatedLengths(3)("12345678")
```

Result: 
```powerquery
{"123", "456", "78"}
```


### Example #2 
Jaa syöte toistuvasti kolmen merkin lohkoihin syötteen alusta alkaen.
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
