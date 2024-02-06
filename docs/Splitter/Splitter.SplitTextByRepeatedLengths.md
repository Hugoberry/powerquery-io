---
title: Splitter.SplitTextByRepeatedLengths
---

# Splitter.SplitTextByRepeatedLengths


Returns a function that splits text into a list of text after the specified length repeatedly.


## Syntax

```powerquery
Splitter.SplitTextByRepeatedLengths(
    length as number,
    optional startAtEnd as logical
) as function
```


## Remarks

Returns a function that splits text into a list of text after the specified length repeatedly.


## Examples

### Example #1 
Repeatedly split the input into chunks of three characters, starting from the beginning of the input.
```powerquery
Splitter.SplitTextByRepeatedLengths(3)("12345678")
```

Result: 
```powerquery
{"123", "456", "78"}
```


### Example #2 
Repeatedly split the input into chunks of three characters, starting from the end of the input.
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
