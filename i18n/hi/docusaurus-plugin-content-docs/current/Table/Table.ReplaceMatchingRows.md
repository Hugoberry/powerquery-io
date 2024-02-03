---
title: Table.ReplaceMatchingRows
---

# Table.ReplaceMatchingRows


## Description

सभी निर्दिष्ट पंक्तियों को प्रदान की गई पंक्ति(यों) से बदलता है.


## Syntax

```powerquery
Table.ReplaceMatchingRows(
    table as table,
    replacements as list,
    optional equationCriteria as any
) as table
```


## Details

<code>table</code> में निर्दिष्ट सभी पंक्तियों को प्रदान की गई पंक्तियों से बदलता है. बदली जाने वाली पंक्तियों और प्रतिस्थापन को \{old, new} स्वरूपण का उपयोग करके <code>replacements</code> में निर्दिष्ट किया जाता है.    तालिका की पंक्तियों के बीच तुलना को नियंत्रित करने के लिए एक वैकल्पिक <code>equationCriteria</code> पैरामीटर निर्दिष्ट किया जा सकता है.


## Examples

### Example #1 
तालिका में पंक्तियों [a = 1, b = 2] और [a = 2, b = 3] को [a = -1, b = -2],[a = -2, b = -3] से बदलें.
```powerquery
Table.ReplaceMatchingRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 2, b = 3],
        [a = 3, b = 4],
        [a = 1, b = 2]
    }),
    {
        {[a = 1, b = 2], [a = -1, b = -2]},
        {[a = 2, b = 3], [a = -2, b = -3]}
    }
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = -1, b = -2],
    [a = -2, b = -3],
    [a = 3, b = 4],
    [a = -1, b = -2]
})
```




## Category
Table.Membership
