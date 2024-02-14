---
title: Splitter.SplitTextByCharacterTransition
---

# Splitter.SplitTextByCharacterTransition


Returnerar en funktion som delar upp text i en lista med text enligt en övergång från en typ av tecken till en annan. Parametrarna \{0} och \{1} kan antingen vara en lista med tecken eller en funktion som tar ett tecken och returnerar sant/falskt.


## Syntax

```powerquery
Splitter.SplitTextByCharacterTransition(
    before as any,
    after as any
) as function
```


## Remarks

Returnerar en funktion som delar upp text i en lista med text enligt en övergång från en typ av tecken till en annan. Parametrarna <code>before</code> och <code>after</code> kan antingen vara en lista med tecken eller en funktion som tar ett tecken och returnerar sant/falskt.


## Examples

### Example #1 
Dela indata när en versal eller gemen följs av en siffra.
```powerquery
Splitter.SplitTextByCharacterTransition({"A".."Z", "a".."z"}, {"0".."9"})("Abc123")
```

Result: 
```powerquery
{"Abc", "123"}
```




## Category
Splitter
