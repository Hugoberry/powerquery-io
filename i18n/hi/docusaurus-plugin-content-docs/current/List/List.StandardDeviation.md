---
title: List.StandardDeviation
---

# List.StandardDeviation


## Description

मानक विचलन का नमूना आधारित अनुमान लौटाता है.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Details

सूची <code>numbersList</code> में मौजूद मानों के मानक विचलन का नमूना आधारित अनुमान लौटाता है.    यदि <code>numbersList</code> संख्याओं की एक सूची है, तो एक संख्या लौटाई जाती है.    एक रिक्त सूची या उन आइटमों की सूची, जिसका प्रकार <code>संख्या</code> नहीं है, पर एक अपवाद लौटाया जाता है.


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
