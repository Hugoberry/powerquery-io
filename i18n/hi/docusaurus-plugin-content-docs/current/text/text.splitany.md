---
title: Text.SplitAny
---

# Text.SplitAny


डिलिमिटर में किसी भी वर्ण पर विभाजित पाठ मानों की सूची लौटाता है.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Remarks

डिलिमिटर में निर्दिष्ट किसी भी वर्ण के आधार पर पाठ मान के विभाजन के परिणामस्वरूप प्राप्त होने वाले पाठ मानों की सूची लौटाता है.

-   `text`: विभाजित किया जाने वाला पाठ मान.
-   `separators`: डिलिमिटर वर्णों का उपयोग पाठ को विभाजित करने में किया जाता है.


## Examples

### Example #1
निर्दिष्ट डिलिमिटर वर्णों का उपयोग करके दिए गए पाठ से एक सूची बनाएँ.
```powerquery
Text.SplitAny("Name|Customer ID|Purchase|Month-Day-Year", "|-")
```

Result: 
```powerquery
{
    "Name",
    "Customer ID",
    "Purchase",
    "Month",
    "Day",
    "Year"
}
```




## Category
Text.Transformations
