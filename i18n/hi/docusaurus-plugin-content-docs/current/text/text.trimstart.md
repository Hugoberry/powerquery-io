---
title: Text.TrimStart
---

# Text.TrimStart


सभी निर्दिष्ट अग्रणी वर्णों को निकालता है.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Remarks

निर्दिष्ट `text` से सभी अग्रणी वर्णों को निकालने का परिणाम लौटाता है. डिफ़ॉल्ट रूप से, सभी लीडिंग व्हाइटस्पेस वर्ण निकाल दिए जाते हैं.

-   `text`: वह पाठ जिससे अग्रणी वर्ण निकाले जाने हैं.
-   `trim`: डिफ़ॉल्ट रूप से ट्रिम किए गए श्वेत रिक्ति वर्णों को ओवरराइड करता है. यह पैरामीटर या तो एकल वर्ण हो सकता है या एकल वर्णों की सूची हो सकता है. जब कोई नॉन-ट्रिम किया गया वर्ण सामने आ जाता है तो प्रत्येक अग्रणी ट्रिम कार्रवाई रुक जाती है.


## Examples

### Example #1
" a b c d " से अगले सफेद रिक्त स्थान निकालें.
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```


### Example #2
किसी संख्या के पाठ प्रस्तुतिकरण से अग्रणी शून्य निकालें.
```powerquery
Text.TrimStart("0000056.420", "0")
```

Result: 
```powerquery
"56.420"
```


### Example #3
किसी निश्चित-चौड़ाई वाले खाता नाम से अग्रणी पैडिंग वर्णों को निकालें.
```powerquery
let
    Source = #table(type table [Name = text, Account Name= text, Interest = number],
    {
        {"Bob", "@****847263-US", 2.8410},
        {"Leslie", "@******4648-FR", 3.8392},
        {"Ringo", "@***2046790-DE", 12.6600}
    }),
    #"Trimmed Account" = Table.TransformColumns(Source, {{"Account Name", each Text.TrimStart(_, {"*", "@"})}})
in
    #"Trimmed Account"
```

Result: 
```powerquery
#table(type table [Name = text, Account Name = text, Interest = number],
{
    {"Bob", "847263-US", 2.841},
    {"Leslie", "4648-FR", 3.8392},
    {"Ringo", "2046790-DE", 12.66}
})
```




## Category
Text.Transformations
