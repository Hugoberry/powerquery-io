---
title: Table.RemoveMatchingRows
---

# Table.RemoveMatchingRows


## Description

तालिका से निर्दिष्ट पंक्तियों की सभी आवृत्तियाँ निकालता है.


## Syntax

```powerquery
Table.RemoveMatchingRows(
    table as table,
    rows as list,
    optional equationCriteria as any
) as table
```


## Details

<code>table</code> में से निर्दिष्ट <code>rows</code> की सभी आवृत्तियाँ निकालता है.    तालिका की पंक्तियों के बीच तुलना को नियंत्रित करने के लिए कोई वैकल्पिक पैरामीटर <code>equationCriteria</code> निर्दिष्ट किया जा सकता है.


## Examples

### Example #1 
तालिका &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4], [a = 1, b = 6]})&lt;/code&gt; से कोई भी ऐसी पंक्ति निकालें जहाँ [a = 1] हो.
```powerquery
Table.RemoveMatchingRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4],
        [a = 1, b = 6]
    }),
    {[a = 1]},
    "a"
)
```

Result: 
```powerquery
Table.FromRecords({[a = 3, b = 4]})
```




## Category
Table.Membership
