---
title: Binary.ViewFunction
---

# Binary.ViewFunction


एक ऐसा फ़ंक्शन बनाता है, जिसे किसी दृश्य पर (Binary.View के माध्यम से) परिभाषित किए गए हैंडलर द्वारा बीच में रोका जा सकता है.


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Remarks

<code>function</code> पर आधारित कोई ऐसा दृश्य फ़ंक्शन बनाता है, जिसे <code>Binary.View</code> द्वारा बनाए गए दृश्य में हैंडल किया जा सकता है.<br /> <code>Binary.View</code> के <code>OnInvoke</code> हैंडलर का उपयोग दृश्य फ़ंक्शन के लिए हैंडलर परिभाषित करने हेतु किया जा सकता है.<br />अंतर्निहित कार्रवाइयों के हैंडलर्स की तरह, यदि कोई भी <code>OnInvoke</code> हैंडलर निर्दिष्ट नहीं है या यह दृश्य फ़ंक्शन को हैंडल नहीं करता है या हैंडलर द्वारा कोई त्रुटि उठाई जाती है, तो <code>function</code> को दृश्य के शीर्ष पर लागू किया जाता है.<br /> <code>Binary.View</code> और कस्टम दृश्य फ़ंक्शन के अधिक पूर्ण विवरण के लिए प्रकाशित Excel के लिए Microsoft Power Query कस्टम कनेक्टर दस्तावेज़ीकरण देखें.<br />



## Category
Binary
