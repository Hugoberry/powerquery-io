---
title: Date.ToText
---

# Date.ToText


दिनांक मान का पाठ प्रस्तुतिकरण लौटाता है.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

<code>date</code> का पाठ प्रस्तुतिकरण वापस करता है. वैकल्पिक <code>रिकॉर्ड</code> पैरामीटर, <code>options</code>, अतिरिक्त गुणों को निर्दिष्ट करने के लिए प्रदान किया जा सकता है. <code>culture</code> का केवल लीगेसी कार्यप्रवाह के लिए उपयोग किया जाता है. <code>रिकॉर्ड</code> में निम्न फ़ील्ड हो सकती हैं:<ul>   <li><code>फ़ॉर्मेट</code>: <code>पाठ</code> मान जो उपयोग करने के लिए फ़ॉर्मेट इंगित करता है. https://go.microsoft.com/fwlink/?linkid=2180104 और https://go.microsoft.com/fwlink/?linkid=2180105 पर जाएँ. इस फ़ील्ड को हटाने से या <code>नल</code> प्रदान करने से <code>कल्चर</code> द्वारा परिभाषित मान का उपयोग करके दिनांक फ़ॉर्मेट होगी.</li>   <li><code>कल्चर</code>: जब <code>फ़ॉर्मेट</code> नल न हो, तो <code>कल्चर</code> कुछ फ़ॉर्मेट निर्दिष्टकर्ताओं को नियंत्रित करता है. उदाहरण के लिए, <code>"en-US"</code> <code>"MMM"</code> में <code>"Jan", "Feb", "Mar", ...</code> है, जबकि <code>"ru-RU"</code> <code>"MMM"</code> में यह <code>"янв", "фев", "мар", ...</code> है. जब <code>फ़ॉर्मेट</code> <code>नल</code> होता है, तो <code>कल्चर</code> उपयोग के लिए डिफ़ॉल्ट फ़ॉर्मेट को नियंत्रित करता है. जब <code>कल्चर</code> <code>नल</code> होता है या हटा दिया जाता है, तो <code>Culture.Current</code> का उपयोग किया जाता है.</li></ul>लीगेसी कार्यप्रवाह का समर्थन करने के लिए, <code>options</code> और <code>culture</code> पाठ मान भी हो सकते हैं. इसका <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code> जैसा समान व्यवहार हो सकता है.


## Examples

### Example #1 
&lt;code&gt;#date(2010, 12, 31)&lt;/code&gt; को &lt;code&gt;पाठ&lt;/code&gt; मान में रूपांतरित करें. &lt;i&gt;परिणाम आउटपुट वर्तमान कल्चर के आधार पर भिन्न हो सकता है.&lt;/i&gt;
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2 
कस्टम फ़ॉन्ट और जर्मन कल्चर का उपयोग करके रूपांतरित करें.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3 
हिजरी कैलेंडर में वह वर्ष ढूँढें जो ग्रेगोरियन कैलेंडर में 1 जनवरी, 2000 से संगत है.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
