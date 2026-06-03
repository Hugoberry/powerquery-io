---
title: Type.ClosedRecord
---

# Type.ClosedRecord


दिए गए रिकॉर्ड प्रकार (या समान प्रकार, यदि वह पहले से बंद हो) का बंद संस्‍करण लौटाता है.


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Remarks

दिए गए `रिकॉर्ड` `type` (या समान प्रकार, यदि पहले से बंद हो) का बंद संस्‍करण लौटाता है.


## Examples

### Example #1
`type [ A = number,...]` का बंद संस्करण बनाएँ.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
