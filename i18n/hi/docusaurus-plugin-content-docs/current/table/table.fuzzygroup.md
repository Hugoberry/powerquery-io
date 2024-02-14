---
title: Table.FuzzyGroup
---

# Table.FuzzyGroup


कुंजियों के फ़ज़ी मिलान पर आधारित तालिका में पंक्तियों को समूहीकृत करता है.


## Syntax

```powerquery
Table.FuzzyGroup(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional options as record
) as table
```


## Remarks

प्रत्येक पंक्ति के लिए निर्दिष्ट स्तंभ, <code>key</code>, में फज़ी तौर पर मिलान मानों द्वारा <code>table</code> की पंक्तियों को समूहीकृत करता है.    प्रत्येक समूह के लिए एक ऐसे रिकॉर्ड का निर्माण किया जाता है, जिसमें <code>aggregatedColumns</code> द्वारा निर्दिष्ट किए गए किसी भी एकीकृत स्तंभ के साथ कुंजी स्तंभ (और उनके मान) शामिल होते हैं.    यह फ़ंक्शन पंक्तियों के निश्चित क्रम को लौटाने की गारंटी नहीं दे सकता.    कुंजी स्तंभ की तुलना करने के तरीके को निर्दिष्ट करने के लिए <code>options</code> का एक वैकल्पिक सेट शामिल किया जा सकता है. विकल्पों में शामिल हैं:    <ul><li><code>Culture</code> : निर्दिष्ट कल्चर नियमों के आधार पर समूहीकरण वाले रिकॉर्ड्स को अनुमति देता है. यह कोई मान्य कल्चर नाम हो सकता है. उदाहरण के लिए, &quot;ja-JP&quot; का कल्चर विकल्प, जापानी संस्कृति पर आधारित रिकॉर्ड को समूहीकृत करता है. डिफ़ॉल्ट मान &quot;&quot; है, जो अपरिवर्तनीय अंग्रेज़ी कल्चर पर आधारित है.</li><li><code>IgnoreCase</code> : एक तार्किक (सही/गलत) मान, जो केस-असंवेदी कुंजी समूहीकरण की अनुमति देता है. उदाहरण के लिए, जब सही होता है, तो &quot;Grapes&quot; को &quot;grapes&quot; के साथ समूहीकृत किया जाता है. डिफ़ॉल्ट मान सही होता है.</li><li><code>IgnoreSpace</code> : एक तार्किक (सही/गलत) मान, जो समूहों को ढूँढने के लिए पाठ भागों के संयोजन की अनुमति देता है. उदाहरण के लिए, जब सही होता है, तो &quot;Gra pes&quot; को &quot;Grapes&quot; के साथ समूहीकृत किया जाता है. डिफ़ॉल्ट मान सही होता है.</li><li><code>SimilarityColumnName</code> : उस स्तंभ का नाम, जो इनपुट मान और उस इनपुट के प्रतिनिधि मान के बीच की समानता को दर्शाता है. डिफ़ॉल्ट मान नल है, इस स्थिति में समानता के लिए एक नया स्तंभ नहीं जोड़ा जाएगा.</li><li><code>Threshold</code> : 0.00 और 1.00 के बीच की संख्या जो समान होने का स्कोर दिखाती है जिस पर दो मान समूहीकृत किए जाएँगे.     उदाहरण के लिए, &quot;Grapes&quot; और &quot;Graes&quot; (अनुपलब्ध &quot;p&quot;) केवल तब ही समूहीकृत होते हैं जब यह विकल्प 0.90 से कम पर सेट हो.    1.00 का थ्रेशोल्ड केवल सटीक मिलान की अनुमति देता है.    (ध्यान दें कि एक फ़ज़ी &quot;सटीक मिलान&quot; आवरण, शब्द क्रम और विराम चिह्न जैसे अंतरों की उपेक्षा कर सकता है.)     डिफ़ॉल्ट मान 0.80 है.</li><li><code>TransformationTable</code> : एक तालिका जो कस्टम मान मैपिंग के आधार पर रिकॉर्ड्स के समूहीकरण की अनुमति देती है. इसमें &quot;प्रेषक&quot; और &quot;प्रेषित&quot; स्तंभ शामिल होने चाहिए. उदाहरण के लिए, &quot;Grapes&quot; को &quot;Raisins&quot; के साथ समूहीकृत किया गया है, यदि कोई रूपांतरण तालिका &quot;प्रेषक&quot; स्तंभ वाले &quot;Grapes&quot; और &quot;प्रेषित&quot; स्तंभ वाले &quot;Raisins&quot; के साथ प्रदान की गई है. ध्यान दें कि रूपांतरण तालिका में पाठ की सभी पुनरावृत्तियों के लिए रूपांतरण लागू किया जाएगा. ऊपर दिए गए रूपांतरण तालिका के साथ, &quot;Grapes are sweet&quot; के साथ &quot;Raisins are sweet&quot; को भी समूहीकृत किया जाएगा.</li></ul><br />    


## Examples

### Example #1 
किसी एकीकृत स्तंभ [संख्या] जोड़कर तालिका को समूहीकृत करें, जिसमें प्रत्येक स्थान (&#34;each Table.RowCount(_))&#34;) में कर्मचारियों की संख्या शामिल हों.
```powerquery
Table.FuzzyGroup(
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
    {"Count", each Table.RowCount(_)},
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords({
    [Location = "Seattle", Count = 4],
    [Location = "Vancouver", Count = 3]
})
```




## Category
Table.Transformation
