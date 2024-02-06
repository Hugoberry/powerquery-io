---
title: DateTime.FromText
---

# DateTime.FromText


स्थानीय और वैश्विक datetime स्वरूपों से एक datetimezone बनाता है.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Remarks

पाठ प्रस्तुतिकरण, <code>text</code> से <code>datetime</code> मान बनाता है. वैकल्पिक <code>रिकॉर्ड</code> पैरामीटर, <code>options</code> अतिरिक्त गुणों को निर्दिष्ट करने के लिए प्रदान किया जा सकता है. <code>रिकॉर्ड</code> में निम्न फ़ील्ड हो सकती हैं:<ul>   <li><code>फ़ॉर्मेट</code>: उपयोग करने के लिए फ़ॉर्मेट को इंगित करने वाला <code>text</code> मान. https://go.microsoft.com/fwlink/?linkid=2180104 और https://go.microsoft.com/fwlink/?linkid=2180105 पर जाएँ. इस फ़ील्ड को छोड़ देने से या <code>नल</code> प्रदान करने के परिणामस्वरूप सर्वश्रेष्ठ प्रयास का उपयोग करके दिनांक पार्स होगी.</li>   <li><code>कल्चर</code>: जब <code>फ़ॉर्मेट</code> नल नहीं होता है, तब <code>कल्चर</code> कुछ फ़ॉर्मेट निर्दिष्टकर्ताओं को नियंत्रित करता है. उदाहरण के लिए, <code>"en-US"</code> <code>"MMM"</code> में यह <code>"Jan", "Feb", "Mar", ...</code> होता है, जबकि <code>"ru-RU"</code> <code>"MMM"</code> <code>"янв", "фев", "мар", ...</code> होता है. जब <code>फ़ॉर्मेट</code> <code>नल</code> होता है, तब <code>कल्चर</code> उपयोग करने के लिए डिफ़ॉल्ट फ़ॉर्मेट को नियंत्रित करता है. जब <code>Culture</code> <code>नल</code> होता है या छोड़ दिया जाता है, तब <code>Culture.Current</code> का उपयोग किया जाता है.</li></ul>लीगेसी कार्यप्रवाह का समर्थन करने के लिए, <code>options</code> पाठ मान भी हो सकता है. इसमें <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code> जैसा समान व्यवहार होता है.


## Examples

### Example #1 
&lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; को तिथिसमय मान में रूपांतरित करें.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2 
&lt;code&gt;&#34;2010-12-31T01:30:00.121212&#34;&lt;/code&gt; को तिथिसमय मान में रूपांतरित करें.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3 
&lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; को तिथिसमय मान में रूपांतरित करें.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4 
&lt;code&gt;&#34;20101231T013000&#34;&lt;/code&gt; को तिथिसमय मान में रूपांतरित करें.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
