---
title: Number.Combinations
---

# Number.Combinations


अद्वितीय संयोजनों की संख्या लौटाता है.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Remarks

आइटमों की एक सूची, `setSize` से निर्दिष्ट संयोजन आकार, `combinationSize` के साथ अद्वितीय संयोजनों की संख्या लौटाता है.

-   `setSize`: सूची के आइटमों की संख्या.
-   `combinationSize`: प्रत्येक संयोजन के आइटमों की संख्या.


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
