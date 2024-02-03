---
title: Combiner.CombineTextByLengths
---

# Combiner.CombineTextByLengths


## Description

Returnerar en funktion som kombinerar en lista med text med angivna längder.


## Syntax

```powerquery
Combiner.CombineTextByLengths(
    lengths as list,
    optional template as text
) as function
```


## Details

Returnerar en funktion som kombinerar en lista med textvärden till ett enda textvärde med de angivna längderna.


## Examples

### Example #1 
Kombinera en lista med textvärden genom att extrahera det angivna antalet tecken från varje indatavärde.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3})({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc"
```


### Example #2 
Kombinera en lista med textvärden genom att extrahera det angivna antalet tecken efter att resultatet först fyllts i i förväg med malltexten.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3}, "*********")({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc***"
```




## Category
Combiner
