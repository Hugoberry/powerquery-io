---
title: Table.ReplaceRows
---

# Table.ReplaceRows


पंक्तियों की निर्दिष्ट श्रेणी को प्रदान की गई पंक्ति(यों) से बदलता है.


## Syntax

```powerquery
Table.ReplaceRows(
    table as table,
    offset as number,
    count as number,
    rows as list
) as table
```


## Remarks

<code>offset</code> के बाद प्रारंभ होने वाले निर्दिष्ट <code>rows</code> के साथ इनपुट <code>table</code> में पंक्तियों, <code>count</code>, की निर्दिष्ट संख्या बदलता है. <code>rows</code> पैरामीटर रिकॉर्ड्स की एक सूची है.    <ul>       <li><code>table</code>: तालिका जहाँ पर प्रतिस्थापना निष्पादित की जाती है.</li>       <li><code>offset</code>: प्रतिस्थापना करने से पहले छोड़ी जाने वाली पंक्तियों की संख्या.</li>       <li><code>count</code>: बदली जाने वाली पंक्तियों की संख्या.</li>       <li><code>rows</code>: <code>offset</code> द्वारा निर्दिष्ट किए गए स्थान पर <code>table</code> में सम्मिलित की जाने वाली पंक्ति रिकॉर्ड्स की सूची.</li>    </ul>


## Examples

### Example #1 
स्थिति 1 से प्रारंभ करते हुए, 3 पंक्तियों को बदलें.
```powerquery
Table.ReplaceRows(
    Table.FromRecords({
        [Column1 = 1],
        [Column1 = 2],
        [Column1 = 3],
        [Column1 = 4],
        [Column1 = 5]
    }),
    1,
    3,
    {[Column1 = 6], [Column1 = 7]}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1],
    [Column1 = 6],
    [Column1 = 7],
    [Column1 = 5]
})
```




## Category
Table.Row operations
