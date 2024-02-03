---
title: Table.ContainsAny
---

# Table.ContainsAny


## Description

संकेत देता है कि कोई भी निर्दिष्ट रिकॉर्ड तालिका में पंक्तियों के रूप में दिखाई देता है या नहीं.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

संकेत देता है कि रिकॉर्ड की सूची <code>rows</code> में कोई भी निर्दिष्ट रिकॉर्ड, <code>table</code> में पंक्तियों के रूप में दिखाई देता है या नहीं.    तालिका की पंक्तियों की तुलना को नियंत्रित करने के लिए कोई वैकल्पिक पैरामीटर <code>equationCriteria</code> निर्दिष्ट किया जा सकता है.


## Examples

### Example #1 
निर्धारित करें कि क्या तालिका &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; में &lt;code&gt;[a = 1, b = 2]&lt;/code&gt; या &lt;code&gt;[a = 3, b = 5]&lt;/code&gt; पंक्ति है.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 2],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
true
```


### Example #2 
निर्धारित करें कि क्या तालिका &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; में &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; या &lt;code&gt;[a = 3, b = 5]&lt;/code&gt; पंक्ति है.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
false
```


### Example #3 
केवल स्तंभ [a] से तुलना करते हुए निर्धारित करें कि क्या तालिका &lt;code&gt;(Table.FromRecords(\{[a = 1, b = 2], [a = 3, b = 4]}))&lt;/code&gt; में &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; या &lt;code&gt;[a = 3, b = 5]&lt;/code&gt; पंक्ति है.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    },
    "a"
)
```

Result: 
```powerquery
true
```




## Category
Table.Membership
