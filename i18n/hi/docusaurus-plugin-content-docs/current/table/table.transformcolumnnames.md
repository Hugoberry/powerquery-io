---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


दिए गए फ़ंक्शन का उपयोग करके स्तंभ नामों को परिवर्तित करता है.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Remarks

दिए गए `nameGenerator` फ़ंक्शन का उपयोग करके कालम नाम परिवर्तित करता है. मान्य विकल्प:

`MaxLength` नए कालम नाम की अधिकतम लंबाई निर्दिष्ट करता है. यदि दिए गए फ़ंक्शन के परिणामस्वरूप लंबे कालम नाम होते हैं, तो लंबा नाम छोटा कर दिया जाएगा.

एक `Comparer` है जिसका तुलना को नियंत्रित करने के लिए उपयोग किया जाता है. तुलनाकर्ता केस-असंवेदनशील या कल्चर और लोकेल-संवेदी तुलना प्रदान करने के लिए उपयोग किए जा सकते हैं.

निम्नलिखित बिल्ट-इन तुलनाकर्ता सूत्र भाषा में उपलब्ध है:

-   `Comparer.Ordinal`: सटीक क्रम तुलना पूरी करने के लिए उपयोग किया गया
-   `Comparer.OrdinalIgnoreCase`: सटीक क्रम केस-असंवेदनशील तुलना पूरी करने के लिए उपयोग किया गया
-   `Comparer.FromCulture`: कल्चर-संवेदी तुलना करने के लिए उपयोग किया गया


## Examples

### Example #1
स्तंभ नामों से `#(tab)` वर्ण निकालें
```powerquery
Table.TransformColumnNames(Table.FromRecords({[#"Col#(tab)umn" = 1]}), Text.Clean)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1]})
```


### Example #2
लंबाई 6 वाले अक्षर-असंवेदनशील नामों को जनरेट करने के लिए स्तंभ नामों को परिवर्तित करता है.
```powerquery
Table.TransformColumnNames(
    Table.FromRecords({[ColumnNum = 1, cOlumnnum = 2, coLumnNUM = 3]}),
    Text.Clean,
    [MaxLength = 6, Comparer = Comparer.OrdinalIgnoreCase]
)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1, cOlum1 = 2, coLum2 = 3]})
```




## Category
Table.Column operations
