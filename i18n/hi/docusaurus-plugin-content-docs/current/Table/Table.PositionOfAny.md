---
title: Table.PositionOfAny
---

# Table.PositionOfAny


## Description

तालिका के अंदर किसी भी निर्दिष्ट पंक्ति की स्थिति या स्थितियाँ लौटाता है.


## Syntax

```powerquery
Table.PositionOfAny(
    table as table,
    rows as list,
    optional occurrence as number,
    optional equationCriteria as any
) as any
```


## Details

<code>rows</code> की सूची की पहली आवृत्ति की <code>table</code> से पंक्ति(पँक्तियों) की स्थिति(स्थितियाँ) लौटाता है. कोई आवृत्ति न मिलने पर -1 लौटाता है.    <ul>    <li><code>table</code>: इनपुट तालिका.</li>       <li><code>rows</code>:  स्थिति जानने के लिए तालिका में पंक्तियों की सूची.</li>       <li><code>occurrence</code>: <i>[वैकल्पिक]</i> निर्दिष्ट करता है कि पंक्ति की कौन सी आवृत्तियाँ लौटानी हैं.</li>       <li><code>equationCriteria</code>: <i>[वैकल्पिक]</i> तालिका पंक्तियों के बीच तुलना को नियंत्रित करता है.</li>    </ul>    


## Examples

### Example #1 
तालिका &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; में [a = 2, b = 4] या [a = 6, b = 8] की पहली आवृत्ति की स्थिति जानें.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    }
)
```

Result: 
```powerquery
0
```


### Example #2 
तालिका &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}&lt;/code&gt; में [a = 2, b = 4] या [a = 6, b = 8] की सभी आवृत्तियों की स्थिति जानें.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    },
    Occurrence.All
)
```

Result: 
```powerquery
{0, 1, 2}
```




## Category
Table.Membership
