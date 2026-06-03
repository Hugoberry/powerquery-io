---
title: Text.Contains
---

# Text.Contains


यदि पाठ में सबस्ट्रिंग है तो लौटाता है.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

पता लगाता है कि `text` में मान `substring` है या नहीं. यदि मान मिलता है तो ‘true’ लौटाता है. यह फ़ंक्शन वाइल्डकार्ड या नियमित व्यंजकों का समर्थन नहीं करता.  
  
वैकल्पिक तर्क `comparer` का उपयोग केस-असंवेदी या कल्चर और लोकेल-अवेयर तुलनाओं को निर्दिष्ट करने के लिए किया जा सकता है. निम्नलिखित अंतर्निहित तुलनाकर्ता सूत्र की भाषा में उपलब्ध हैं:

-   `Comparer.Ordinal`: केस-संवेदी क्रमिक तुलना करने के लिए उपयोग किया जाता है
-   `Comparer.OrdinalIgnoreCase`: केस-असंवेदी क्रमिक तुलना करने के लिए उपयोग किया जाता है
-   `Comparer.FromCulture`: कल्चर-अवेयर तुलना करने के लिए उपयोग किया जाता है

अगर पहला तर्क नल है, तो यह फ़ंक्शन नल लौटाता है.  
  
सभी वर्णों के साथ शाब्दिक व्यवहार किया गया है. उदाहरण के लिए, "DR", " DR", "DR", और " DR " को एक दूसरे के बराबर नहीं माना जाता है.


## Examples

### Example #1
पते करें कि क्या पाठ "Hello World" में "Hello" शामिल है.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2
पते करें कि क्या पाठ "Hello World" में "hello" शामिल है.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3
केस-असंवेदी तुलनाकर्ता का उपयोग करके ढूँढना कि क्या पाठ "नमस्ते दुनिया" में "नमस्ते" शामिल है.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
तालिका में उन पंक्तियों को खोजें जिनमें खाता कोड में "A-" या "7" शामिल है.
```powerquery
let
    Source = #table(type table [Account Code = text, Posted Date = date, Sales = number],
    {
        {"US-2004", #date(2023,1,20), 580},
        {"CA-8843", #date(2023,7,18), 280},
        {"PA-1274", #date(2022,1,12), 90},
        {"PA-4323", #date(2023,4,14), 187},
        {"US-1200", #date(2022,12,14), 350},
        {"PTY-507", #date(2023,6,4), 110}
    }),
    #"Filtered rows" = Table.SelectRows(
        Source,
        each Text.Contains([Account Code], "A-") or
            Text.Contains([Account Code], "7"))
in
    #"Filtered rows"
    
```

Result: 
```powerquery
#table(type table [Account Code = text, Posted Date = date, Sales = number],
{
    {"CA-8843", #date(2023,7,18), 280},
    {"PA-1274", #date(2022,1,12), 90},
    {"PA-4323", #date(2023,4,14), 187},
    {"PTY-507", #date(2023,6,4), 110}
})
    
```




## Category
Text.Membership
