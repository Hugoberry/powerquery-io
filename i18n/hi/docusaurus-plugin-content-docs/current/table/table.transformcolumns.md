---
title: Table.TransformColumns
---

# Table.TransformColumns


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


## Remarks

एक सूची में दिए गए हर कॉलम ऑपरेशन को लागू करके निर्दिष्ट तालिका को रूपांतरित करता है.

-   `table`: रूपांतरित करने के लिए तालिका.
-   `transformOperations`: तालिका में किए जाने वाले रूपांतरण. इस पैरामीटर का फ़ॉर्मेट या तो \{ column name, transformation \} या \{ column name, transformation, new column type \} है.
-   `defaultTransformation`: (वैकल्पिक) डिफ़ॉल्ट रूपांतरण उन सभी कॉलम्स पर लागू होता है जो `transformOperations` में सूचीबद्ध नहीं हैं.
-   `missingField`: (वैकल्पिक) अनुपलब्ध मानों के लिए अपेक्षित कार्रवाई को निर्दिष्ट करता है. अगर `transformOperations` में सूचीबद्ध कोई कॉलम मौजूद नहीं है, तो जब तक यह पैरामीटर कोई वैकल्पिक निर्दिष्ट नहीं करता, तब तक एक त्रुटि (`MissingField.Error`) आती रहेगी. निम्न में से किसी एक मान का उपयोग करें:
    -   `MissingField.UseNull` : कोई भी अनुपलब्ध फ़ील्ड `null` मान के रूप में शामिल की जाती है.
    -   `MissingField.Ignore`: किसी भी अनुपलब्ध फ़ील्ड की उपेक्षा की जाती है.


## Examples

### Example #1
स्तंभ \[A\] के पाठ मानों को संख्या मानों में और स्तंभ \[B\] के संख्या मानों को पाठ मानों में रूपांतरित करें.
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
गायब कॉलम \[X\] में मौजूद संख्यात्मक मानों को टेक्स्ट मानों में बदलें; जिन कॉलमों का अस्तित्व नहीं है, उनके लिए डिफ़ॉल्ट रूप से `null` का उपयोग करें.
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


### Example #3
स्तंभ \[B\] में संख्या मानों को वृद्धि करें और उन्हें पाठ मानों में रूपांतरित करें और अन्य सभी स्तंभों को संख्याओं में रूपांतरित करें.
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


### Example #4
किसी संयुक्त राज्य के अवकाश पर होने वाले शेड्यूल किए गए रखरखाव के कार्यों को अगले दिन पर, या यदि अवकाश शुक्रवार के दिन आता हो, तो अगले सोमवार पर, ले जाएँ.
```powerquery
let
    MaintenanceSchedule = #table(type table [Task = text, Date = date],
    {
        {"HVAC Check", #date(2025, 7, 10)},         // Not a holiday
        {"Window Washing", #date(2025, 9, 1)},      // Labor Day
        {"Fire Drill", #date(2025, 9, 17)},         // Not a holiday
        {"Light Replacement", #date(2025, 11, 27)}  // Thanksgiving
    }),
    USHolidays = {
        #date(2025, 1, 1),   // New Year's Day
        #date(2025, 7, 4),   // Independence Day
        #date(2025, 9, 1),   // Labor Day
        #date(2025, 11, 27), // Thanksgiving
        #date(2025, 12, 25)  // Christmas
    },
    AdjustedSchedule = Table.TransformColumns(
        MaintenanceSchedule,
        {{"Date", each if List.Contains(USHolidays, _) then
            if Date.DayOfWeek(_, Day.Sunday) = 5 then
                Date.AddDays(_, 3)     // Friday to Monday
            else
                Date.AddDays(_, 1)     // Other to next day
        else _, type date}}
    )
in
    AdjustedSchedule
```

Result: 
```powerquery
#table(type table[Task = text, Date = date],
{
    {"HVAC Check", #date(2025, 7, 10)},
    {"Window Washing", #date(2025, 9, 2)},
    {"Fire Drill", #date(2025, 9, 17)},
    {"Light Replacement", #date(2025, 11, 28)}
})
```




## Category
Table.Transformation
