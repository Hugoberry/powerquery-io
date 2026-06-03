---
title: Table.RemoveMatchingRows
---

# Table.RemoveMatchingRows


तालिका से निर्दिष्ट पंक्तियों की सभी आवृत्तियाँ निकालता है.


## Syntax

```powerquery
Table.RemoveMatchingRows(
    table as table,
    rows as list,
    optional equationCriteria as any
) as table
```


## Remarks

तालिका से निर्दिष्ट पंक्तियों की सभी आवृत्तियाँ निकालता है.

-   `table`: खोजने के लिए तालिका.
-   `rows`: हटाई जाने वाली पंक्तियों के बारे में जानकारी वाली सूची.
-   `equationCriteria`: (वैकल्पिक) निर्दिष्ट करता है कि मानों की तुलना करते समय समानता कैसे निर्धारित होती है. यह पैरामीटर एक कुंजी चयनकर्ता फ़ंक्शन, एक तुलनाकर्ता फ़ंक्शन, या पंक्तियों की तुलना करते समय उपयोग करने के लिए तालिका में कॉलम्स की एक सूची हो सकती है.


## Examples

### Example #1
निर्दिष्ट तालिका से उन सभी पंक्तियों को निकालें जहाँ \[a = 1\] हो.
```powerquery
Table.RemoveMatchingRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4],
        [a = 1, b = 6]
    }),
    {[a = 1]},
    "a"
)
```

Result: 
```powerquery
Table.FromRecords({[a = 3, b = 4]})
```


### Example #2
केस पर ध्यान न देते हुए, रद्द किए गए ऑर्डर निकालें.
```powerquery
let
    CurrentOrders = #table(type table[OrderID = number, Product = text, Quantity = number],
    {
        {101, "Widget", 5},
        {102, "Gadget", 3},
        {103, "Widget", 5}
    }),
    CanceledOrders = {
        [OrderID = 103, Product = "widget", Quantity = 5]
    },
    FilteredOrders = Table.RemoveMatchingRows(CurrentOrders, CanceledOrders, Comparer.OrdinalIgnoreCase)
in
    FilteredOrders
```

Result: 
```powerquery
#table(type table[OrderID = number, Product = text, Quantity = number],
{
    {101, "Widget", 5},
    {102, "Gadget", 3}
})
```


### Example #3
US की छुट्टियों पर आने वाले किसी भी रखरखाव कार्य को निकालें.
```powerquery
let
    MaintenanceSchedule = #table(type table [Task = text, Date = date],
    {
        {"HVAC Check", #date(2025, 7, 10)},              // Not a holiday
        {"Window Washing", #date(2025, 9, 1)},           // Labor Day
        {"Fire Drill", #date(2025, 9, 17)},              // Not a holiday
        {"Light Bulb Replacement", #date(2025, 11, 27)}  // Thanksgiving
    }),

    USHolidays = {
        [Date = #date(2025, 1, 1)],   // New Year's Day
        [Date = #date(2025, 7, 4)],   // Independence Day
        [Date = #date(2025, 9, 1)],   // Labor Day
        [Date = #date(2025, 11, 27)], // Thanksgiving
        [Date = #date(2025, 12, 25)]  // Christmas
    },

    FilteredSchedule = Table.RemoveMatchingRows(
        MaintenanceSchedule,
        USHolidays,
        {"Date"}
    )
in
    FilteredSchedule
```

Result: 
```powerquery
#table(type table[Task = text, Date = date],
{
    {"HVAC Check", #date(2025, 7, 10)},
    {"Fire Drill", #date(2025, 9, 17)}
})
```




## Category
Table.Membership
