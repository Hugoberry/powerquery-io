---
title: Time.FromText
---

# Time.FromText


## Description

स्थानीय और वैश्विक, कस्टम समय फ़ॉर्मेट से समय बनाता है.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Details

पाठ प्रस्तुतिकरण, <code>text</code> से <code>time</code> मान बनाता है. वैकल्पिक <code>रिकॉर्ड</code> पैरामीटर, <code>options</code> अतिरिक्त गुणों को निर्दिष्ट करने के लिए प्रदान किया जा सकता है. <code>रिकॉर्ड</code> में निम्न फ़ील्ड हो सकती हैं:<ul>   <li><code>फ़ॉर्मेट</code>: उपयोग करने के लिए फ़ॉर्मेट को इंगित करने वाला <code>text</code> मान. https://go.microsoft.com/fwlink/?linkid=2180104 और https://go.microsoft.com/fwlink/?linkid=2180105 पर जाएँ. इस फ़ील्ड को छोड़ देने से या <code>नल</code> प्रदान करने के परिणामस्वरूप सर्वश्रेष्ठ प्रयास का उपयोग करके समय पार्स होगा.</li>   <li><code>कल्चर</code>: जब <code>फ़ॉर्मेट</code> नल नहीं होता है, तब <code>कल्चर</code> कुछ फ़ॉर्मेट निर्दिष्टकर्ताओं को नियंत्रित करता है. उदाहरण के लिए, <code>"en-US"</code> <code>"tt"</code> में यह <code>"AM" या "PM",</code> होता है, जबकि <code>"ar-EG"</code> <code>"tt"</code> <code>"ص" या "م"</code> होता है. जब <code>फ़ॉर्मेट</code> <code>नल</code> होता है, तब <code>कल्चर</code> उपयोग करने के लिए डिफ़ॉल्ट फ़ॉर्मेट को नियंत्रित करता है. जब <code>Culture</code> <code>नल</code> होता है या छोड़ दिया जाता है, तब <code>Culture.Current</code> का उपयोग किया जाता है.</li></ul>लीगेसी कार्यप्रवाह का समर्थन करने के लिए, <code>options</code> पाठ मान भी हो सकता है. इसमें <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code> जैसा समान व्यवहार होता है.


## Examples

### Example #1 
&lt;code&gt;&#34;10:12:31am&#34;&lt;/code&gt; को एक समय मान में रूपांतरित करें.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2 
&lt;code&gt;&#34;1012&#34;&lt;/code&gt; को समय मान में रूपांतरित करें.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3 
&lt;code&gt;&#34;10&#34;&lt;/code&gt; को समय मान में रूपांतरित करें.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
