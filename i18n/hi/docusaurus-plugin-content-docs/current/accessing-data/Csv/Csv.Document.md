---
title: Csv.Document
---

# Csv.Document


CSV दस्तावेज़ की सामग्रियों को एक तालिका के रूप लौटाता है.


## Syntax

```powerquery
Csv.Document(
    source as any,
    optional columns as any,
    optional delimiter as any,
    optional extraValues as number,
    optional encoding as TextEncoding.Type
) as table
```


## Remarks

CSV दस्तावेज़ की सामग्री को एक तालिका के रूप में लौटाता है.    <ul>     <li>         <code>columns</code> यह शून्य, कॉलम की संख्या, कॉलम के नामों की एक सूची या एक प्रकार की तालिका या विकल्पों का एक रिकॉर्ड हो सकता है.      </li>      <li>        <code>delimiter</code> कोई एक वर्ण या वर्णों की एक सूची या मान <code>""</code>हो सकता है, जो इंगित करता है कि पंक्तियों को लगातार व्हाइटस्पेस वर्णों से विभाजित किया जाना चाहिए. डिफ़ॉल्ट: <code>","</code>.      </li>      <li>         <code>extraValues</code> के समर्थित मानों के लिए <code>ExtraValues.Type</code> देखें.      </li>      <li>        <code>encoding</code>टेक्स्ट एन्कोडिंग के प्रकार को निर्दिष्ट करता है.      </li>    </ul>    यदि किसी रिकॉर्ड को <code>columns</code> के लिए निर्दिष्ट किया जाता है (और <code>delimiter</code>, <code>extraValues</code> और <code>encoding</code> शून्य हों), तो नीचे लिखी हुई रिकॉर्ड फ़ील्ड प्रदान की जा सकती हैं:   <ul>      <li>     <code>Delimiter</code>: कॉलम डेलीमीटर। डिफ़ॉल्ट: <code>","</code>.      </li>      <li>        <code>Columns</code>: शून्य हो सकता है, कॉलम की संख्या, कॉलम के नामों की एक सूची या एक प्रकार की तालिका हो सकती है. यदि कॉलम की संख्या इनपुट में पाई गई संख्या से कम है, तो अतिरिक्त कॉलम पर ध्यान नहीं दिया जाएगा. यदि कॉलम की संख्या इनपुट में पाई गई संख्या से ज़्यादा है, तो अतिरिक्त कॉलम शून्य हो जाएँगे. निर्दिष्ट न किए जाने पर, कॉलम की संख्या इनपुट में प्राप्त संख्या से निर्धारित की जाएगी.      </li>      <li>        <code>Encoding</code>: फ़ाइल के टेक्स्ट की एन्कोडिंग. डिफ़ॉल्ट: 65001 (UTF-8).      </li>      <li>      <code>CsvStyle</code>: निर्दिष्ट करता है कि कोट्स को कैसे हैंडल किया जाता है.        <ul>          <li>            <code>CsvStyle.QuoteAfterDelimiter</code> (डिफ़ॉल्ट): किसी फ़ील्ड में कोट् केवल तभी महत्वपूर्ण होते हैं जब वे डिलीमीटर के ठीक बाद हों.          </li>          <li>            <code>CsvStyle.QuoteAlways</code>: किसी फ़ील्ड में कोट्स हमेशा महत्वपूर्ण होते हैं चाहे वे जहाँ भी दिखाई दें.          </li>        </ul>      </li>      <li>        <code>QuoteStyle</code>: यह निर्दिष्ट करता है कि कोट किए गए पंक्ति विरामों को कैसे हैंडल किया जाता है..        <ul>          <li>            <code>QuoteStyle.None</code>  (डिफ़ॉल्ट): सभी पंक्ति विरामों को वर्तमान पंक्ति का अंत माना जाता है, भले ही वे किसी कोट किए गए मान के अंदर होंं.          </li>          <li>            <code>QuoteStyle.Csv</code>: कोट किए गए पंक्ति विरामों को डेटा के भाग के रूप में माना जाता है, न कि वर्तमान पंक्ति के अंत के रूप में.          </li>        </ul>      </li>    </ul>  


## Examples

### Example #1 
स्तंभ शीर्षलेखों के साथ CSV पाठ संसाधित करें
```powerquery
let
    csv = Text.Combine({"OrderID,Item", "1,Fishing rod", "2,1 lb. worms"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Item = "Fishing rod"],
    [OrderID = "2", Item = "1 lb. worms"]
})
```




## Category
Accessing data
