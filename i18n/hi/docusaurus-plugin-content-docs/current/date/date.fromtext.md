---
title: Date.FromText
---

# Date.FromText


स्थानीय, वैश्विक और कस्टम दिनांक फ़ॉर्मेट से दिनांक बनाता है.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Remarks

टेक्स्ट के प्रस्तुतिकरण से दिनांक का मान बनाता है.

-   `text`: दिनांक में कन्वर्ट करने के लिए टेक्स्ट मान.
-   `options`: एक वैकल्पिक `record`, जो अतिरिक्त प्रॉपर्टीज़ को निर्दिष्ट करने के लिए प्रदान किया जा सकता है. `record` में निम्न फ़ील्ड हो सकती हैं:
    -   `Format`: एक `text` मान, जो यह दर्शाता है कि किस फ़ॉर्मेट का उपयोग करना है. अधिक विवरण के लिए, https://go.microsoft.com/fwlink/?linkid=2180104 और https://go.microsoft.com/fwlink/?linkid=2180105 पर जाएँ. इस फ़ील्ड को छोड़ने या `null`देने से तारीख को सबसे अच्छे तरीके से पार्स किया जाता है.
    -   `Culture`: जब `Format` null नहीं होता है, तो `Culture` कुछ फ़ॉर्मेट स्पेसिफ़ायर को नियंत्रित करता है. उदाहरण के लिए, `"en-US"` में `"MMM"` का मतलब `"Jan", "Feb", "Mar", ...` होता है, जबकि `"ru-RU"` में `"MMM"` का मतलब `"янв", "фев", "мар", ...` होता है. जब `Format` `null` होता है, तो `Culture` उपयोग किए जाने वाले डिफ़ॉल्ट फ़ॉर्मेट को नियंत्रित करता है. जब `Culture` `null` हो या उसे छोड़ दिया जाए, तो `Culture.Current` का उपयोग किया जाता है.

लीगेसी वर्कफ़्लोज़ का समर्थन करने के लिए, `options` एक टेक्स्ट मान भी हो सकता है. इसका व्यवहार वैसा ही है जैसे कि `options = [Format = null, Culture = options]`.


## Examples

### Example #1
`"2010-12-31"` को `दिनांक` मान में रूपांतरित करें.
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


### Example #4
पोस्ट करने की दिनांकों के कॉलम में संक्षिप्त महीनों वाली इतालवी पाठ दिनांकों को दिनांक मानों में रूपांतरित करें.
```powerquery
let
    Source = #table(type table [Account Code = text, Posted Date = text, Sales = number],
    {
        {"US-2004", "20 gen. 2023", 580},
        {"CA-8843", "18 lug. 2024", 280},
        {"PA-1274", "12 gen. 2023", 90},
        {"PA-4323", "14 apr. 2023", 187},
        {"US-1200", "14 dic. 2023", 350},
        {"PTY-507", "4 giu. 2024", 110}
    }),
    #"Converted Date" = Table.TransformColumns(
        Source,
        {"Posted Date", each Date.FromText(_, [Culture = "it-IT"]), type date}
    )
in
    #"Converted Date"
```

Result: 
```powerquery
#table(type table [Account Code = text, Posted Date = date, Sales = number],
{
    {"US-2004", #date(2023, 1, 20), 580},
    {"CA-8843", #date(2024, 7, 18), 280},
    {"PA-1274", #date(2023, 1, 12), 90},
    {"PA-4323", #date(2023, 4, 14), 187},
    {"US-1200", #date(2023, 12, 14), 350},
    {"PTY-507", #date(2024, 6, 4), 110}
})
```




## Category
Date
