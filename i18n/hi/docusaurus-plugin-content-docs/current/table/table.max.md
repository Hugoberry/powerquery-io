---
title: Table.Max
---

# Table.Max


दिए गए मापदंड का उपयोग करके सबसे बड़ी पंक्ति या डिफ़ॉल्ट मान लौटाता है.


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

दिया गया `comparisonCriteria` का उपयोग करके, `table` की सबसे पड़ी पंक्ति लौटाता है. यदि तालिका रिक्त होती है, तो वैकल्पिक `default` मान लौटाया जाता है.


## Examples

### Example #1
तालिका `({[a = 2, b = 4], [a = 6, b = 8]})` की वह पंक्ति ढूँढें जिसके स्तंभ \[a\] में सबसे बड़ा मान है.
```powerquery
Table.Max(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    "a"
)
```

Result: 
```powerquery
[a = 6, b = 8]
```


### Example #2
तालिका `({})` की वह पंक्ति ढूँढें जिसके स्तंभ \[a\] में सबसे बड़ा मान है. यदि रिक्त है, तो -1 लौटाएँ.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
