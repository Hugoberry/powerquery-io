---
title: Date.FromText
---

# Date.FromText


## Description

स्थानीय, वैश्विक और कस्टम दिनांक फ़ॉर्मेट से दिनांक बनाता है.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Details

पाठ प्रस्तुतिकरण, <code>text</code> से <code>date</code> मान बनाता है. वैकल्पिक <code>रिकॉर्ड</code> पैरामीटर, <code>options</code> अतिरिक्त गुणों को निर्दिष्ट करने के लिए प्रदान किया जा सकता है. <code>रिकॉर्ड</code> में निम्न फ़ील्ड हो सकती हैं:<ul>   <li><code>फ़ॉर्मेट</code>: उपयोग करने के लिए फ़ॉर्मेट को इंगित करने वाला <code>text</code> मान. https://go.microsoft.com/fwlink/?linkid=2180104 और https://go.microsoft.com/fwlink/?linkid=2180105 पर जाएँ. इस फ़ील्ड को छोड़ देने से या <code>नल</code> प्रदान करने के परिणामस्वरूप सर्वश्रेष्ठ प्रयास का उपयोग करके दिनांक पार्स होगी.</li>   <li><code>कल्चर</code>: जब <code>फ़ॉर्मेट</code> नल नहीं होता है, तब <code>कल्चर</code> कुछ फ़ॉर्मेट निर्दिष्टकर्ताओं को नियंत्रित करता है. उदाहरण के लिए, <code>"en-US"</code> <code>"MMM"</code> में यह <code>"Jan", "Feb", "Mar", ...</code> होता है, जबकि <code>"ru-RU"</code> <code>"MMM"</code> <code>"янв", "фев", "мар", ...</code> होता है. जब <code>फ़ॉर्मेट</code> <code>नल</code> होता है, तब <code>कल्चर</code> उपयोग करने के लिए डिफ़ॉल्ट फ़ॉर्मेट को नियंत्रित करता है. जब <code>Culture</code> <code>नल</code> होता है या छोड़ दिया जाता है, तब <code>Culture.Current</code> का उपयोग किया जाता है.</li></ul>लीगेसी कार्यप्रवाह का समर्थन करने के लिए, <code>options</code> पाठ मान भी हो सकता है. इसमें <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code> जैसा समान व्यवहार होता है.


## Examples

### Example #1 
&lt;code&gt;&#34;2010-12-31&#34;&lt;/code&gt; को &lt;code&gt;दिनांक&lt;/code&gt; मान में रूपांतरित करें.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2 
कस्टम फ़ॉन्ट और जर्मन कल्चर का उपयोग करके रूपांतरित करें.
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3 
ग्रेगोरियन कैलेंडर में वह दिनांक ढूँढें जो हिजरी कैलेंडर में 1400 के प्रारंभ से संगत है.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```




## Category
Date
