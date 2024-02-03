---
title: List.Positions
---

# List.Positions


## Description

इनपुट के लिए ऑफ़सेट की सूची लौटाता है.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Details

इनपुट सूची <code>list</code> के लिए ऑफ़सेट की सूची लौटाता है.    किसी सूची को परिवर्तित करने के लिए List.Transform का उपयोग करते समय स्थिति तक रूपांतरित करने की पहुँच देने के लिए स्थितियों की सूची का उपयोग किया जा सकता है.


## Examples

### Example #1 
सूची \{1, 2, 3, 4, null, 5} के मानों के ऑफ़सेट प्राप्त करें.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```




## Category
List.Selection
