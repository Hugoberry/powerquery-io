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

उस सूची <code>list</code> से मानों की सूची लौटाता है जिसमें मान <code>text</code> होता है.


## Examples

### Example #1 
सूची \{&#34;a&#34;, &#34;b&#34;, &#34;ab&#34;} के वे पाठ मान प्राप्त करें जो &#34;a&#34; से मेल खाते हैं. 
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
