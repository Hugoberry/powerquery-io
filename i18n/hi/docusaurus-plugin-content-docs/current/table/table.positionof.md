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

निर्दिष्ट `row` में `table` की पहली आवृत्ति की पंक्ति स्थिति को लौटाता है. अगर कोई आवृत्ति नहीं मिलती है, तो -1 लौटाता है.

-   `table`: इनपुट तालिका.
-   `row`: तालिका की वह पंक्ति, जिस की स्थिति ढूंढनी है.
-   `occurrence`: *(वैकल्पिक)* निर्दिष्ट करता है कि पंक्ति की कौन सी आवृत्तियां लौटानी हैं.
-   `equationCriteria`: तालिका पंक्तियों के बीच तुलना नियंत्रित (वैकल्पिक) करें.


## Examples

### Example #1
तालिका `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` में \[a = 2, b = 4\] की पहली आवृत्ति की स्थिति जानें.
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
तालिका `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` में \[a = 2, b = 4\] की दूसरी आवृत्ति की स्थिति जानें.
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
तालिका `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` में \[a = 2, b = 4\] की सभी आवृत्तियों की स्थिति जानें.
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
