---
title: Number.Combinations
---

# Number.Combinations


## Description

अद्वितीय संयोजनों की संख्या लौटाता है.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Details

आइटमों की एक सूची, <code>setSize</code> से निर्दिष्ट संयोजन आकार, <code>combinationSize</code> के साथ अद्वितीय संयोजनों की संख्या लौटाता है.<ul>    <li><code>setSize</code>: सूची के आइटमों की संख्या.</li>    <li><code>combinationSize</code>: प्रत्येक संयोजन के आइटमों की संख्या.</li></ul>


## Examples

### Example #1 
जब प्रत्येक संयोजन, 3 के समूह में हों, तब कुल 5 आइटमों में से संयोजनों की संख्या प्राप्त करें.
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
