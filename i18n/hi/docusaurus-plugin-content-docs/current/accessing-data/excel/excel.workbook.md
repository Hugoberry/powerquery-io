---
title: Excel.Workbook
---

# Excel.Workbook


Excel कार्यपुस्तिका की सामग्रियों को लौटाता है.


## Syntax

```powerquery
Excel.Workbook(
    workbook as binary,
    optional useHeaders as any,
    optional delayTypes as logical
) as table
```


## Remarks

Excel कार्यपुस्तिका की सामग्री वापस करता है.     <ul>     <li> <code>useHeaders</code> नल हो सकता है, जो इंगित करता है कि प्रत्येक लौटाई गई तालिका की पहली पंक्ति को शीर्ष लेख के रूप में या एक विकल्प रिकॉर्ड के रूप में माना जाना चाहिए, एक तार्किक (सही/गलत) मान. डिफ़ॉल्ट: गलत. </li>     <li> <code>delayTypes</code> हो सकता है नल या तार्किक (सही/गलत) मान इंगित करता है कि प्रत्येक वापस की गई तालिका के स्तंभ लेबल्स को अनटाइप नहीं किया जाना चाहिए. डिफ़ॉल्ट: गलत. </li>    </ul>    यदि कोई रिकॉर्ड <code>useHeaders</code> (और <code>delayTypes</code> नल है) के लिए निर्दिष्ट किया गया है, तो निम्न रिकॉर्ड फ़ील्ड प्रदान की जा सकती हैं:     <ul>     <li> <code>UseHeaders</code>: नल या तार्किक (सही/गलत) मान यह इंगित करता है कि प्रत्येक वापस की गई तालिका की पहली पंक्ति को शीर्ष लेख के रूप में माना जाना चाहिए या नहीं. डिफ़ॉल्ट: false. </li>     <li> <code>DelayTypes</code>: नल या तार्किक (सही/गलत) मान यह इंगित कर सकता है कि प्रत्येक वापस की गई तालिका के स्तंभ लेबल्स को अनटाइप किया जाना चाहिए या नहीं. डिफ़ॉल्ट: गलत. </li>     <li> <code>InferSheetDimensions</code>: नल या लॉजिकल (सही/गलत) मान हो सकता है, जो इंगित करता है कि क्या किसी कार्यपत्रक का क्षेत्र जिसमें डेटा शामिल है, फ़ाइल से आयाम मेटाडेटा पढ़ने के बजाय कार्यपत्रक को स्वयं पढ़ कर अनुमान लगाया जाना चाहिए. यह उन मामलों में उपयोगी हो सकता है जहाँ आयाम मेटाडेटा गलत है. ध्यान दें कि यह विकल्प केवल Open XML Excel फ़ाइलों के लिए समर्थित है, न कि लीगेसी Excel फ़ाइलों के लिए. डिफ़ॉल्ट: गलत. </li>    </ul>    


## Examples

### Example #1 
Excel कार्यपुस्तिका से पत्रक1 की सामग्री वापस करें.
```powerquery
Excel.Workbook(File.Contents("C:\Book1.xlsx"), null, true){[Item="Sheet1"]}[Data]
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "ID", Column2 = "Name", Column3 = "Phone"],
    [Column1 = 1, Column2 = "Bob", Column3 = "123-4567"],
    [Column1 = 3, Column2 = "Pam", Column3 = "543-7890"],
    [Column1 = 2, Column2 = "Jim", Column3 = "987-6543"]
})
```




## Category
Accessing data
