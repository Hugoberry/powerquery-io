---
title: OData.Feed
---

# OData.Feed


OData सेवा द्वारा प्रस्तावित OData फ़ीड की तालिका लौटाता है.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Remarks

किसी URI <code>serviceUri</code>, शीर्षलेख <code>headers</code>की OData सेवा द्वारा प्रदत्त OData फ़ीड वाली कोई तालिका लौटाता है. समवर्ती कनेक्शन का उपयोग किया जाए या किसी वैकल्पिक रिकॉर्ड पैरामीटर, <code>options</code>, का, यह निर्दिष्ट करने वाला बूलियन मान, निम्नलिखित विकल्पों को नियंत्रित करने के लिए निर्दिष्ट किया जा सकता है:    <ul>    <li><code>क्वेरी</code>: ऐस्केपिंग की चिंता किए बिना प्रोग्राम के ज़रिए URL में क्वेरी पैरामीटर जोड़ें. </li>    <li> <code>शीर्षलेख</code> : इस मान को किसी रिकॉर्ड के रूप में निर्दिष्ट करना किसी HTTP अनुरोध को अतिरिक्त शीर्षलेख प्रदान करेगा.</li>    <li> <code>ExcludedFromCacheKey</code>: इस मान को किसी सूची के रूप में निर्दिष्ट करना इन HTTP शीर्षलेख कुंजियों को कैशिंग डेटा के परिकलन का भाग होने से निकाल देगा </li>    <li> <code>ApiKeyName</code> : यदि लक्ष्य साइट में एक API कुंजी की धारणा है, तो इस पैरामीटर का उस कुंजी पैरामीटर के नाम को (मान को नहीं) निर्दिष्ट करने के लिए उपयोग किया जा सकता है जिसका URL में अवश्य उपयोग किया जाना चाहिए. वास्तविक कुँजी मान क्रेडेंशियल में प्रदान किया जाता है.</li>    <li> <code>टाइमआउट</code> :  इस मान को किसी अवधि के रूप में निर्दिष्ट करना किसी HTTP अनुरोध के टाइमआउट को बदल देगा. डिफ़ॉल्ट मान 600 सेकंड है.</li>    <li> <code>EnableBatch</code> : कोई तार्किक (true/false) जो यह सेट करता है कि MaxUriLength की सीमा पार हो जाने पर किसी OData $batch अनुरोध के जनरेशन की अनुमति देनी है या नहीं (डिफ़ॉल्ट false है).</li>    <li> <code>MaxUriLength</code> : कोई संख्या जो किसी OData सेवा को प्रेषित किसी अनुमत URI की अधिकतम लंबाई को इंगित करती है. यदि इसकी सीमा पार हो जाए और EnableBatch यदि true हो, तो अनुरोध OData $batch समाप्ति बिंदु को किया जाएगा, अन्यथा यह विफल हो जाएगा (डिफ़ॉल्ट 2048 है).</li>    <li> <code>Concurrent</code> : कोई तार्किक (true/false) जब true पर सेट किया गया हो, तो सेवा के लिए अनुरोध एक साथ ही किए जाएँगे. False पर सेट होने पर, अनुरोध क्रमिक रूप से किए जाएँगे. निर्दिष्ट नहीं किए जाने पर, सेवा के AsynchronousRequestsSupported एनोटेशन द्वारा मान को निर्धारित किया जाएगा. यदि सेवा यह निर्दिष्ट नहीं करती है कि AsynchronousRequestsSupported समर्थित है या नहीं, तो अनुरोध क्रमिक रूप से किए जाएँगे.</li>    <li> <code>ODataVersion</code> : कोई संख्या (3 या 4) जो इस OData सेवा के लिए उपयोग होने वाले OData प्रोटोकॉल संस्करण को निर्दिष्ट करती है. निर्दिष्ट नहीं किए जाने पर, सभी समर्थित संस्करणों का अनुरोध किया जाएगा. सेवा संस्करण को सेवा द्वारा लौटाए गए OData-संस्करण के शीर्षलेख द्वारा निर्धारित किया जाएगा.</li>    <li> <code>FunctionOverloads</code> : तार्किक (true/false) जब true पर सेट किया गया हो, तो फ़ंक्शन आयात ओवरलोड्स को नेविगेटर में अलग-अलग प्रविष्टियों के रूप में सूचीबद्ध किया जाएगा, false पर सेट होने पर, फ़ंक्शन आयात ओवरलोड को नेविगेटर में एक यूनियन फ़ंक्शन के रूप में सूचीबद्ध किया जाएगा. V3 के लिए डिफ़ॉल्ट मान: false. V4 के लिए डिफ़ॉल्ट मान: true है.</li>    <li> <code>MoreColumns</code> : कोई तार्किक (true/false) जब true पर सेट किया गया हो, तो खुले प्रकारों और बहुरूपी प्रकारों वाले प्रत्येक निकाय फ़ीड में एक "अधिक कालम" वाले कालम को जोड़ता है. इसमें वे फ़ील्ड शामिल होंगे जो आधार प्रकार में घोषित नहीं हैं. False होने पर, यह फ़ील्ड मौजूद नहीं होता है. False.पर डिफ़ॉल्ट कर जाता है.</li>    <li> <code>IncludeAnnotations</code> : "\*" के साथ किसी वाइल्डकार्ड के रूप में शामिल करने के लिए योग्य शब्द नामों या प्रतिमानों की कॉमा सेपरेटेड सूची. डिफ़ॉल्ट रूप से, एनोटेशन में से किसी को भी शामिल नहीं किया गया है.</li>    <li> <code>IncludeMetadataAnnotations</code> :  "\*" के साथ किसी वाइल्डकार्ड के रूप में मेटाडेटा दस्तावेज़ अनुरोधों में शामिल करने के लिए योग्य शब्द नामों या प्रतिमानों की कॉमा सेपरेटेड सूची. डिफ़ॉल्ट रूप से, IncludeAnnotations जैसे ही एनोटेशन शामिल होते हैं.</li>    <li> <code>OmitValues</code> : OData सेवा को, प्रतिसादों में कुछ मानों को लिखने से बचने की, अनुमति देता है. यदि सेवा द्वारा इसे स्वीकार किया जाता है, तो हम छोड़े गए फ़ील्ड से उन मानों का अनुमान लगाएँगे. विकल्पों में शामिल हैं:      <ul>        <li><code>ODataOmitValues.Nulls</code> : OData सेवा को नल मानों को छोड़ देने की अनुमति देता है.</li>      </ul>    </li>    <li> <code>कार्यान्वयन</code> : उपयोग में लिए जाने वाले OData कनेक्टर का कार्यान्वयन निर्दिष्ट करता है. मान्य मान "2.0" या null हैं.</li>    </ul>


## Examples

### Example #1 
TripPin OData सेवा से कनेक्ट करें.
```powerquery
OData.Feed("https://services.odata.org/V4/TripPinService")
```

Result: 
```powerquery
table
```




## Category
Accessing data