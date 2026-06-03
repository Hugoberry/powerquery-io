---
title: List.FindText
---

# List.FindText


मानों (रिकॉर्ड फ़ील्ड सहित) की ऐसी सूची लौटाता है जिसमें निर्दिष्ट पाठ होता है.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Remarks

उस सूची `list` से मानों की सूची लौटाता है जिसमें मान `text` होता है.


## Examples

### Example #1
सूची \{"a", "b", "ab"\} के वे पाठ मान प्राप्त करें जो "a" से मेल खाते हैं.
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
