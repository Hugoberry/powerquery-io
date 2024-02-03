---
title: Table.AddFuzzyClusterColumn
---

# Table.AddFuzzyClusterColumn


## Description

तालिका में निर्दिष्ट स्तंभ के फ़ज़ी समूहीकरण मानों द्वारा प्राप्त किए गए प्रतिनिधि मानों वाला एक नया स्तंभ जोड़ता है.


## Syntax

```powerquery
Table.AddFuzzyClusterColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional options as record
) as table
```


## Details

<code>columnName</code> के प्रतिनिधि मानों वाले <code>table</code> में एक नया स्तंभ <code>newColumnName</code> जोड़ता है. प्रत्येक पंक्ति के लिए, <code>columnName</code> में फज़ी तौर पर मिलान मानों द्वारा प्रतिनिधियों को प्राप्त किया जाता है.    कुंजी स्तंभ की तुलना करने के तरीके को निर्दिष्ट करने के लिए <code>options</code> का एक वैकल्पिक सेट शामिल किया जा सकता है. विकल्पों में शामिल हैं:     <ul><li><code>Culture</code> : निर्दिष्ट कल्चर नियमों के आधार पर समूहीकरण वाले रिकॉर्ड्स को अनुमति देता है. यह कोई मान्य कल्चर नाम हो सकता है. उदाहरण के लिए, &quot;ja-JP&quot; का कल्चर विकल्प, जापानी संस्कृति पर आधारित रिकॉर्ड को समूहीकृत करता है. डिफ़ॉल्ट मान &quot;&quot; है, जो अपरिवर्तनीय अंग्रेज़ी कल्चर पर आधारित है.</li><li><code>IgnoreCase</code> : एक तार्किक (सही/गलत) मान, जो केस-असंवेदी कुंजी समूहीकरण की अनुमति देता है. उदाहरण के लिए, जब सही होता है, तो &quot;Grapes&quot; को &quot;grapes&quot; के साथ समूहीकृत किया जाता है. डिफ़ॉल्ट मान सही होता है.</li><li><code>IgnoreSpace</code> : एक तार्किक (सही/गलत) मान, जो समूहों को ढूँढने के लिए पाठ भागों के संयोजन की अनुमति देता है. उदाहरण के लिए, जब सही होता है, तो &quot;Gra pes&quot; को &quot;Grapes&quot; के साथ समूहीकृत किया जाता है. डिफ़ॉल्ट मान सही होता है.</li><li><code>SimilarityColumnName</code> : उस स्तंभ का नाम, जो इनपुट मान और उस इनपुट के प्रतिनिधि मान के बीच की समानता को दर्शाता है. डिफ़ॉल्ट मान नल है, इस स्थिति में समानता के लिए एक नया स्तंभ नहीं जोड़ा जाएगा.</li><li><code>Threshold</code> : 0.00 और 1.00 के बीच की संख्या जो समान होने का स्कोर दिखाती है जिस पर दो मान समूहीकृत किए जाएँगे.     उदाहरण के लिए, &quot;Grapes&quot; और &quot;Graes&quot; (अनुपलब्ध &quot;p&quot;) केवल तब ही समूहीकृत होते हैं जब यह विकल्प 0.90 से कम पर सेट हो.    1.00 का थ्रेशोल्ड केवल सटीक मिलान की अनुमति देता है.    (ध्यान दें कि एक फ़ज़ी &quot;सटीक मिलान&quot; आवरण, शब्द क्रम और विराम चिह्न जैसे अंतरों की उपेक्षा कर सकता है.)     डिफ़ॉल्ट मान 0.80 है.</li><li><code>TransformationTable</code> : एक तालिका जो कस्टम मान मैपिंग के आधार पर रिकॉर्ड्स के समूहीकरण की अनुमति देती है. इसमें &quot;प्रेषक&quot; और &quot;प्रेषित&quot; स्तंभ शामिल होने चाहिए. उदाहरण के लिए, &quot;Grapes&quot; को &quot;Raisins&quot; के साथ समूहीकृत किया गया है, यदि कोई रूपांतरण तालिका &quot;प्रेषक&quot; स्तंभ वाले &quot;Grapes&quot; और &quot;प्रेषित&quot; स्तंभ वाले &quot;Raisins&quot; के साथ प्रदान की गई है. ध्यान दें कि रूपांतरण तालिका में पाठ की सभी पुनरावृत्तियों के लिए रूपांतरण लागू किया जाएगा. ऊपर दिए गए रूपांतरण तालिका के साथ, &quot;Grapes are sweet&quot; के साथ &quot;Raisins are sweet&quot; को भी समूहीकृत किया जाएगा.</li></ul><br />    


## Examples

### Example #1 
कर्मचारियों के स्थान के लिए प्रतिनिधि मान प्राप्त करें.
```powerquery
Table.AddFuzzyClusterColumn(
    Table.FromRecords(
        {
            [EmployeeID = 1, Location = "Seattle"],
            [EmployeeID = 2, Location = "seattl"],
            [EmployeeID = 3, Location = "Vancouver"],
            [EmployeeID = 4, Location = "Seatle"],
            [EmployeeID = 5, Location = "vancover"],
            [EmployeeID = 6, Location = "Seattle"],
            [EmployeeID = 7, Location = "Vancouver"]
        },
        type table [EmployeeID = nullable number, Location = nullable text]
    ),
    "Location",
    "Location_Cleaned",
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [EmployeeID = 1, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 2, Location = "seattl", Location_Cleaned = "Seattle"],
        [EmployeeID = 3, Location = "Vancouver", Location_Cleaned = "Vancouver"],
        [EmployeeID = 4, Location = "Seatle", Location_Cleaned = "Seattle"],
        [EmployeeID = 5, Location = "vancover", Location_Cleaned = "Vancouver"],
        [EmployeeID = 6, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 7, Location = "Vancouver", Location_Cleaned = "Vancouver"]
    },
    type table [EmployeeID = nullable number, Location = nullable text, Location_Cleaned = nullable text]
)
```




## Category
Table.Transformation
