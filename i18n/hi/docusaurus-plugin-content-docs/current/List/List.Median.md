---
title: List.Median
---

# List.Median


## Description

सूची का माध्य मान लौटाता है.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Details

सूची <code>list</code> के मध्यमान आइटम लौटाता है. यदि सूची में कोई भी ग़ैर-<code>नल</code> मान नहीं हैं, तो यह फ़ंक्शन <code>null</code> लौटाता है.    यदि आइटम्स की संख्या विषम है, तो यह फ़ंक्शन दो मध्यमान आइटम्स से छोटा चुनता है जब तक कि सूची पूरी तरह ऐसे     datetimes, अवधियों, समयों की संख्या से नहीं बनी हो, जिसमें यह दो आइटम्स का औसत लौटाता हो.


## Examples

### Example #1 
सूची &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt; का माध्य प्राप्त करें.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
