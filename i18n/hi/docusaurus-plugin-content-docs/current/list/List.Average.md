---
title: List.Average
---

# List.Average


मान का औसत लौटाता है. संख्या, दिनांक, DateTime, datetimezone और अवधि मानों के साथ काम करता है.


## Syntax

```powerquery
List.Average(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

सूची, <code>list</code> के आइटमों के लिए औसत मान लौटाता है. परिणाम उसी प्रकार के डेटा प्रकार में दिया जाता है जिसमें सूची के मान हैं. केवल संख्या, दिनांक, समय, DateTime, datetimezone और अवधि मानों के साथ काम करता है.    अगर सूची रिक्त है, तो नल लौटाया जाता है.


## Examples

### Example #1 
संख्याओं, &lt;code&gt;\{3, 4, 6}&lt;/code&gt; की सूची का औसत प्राप्त करें.
```powerquery
List.Average({3, 4, 6})
```

Result: 
```powerquery
4.333333333333333
```


### Example #2 
दिनांक मानों 1 जनवरी 2011, 2 जनवरी 2011 और 3 जनवरी 2011 का औसत प्राप्त करें.
```powerquery
List.Average({#date(2011, 1, 1), #date(2011, 1, 2), #date(2011, 1, 3)})
```

Result: 
```powerquery
#date(2011, 1, 2)
```




## Category
List.Averages
