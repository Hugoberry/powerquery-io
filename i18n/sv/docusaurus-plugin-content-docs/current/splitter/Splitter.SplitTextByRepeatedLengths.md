---
title: Splitter.SplitTextByRepeatedLengths
---

# Splitter.SplitTextByRepeatedLengths


Returnerar en funktion som delar upp text i en lista med text upprepade gånger efter angiven längd.


## Syntax

```powerquery
Splitter.SplitTextByRepeatedLengths(
    length as number,
    optional startAtEnd as logical
) as function
```


## Remarks

Returnerar en funktion som delar upp text i en lista med text upprepade gånger efter angiven längd.


## Examples

### Example #1 
Dela indata upprepade gånger i segment med tre tecken, med början från början av indata.
```powerquery
Splitter.SplitTextByRepeatedLengths(3)("12345678")
```

Result: 
```powerquery
{"123", "456", "78"}
```


### Example #2 
Dela indata upprepade gånger i segment med tre tecken, med början från slutet av indata.
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
