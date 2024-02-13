---
title: Table.Min
---

# Table.Min


दिए गए मापदंड का उपयोग करके सबसे छोटी पंक्ति या डिफ़ॉल्ट मान लौटाता है.


## Syntax

```powerquery
Table.Min(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

दिए गए <code>comparisonCriteria</code> का उपयोग करके, <code>table</code> की सबसे छोटी पंक्ति लौटाता है. यदि तालिका रिक्त होती है, तो वैकल्पिक <code>default</code> मान लौटाया जाता है.


## Examples

### Example #1 
तालिका की वह पंक्ति ढूँढें जिसके स्तंभ [a] में सबसे छोटा मान है.
```powerquery
Table.Min(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    "a"
)
```

Result: 
```powerquery
[a = 2, b = 4]
```


### Example #2 
तालिका की वह पंक्ति ढूँढें जिसके स्तंभ [a] में सबसे छोटा मान है. यदि रिक्त है, तो -1 लौटाएँ.
```powerquery
Table.Min(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
