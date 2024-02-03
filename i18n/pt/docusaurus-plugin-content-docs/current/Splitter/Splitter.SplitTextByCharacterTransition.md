---
title: Splitter.SplitTextByCharacterTransition
---

# Splitter.SplitTextByCharacterTransition


## Description

Returns a function that splits text into a list of text according to a transition from one kind of character to another. The \{0} and \{1} parameters can either be a list of characters, or a function that takes a character and returns true/false.


## Syntax

```powerquery
Splitter.SplitTextByCharacterTransition(
    before as any,
    after as any
) as function
```


## Details

Returns a function that splits text into a list of text according to a transition from one kind of character to another. The <code>before</code> and <code>after</code> parameters can either be a list of characters, or a function that takes a character and returns true/false.


## Examples

### Example #1 
Split the input whenever an upper or lowercase letter is followed by a digit.
```powerquery
Splitter.SplitTextByCharacterTransition({"A".."Z", "a".."z"}, {"0".."9"})("Abc123")
```

Result: 
```powerquery
{"Abc", "123"}
```




## Category
Splitter
