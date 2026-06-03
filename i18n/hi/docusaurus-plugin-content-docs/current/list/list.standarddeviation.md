---
title: List.StandardDeviation
---

# List.StandardDeviation


मानक विचलन का नमूना आधारित अनुमान लौटाता है.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Remarks

सूची `numbersList` में मौजूद मानों के मानक विचलन का नमूना आधारित अनुमान लौटाता है. यदि `numbersList` संख्याओं की एक सूची है, तो एक संख्या लौटाई जाती है. रिक्त सूची या ऐसी सूची जिसमें आइटम्स `number` प्रकार के नहीं हैं, तो त्रुटि आएगी.


## Examples

### Example #1
1 से 5 तक की संख्याओं का मानक विचलन प्राप्त करें.
```powerquery
List.StandardDeviation({1..5})
```

Result: 
```powerquery
1.5811388300841898
```




## Category
List.Averages
