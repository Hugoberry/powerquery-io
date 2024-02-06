---
title: Function.ScalarVector
---

# Function.ScalarVector


एकाधिक इन्वोकेशन को बैच करते हुए किसी वेक्टर फ़ंक्शन के शीर्ष पर स्केलर फ़ंक्शन बनाता है.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

<code>scalarFunctionType</code> प्रकार का एक स्केलर फ़ंक्शन लौटाता है जो तर्कों की एकल पंक्ति के साथ <code>vectorFunction</code> को इनवोक करता है और अपना एकल आउटपुट लौटाता है. इसके अतिरिक्त, जब इनपुट की किसी तालिका की प्रत्येक पंक्ति के लिए स्केलर फ़ंक्शन बार-बार लागू किया जाता है, जैसे कि Table.AddColumn में, तो इसकी बजाय <code>vectorFunction</code> सभी इनपुट में एक बार लागू किया जाएगा. <br /><code>vectorFunction</code> ऐसी तालिका से पास किया जाएगा, जिसके स्तंभ नाम और स्थिति में <code>scalarFunctionType</code> के पैरामीटर मेल खाते हैं. इस तालिका की प्रत्येक पंक्ति में <code>scalarFunctionType</code> के पैरामीटर के अनुरूप स्तंभों के साथ स्केलर फ़ंक्शन की एक कॉल के लिए तर्क शामिल हैं.<br /><code>vectorFunction</code> को इनपुट तालिका की समान लंबाई वाली ऐसी सूची लौटाना अनिवार्य है, जिसकी प्रत्येक स्थिति पर आइटम का समान स्थिति की इनपुट पंक्ति पर स्केलर फ़ंक्शन का मूल्यांकन के रूप में समान परिणाम होना चाहिए.<br />इनपुट तालिका का स्ट्रीम होना अपेक्षित है, इसलिए <code>vectorFunction</code> से इनपुट आते ही एक बार में इनपुट के केवल एक चंक के साथ कार्य करने वाले अपने ऑउटपुट को स्ट्रीम करना अपेक्षित है. विशेष रूप से, <code>vectorFunction</code> को अपनी इनपुट तालिका एक से अधिक बार इन्यूमरेट नहीं करना चाहिए.<br />



## Category
Function
