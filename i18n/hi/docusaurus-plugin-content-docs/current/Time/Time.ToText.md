---
title: Time.ToText
---

# Time.ToText


## Description

समय मान का पाठ प्रस्तुतिकरण लौटाता है.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Details

<code>time</code> का पाठ प्रस्तुतिकरण वापस करता है. वैकल्पिक <code>रिकॉर्ड</code> पैरामीटर, <code>options</code>, अतिरिक्त गुणों को निर्दिष्ट करने के लिए प्रदान किया जा सकता है. <code>culture</code> का केवल लीगेसी कार्यप्रवाह के लिए उपयोग किया जाता है. <code>रिकॉर्ड</code> में निम्न फ़ील्ड हो सकती हैं:<ul>   <li><code>फ़ॉर्मेट</code>: <code>पाठ</code> मान जो उपयोग करने के लिए फ़ॉर्मेट इंगित करता है. https://go.microsoft.com/fwlink/?linkid=2180104 और https://go.microsoft.com/fwlink/?linkid=2180105 पर जाएँ. इस फ़ील्ड को हटाने से या <code>नल</code> प्रदान करने से <code>कल्चर</code> द्वारा परिभाषित मान का उपयोग करके दिनांक फ़ॉर्मेट होगी.</li>   <li><code>कल्चर</code>: जब <code>फ़ॉर्मेट</code> नल न हो, तो <code>कल्चर</code> कुछ फ़ॉर्मेट निर्दिष्टकर्ताओं को नियंत्रित करता है. उदाहरण के लिए, <code>"en-US"</code> <code>"tt"</code> <code>"AM" या "PM"</code> होता है, जबकि <code>"ar-EG"</code> <code>"tt"</code> <code>"ص" या "م"</code> होता है. जब <code>फ़ॉर्मेट</code> <code>नल</code> होता है, तो <code>कल्चर</code> उपयोग के लिए डिफ़ॉल्ट फ़ॉर्मेट को नियंत्रित करता है. जब <code>कल्चर</code> <code>नल</code> होता है या हटा दिया जाता है, तो <code>Culture.Current</code> का उपयोग किया जाता है.</li></ul>लीगेसी कार्यप्रवाह का समर्थन करने के लिए, <code>options</code> और <code>culture</code> पाठ मान भी हो सकते हैं. इसका <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code> जैसा समान व्यवहार हो सकता है.


## Examples

### Example #1 
&lt;code&gt;#time(01, 30, 25)&lt;/code&gt; को &lt;code&gt;पाठ&lt;/code&gt; मान में रूपांतरित करें. &lt;i&gt;परिणाम आउटपुट वर्तमान कल्चर के आधार पर भिन्न हो सकता है.&lt;/i&gt;
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2 
कस्टम फ़ॉन्ट और जर्मन कल्चर का उपयोग करके रूपांतरित करें.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3 
मानक समय फ़ॉर्मेट का उपयोग करके रूपांतरित करें.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
