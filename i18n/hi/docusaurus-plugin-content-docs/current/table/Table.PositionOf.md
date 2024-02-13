---
title: Table.PositionOf
---

# Table.PositionOf


तालिका के अंदर पंक्ति की स्थिति या स्थितियाँ लौटाता है.


## Syntax

```powerquery
Table.PositionOf(
    table as table,
    row as record,
    optional occurrence as any,
    optional equationCriteria as any
) as any
```


## Remarks

निर्दिष्ट <code>table</code> में <code>row</code> की पहली आवृत्ति की पंक्ति स्थिति को लौटाता है. कोई आवृत्ति न मिलने पर -1 लौटाता है.    <ul>       <li><code>table</code>: इनपुट तालिका.</li>       <li><code>row</code>: स्थिति जानने के लिए तालिका में पंक्ति.</li>       <li><code>occurrence</code>: <i>[वैकल्पिक]</i> निर्दिष्ट करता है कि पंक्ति की कौन सी आवृत्तियाँ लौटानी हैं.</li>       <li><code>equationCriteria</code>: <i>[वैकल्पिक]</i> तालिका पंक्तियों के बीच तुलना को नियंत्रित करता है.</li>    </ul>    


## Examples

### Example #1 
तालिका &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; में [a = 2, b = 4] की पहली आवृत्ति की स्थिति जानें.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4]
)
```

Result: 
```powerquery
0
```


### Example #2 
तालिका &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; में [a = 2, b = 4] की दूसरी आवृत्ति की स्थिति जानें.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    1
)
```

Result: 
```powerquery
2
```


### Example #3 
तालिका &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; में [a = 2, b = 4] की सभी आवृत्तियों की स्थिति जानें.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    Occurrence.All
)
```

Result: 
```powerquery
{0, 2}
```




## Category
Table.Membership
