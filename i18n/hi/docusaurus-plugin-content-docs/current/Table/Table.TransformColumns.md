---
title: Table.TransformColumns
---

# Table.TransformColumns


## Description

एक या अधिक स्तंभों के मानों को रूपांतरित करता है.


## Syntax

```powerquery
Table.TransformColumns(
    table as table,
    transformOperations as list,
    optional defaultTransformation as function,
    optional missingField as MissingField.Type
) as table
```


## Details

<code>transformOperations</code> में सूचीबद्ध प्रत्येक स्तंभ कार्रवाई लागू करके <code>table</code> को रूपांतरित करता है (जहाँ स्वरूप \{ column name, transformation } या \{ column name, transformation, new column type }).    यदि कोई <code>defaultTransformation</code> निर्दिष्ट है, तो वह उन सभी स्तंभों पर लागू किया जाएगा जो <code>transformOperations</code> में सूचीबद्ध नहीं हैं.    यदि <code>transformOperations</code> में सूचीबद्ध कोई स्तंभ मौजूद नहीं है, तो एक अपवाद दिया जाता है जब तक कि वैकल्पिक पैरामीटर <code>missingField</code> द्वारा कोई विकल्प (उदाहरण के लिए, <code>MissingField.UseNull</code> या <code>MissingField.Ignore</code>) निर्दिष्ट नहीं किया जाता है.


## Examples

### Example #1 
स्तंभ [A] के पाठ मानों को संख्या मानों में और स्तंभ [B] के संख्या मानों को पाठ मानों में रूपांतरित करें.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {
        {"A", Number.FromText},
        {"B", Text.From}
    }
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "2"],
    [A = 5, B = "10"]
})
```


### Example #2 
गैर-मौजूद स्तंभों की उपेक्षा करते हुए, गुम स्तंभ [X] के संख्या मानों को पाठ मानों में रूपांतरित करें.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"X", Number.FromText},
    null,
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "1", B = 2],
    [A = "5", B = 10]
})
```


### Example #3 
गैर-मौजूद स्तंभों को नल पर डिफ़ॉल्ट रखते हुए, गुम स्तंभ [X] के संख्या मानों को पाठ मानों में रूपांतरित करें.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"X", Number.FromText},
    null,
    MissingField.UseNull
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "1", B = 2, X = null],
    [A = "5", B = 10, X = null]
})
```


### Example #4 
स्तंभ [B] में संख्या मानों को वृद्धि करें और उन्हें पाठ मानों में रूपांतरित करें और अन्य सभी स्तंभों को संख्याओं में रूपांतरित करें.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"B", each Text.From(_ + 1), type text},
    Number.FromText
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "3"],
    [A = 5, B = "11"]
})
```




## Category
Table.Transformation
