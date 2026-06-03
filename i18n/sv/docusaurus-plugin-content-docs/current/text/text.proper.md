---
title: Text.Proper
---

# Text.Proper


Inleder varje ord med versal.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Returnerar resultatet då varje ord i textvärdet `text` inleds med versal. Alla andra bokstäver utom den första i orden visas med gemener. En valfri `culture` kan även anges (till exempel, "en-US").


## Examples

### Example #1
Använd `Text.Proper` i en enkel mening.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
