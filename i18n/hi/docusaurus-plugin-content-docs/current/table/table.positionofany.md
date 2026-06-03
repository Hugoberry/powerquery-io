---
title: Table.PositionOfAny
---

# Table.PositionOfAny


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


## Remarks

`rows` की सूची की पहली आवृत्ति की `table` से पंक्ति(पंक्तियों) की स्थिति लौटाता है. अगर कोई आवृत्ति नहीं मिलती है, तो -1 लौटाता है.

-   `table`: इनपुट तालिका.
-   `rows`: तालिका में स्थितियां ढूंढने के लिए पंक्तियों की सूची.
-   `occurrence`: *(वैकल्पिक)* निर्दिष्ट करता है कि पंक्ति की कौन सी आवृत्तियां लौटानी हैं.
-   `equationCriteria`: तालिका पंक्तियों के बीच तुलना नियंत्रित (वैकल्पिक) करें.


## Examples

### Example #1
तालिका `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` में \[a = 2, b = 4\] या \[a = 6, b = 8\] की पहली आवृत्ति की स्थिति जानें.
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
तालिका `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}` में \[a = 2, b = 4\] या \[a = 6, b = 8\] की सभी आवृत्तियों की स्थिति जानें.
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
