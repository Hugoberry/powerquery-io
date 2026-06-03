---
title: List.Distinct
---

# List.Distinct


उन मानों की सूची लौटाता है जिनके डुप्लिकेट निकाल दिए गए हैं.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

एक सूची लौटाता है जिसमें निर्दिष्ट सूची के सभी मान शामिल होते हैं, तथा डुप्लिकेट हटा दिए जाते हैं. अगर निर्दिष्ट सूची खाली है, तो परिणाम एक खाली सूची होगी.

-   `list`: वह सूची जिससे अद्वितीय मान निकाले जाते हैं.
-   `equationCriteria`: (वैकल्पिक) निर्दिष्ट करता है कि मानों की तुलना करते समय समानता कैसे निर्धारित होती है. यह पैरामीटर एक कुंजी चयनकर्ता फ़ंक्शन, एक तुलनाकर्ता फ़ंक्शन, या एक सूची हो सकती है जिसमें कुंजी चयनकर्ता और तुलनाकर्ता दोनों शामिल हैं.


## Examples

### Example #1
सूची \{1, 1, 2, 3, 3, 3\} से डुप्लिकेट निकालें
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
सूची के अंत से शुरू करते हुए, उन फलों का चयन करें जिनके टेक्स्ट की लंबाई सबसे अलग है.
```powerquery
let
    Source = {"Apple", "Banana", "Cherry", "Date", "Fig"},
    Result = List.Distinct(List.Reverse(Source), each Text.Length(_))
in
    Result
```

Result: 
```powerquery
{"Fig", "Date", "Cherry", "Apple"}
```


### Example #3
सूची की शुरुआत से शुरू करते हुए, केस की परवाह किए बिना अद्वितीय फलों का चयन करें.
```powerquery
let
    Source = {"apple", "Pear", "aPPle", "banana", "ORANGE", "pear", "Banana", "Cherry"},
    Result = List.Distinct(Source, Comparer.OrdinalIgnoreCase)
in
    Result
```

Result: 
```powerquery
{"apple", "Pear", "banana", "ORANGE", "Cherry"}
```


### Example #4
सूचियों की सूची से केस की परवाह किए बिना अद्वितीय देश नामों वाली पहली सूचियों को निकालें. निकाली गई सूचियों को किसी नई तालिका की पंक्तियों में रखें.
```powerquery
let
    Source = {
        {"USA", #date(2023, 8, 1), 567},
        {"canada", #date(2023, 8, 1), 254},
        {"Usa", #date(2023, 7, 1), 450},
        {"CANADA", #date(2023, 6, 1), 357},
        {"Panama", #date(2023, 6, 2), 20},
        {"panama", #date(2023, 7, 1), 40}
    },
    DistinctByCountry = List.Distinct(
        Source,
        {each _{0}, Comparer.OrdinalIgnoreCase}
    ),
    ToTable = Table.FromRows(DistinctByCountry, {"Country", "Date", "Value"}),
    ChangeTypes = Table.TransformColumnTypes(
        ToTable, {{"Country", type text}, {"Date", type date}, {"Value", Int64.Type}}
    )
in
    ChangeTypes
```

Result: 
```powerquery
#table(type table[Country = text, Date = date, Value = Int64.Type],
{
    {"USA", #date(2023, 8, 1), 567},
    {"canada", #date(2023, 8, 1), 254},
    {"Panama", #date(2023, 6, 2), 20}
})
```




## Category
List.Selection
