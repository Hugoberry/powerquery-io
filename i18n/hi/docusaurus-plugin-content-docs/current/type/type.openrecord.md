---
title: Type.OpenRecord
---

# Type.OpenRecord


दिए गए रिकॉर्ड प्रकार (या समान प्रकार, यदि वह पहले से खुला हुआ हो) का खुला हुआ संस्‍करण लौटाता है.


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Remarks

दिए गए <code>रिकॉर्ड</code> <code>type</code> (या समान प्रकार, यदि पहले से खुला हुआ हो, तो) का खुला हुआ संस्‍करण लौटाता है.


## Examples

### Example #1 
&lt;code&gt;type [ A = number]&lt;/code&gt; का खुला हुआ संस्‍करण बनाएँ.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
