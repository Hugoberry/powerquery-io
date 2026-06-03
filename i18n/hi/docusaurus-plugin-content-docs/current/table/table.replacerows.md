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

`offset` के बाद प्रारंभ होने वाले निर्दिष्ट `rows` के साथ इनपुट `table` में पंक्तियों, `count`, की निर्दिष्ट संख्या बदलता है. `rows` पैरामीटर रिकॉर्ड्स की एक सूची है.

-   `table`: तालिका जहाँ पर प्रतिस्थापना निष्पादित की जाती है.
-   `offset`: प्रतिस्थापना करने से पहले छोड़ी जाने वाली पंक्तियों की संख्या.
-   `count`: बदली जाने वाली पंक्तियों की संख्या.
-   `rows`: `offset` द्वारा निर्दिष्ट किए गए स्थान पर `table` में सम्मिलित की जाने वाली पंक्ति रिकॉर्ड्स की सूची.


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
