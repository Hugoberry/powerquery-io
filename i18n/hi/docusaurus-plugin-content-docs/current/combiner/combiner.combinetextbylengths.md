---
title: Combiner.CombineTextByLengths
---

# Combiner.CombineTextByLengths


एक फ़ंक्शन लौटाता है जो निर्दिष्ट लंबाई का उपयोग करके टेक्स्ट की सूची को जोड़ता है.


## Syntax

```powerquery
Combiner.CombineTextByLengths(
    lengths as list,
    optional template as text
) as function
```


## Remarks

एक ऐसा फ़ंक्शन लौटाता है जो निर्दिष्ट लंबाई का उपयोग करके पाठ मानों की सूची को किसी एकल पाठ मान में संयोजित करता है.


## Examples

### Example #1 
हर इनपुट मान से वर्णों की निर्दिष्ट संख्याओं को हटाकर टेक्स्ट मानों की सूची संयोजित करें.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3})({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc"
```


### Example #2 
परिणाम को पहले टेम्पलेट टेक्स्ट से पहले भरने के बाद, वर्णों की निर्दिष्ट संख्याओं को हटाकर टेक्स्ट मानों की सूची संयोजित करें.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3}, "*********")({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc***"
```




## Category
Combiner
