---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


प्रदत्त स्तंभों पर तालिकाओं के बीच एक जॉइन करता है और एक नए स्तंभ में जॉइन परिणाम देता है.


## Syntax

```powerquery
Table.AddJoinColumn(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text
) as table
```


## Remarks

`key1` (`table1` के लिए) और `key2` (`table2` के लिए) द्वारा चयनित कुंजी स्तंभ के मानों की गुणवत्ता पर आधारित `table1` की पंक्तियों को `table2` की पंक्तियों के साथ जॉइन करता है. परिणामों को `newColumnName` नाम के स्तंभ में दर्ज किया जाता है. यह फ़ंक्शन, LeftOuter के JoinKind के साथ Table.Join के समान व्यवहार करता है इसके अलावा जॉइन परिणामों को फ़्लैटेड की तुलना में नेस्टेड फ़ैशन में प्रस्तुत किया जाता है.


## Examples

### Example #1
\[saleID\] पर जॉइन की गई तालिका (\{\[saleID = 1, price = 20\], \[saleID = 2, price = 10\]\}) से (\{\[saleID = 1, item = "Shirt"\], \[saleID = 2, item = "Hat"\]\}) में "price/stock" नाम का जॉइन स्तंभ जोड़ें.
```powerquery
Table.AddJoinColumn(
    Table.FromRecords({
        [saleID = 1, item = "Shirt"],
        [saleID = 2, item = "Hat"]
    }),
    "saleID",
    () => Table.FromRecords({
        [saleID = 1, price = 20, stock = 1234],
        [saleID = 2, price = 10, stock = 5643]
    }),
    "saleID",
    "price"
)
```

Result: 
```powerquery
Table.FromRecords({
    [
        saleID = 1,
        item = "Shirt",
        price = Table.FromRecords({[saleID = 1, price = 20, stock = 1234]})
    ],
    [
        saleID = 2,
        item = "Hat",
        price = Table.FromRecords({[saleID = 2, price = 10, stock = 5643]})
    ]
})
```




## Category
Table.Transformation
