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

CSV दस्तावेज़ की सामग्रियों को एक तालिका के रूप में लौटाता है.

-   `columns` नल, कॉलम की संख्या, कॉलम नामों की एक सूची, तालिका का एक प्रकार, या विकल्पों का एक रिकॉर्ड हो सकता है.
-   `delimiter` कोई एकल वर्ण, वर्णों की एक सूची, या मान `""` हो सकता है जो यह इंगित करे कि पंक्तियों को क्रमिक व्हाइटस्पेस वर्णों द्वारा विभाजित होना चाहिए. डिफ़ॉल्ट: `","`.
-   `extraValues` के समर्थित मानों के लिए `ExtraValues.Type` का संदर्भ लें.
-   `encoding` टेक्स्ट एन्कोडिंग प्रकार को निर्दिष्ट करता है.

अगर `columns` के लिए कोई रिकॉर्ड निर्दिष्ट किया गया हो (और `delimiter`, `extraValues`, तथा `encoding` नल हों), तो निम्न रिकॉर्ड फील्ड्स प्रदान की जा सकती हैं:

-   `डिलिमिटर`: एकल वर्ण कॉलम डिलिमिटर. डिफ़ॉल्ट: `","`.
-   `कॉलम्स`: नल, कॉलम की संख्या, कॉलम नामों की एक सूची, या तालिका का एक प्रकार हो सकता है. अगर कॉलम की संख्या इनपुट में मिली संख्या से कम हो, तो अतिरिक्त कॉलम को अनदेखा कर दिया जाएगा. अगर कॉलम की संख्या इनपुट में मिली संख्या से अधिक हो, तो अतिरिक्त कॉलम नल होंगे. जब निर्दिष्ट न की गई हो, तो कॉलम की संख्या जो इनपुट में मिलती है उसी से निर्धारित की जाएगी.
-   `एन्कोडिंग`: फ़ाइल की टेक्स्ट एन्कोडिंग. डिफ़ॉल्ट: 65001 (UTF-8).
-   `CsvStyle`: निर्दिष्ट करता है कि उद्धरणों को कैसे हैंडल किया जाता है.
    -   `CsvStyle.QuoteAfterDelimiter` (डिफ़ॉल्ट): किसी फ़ील्ड में उद्धरण केवल डिलिमिटर के तुरंत बाद महत्वपूर्ण होते हैं.
    -   `CsvStyle.QuoteAlways`: किसी फ़ील्ड में उद्धरण हमेशा महत्वपूर्ण होते हैं, भले ही वे कहीं भी दिखाई दें.
-   `QuoteStyle`: उद्धृत किए गए लाइन ब्रेक कैसे हैंडल किए जाते हैं, यह निर्दिष्ट करता है.
    -   `QuoteStyle.Csv` (डिफ़ॉल्ट): उद्धृत किए गए लाइन ब्रेक को डेटा का भाग माना जाता है, न की वर्तमान पंक्ति का अंत.
    -   `QuoteStyle.None`: उद्धृत किए गए सभी लाइन ब्रेक्स को वर्तमान पंक्ति का अंत माना जाता है, भले ही वे किसी उद्धृत किए गए मान के अंदर हों.
-   `IncludeByteOrderMark`: एक तार्किक मान जो यह इंगित करता है कि CSV आउटपुट की शुरुआत में Byte Order Mark (BOM) शामिल करना है या नहीं. जब सही पर सेट किया जाता है, तो BOM लिखा जाता है (उदाहरण के लिए, UTF-8 BOM: `0xEF 0xBB 0xBF`); जब गलत पर सेट किया जाता है, तो कोई BOM शामिल नहीं किया जाता है. यह विकल्प केवल आउटपुट परिदृश्यों में लागू होता है. डिफ़ॉल्ट `false` है.
-   `ExtraValues`: ExtraValues के समर्थित मानों के लिए `ExtraValues.Type` देखें.


## Examples

### Example #1
CSV पाठ को स्तंभ शीर्षलेखों के साथ संसाधित करें.
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


### Example #2
Process CSV text with multiple delimiter characters. In this example, the third parameter specifies the delimiter pattern `#|#` to use instead of the default.
```powerquery
let
    csv = Text.Combine({"OrderID#|#Color", "1#|#Red", "2#|#Blue"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv, null, "#|#"))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Color = "Red"],
    [OrderID = "2", Color = "Blue"]
})
```




## Category
Accessing data
