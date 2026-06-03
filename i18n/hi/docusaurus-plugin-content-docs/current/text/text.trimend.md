---
title: Text.TrimEnd
---

# Text.TrimEnd


सभी निर्दिष्ट पीछे आने वाले वर्णों को निकालता है.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

निर्दिष्ट `text` से सभी पीछे आने वाले वर्णों को निकालने का परिणाम लौटाता है. डिफ़ॉल्ट रूप से, पीछे आने वाले सभी सफेद रिक्ति वर्ण निकाल दिए जाते हैं.

-   `text`: वह पाठ जिससे पीछे आने वाले वर्ण निकाले जाने हैं.
-   `trim`: डिफ़ॉल्ट रूप से ट्रिम किए गए श्वेत रिक्ति वर्णों को ओवरराइड करता है. यह पैरामीटर या तो एकल वर्ण हो सकता है या एकल वर्णों की सूची हो सकता है. जब कोई नॉन-ट्रिम किया गया वर्ण सामने आ जाता है तो प्रत्येक पीछे आने वाली ट्रिम कार्रवाई रुक जाती है.


## Examples

### Example #1
" a b c d " से पिछले सफेद रिक्त स्थान निकालें.
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```


### Example #2
पैड वाले फ़्लोटिंग पॉइंट संख्या के पाठ प्रस्तुतिकरण से पीछे की शून्य निकालें.
```powerquery
Text.TrimEnd("03.487700000", "0")
```

Result: 
```powerquery
"03.4877"
```


### Example #3
निश्चित-चौड़ाई वाले खाते के नाम से पीछे के पैडिंग वर्णों को निकालें.
```powerquery
let
    Source = #table(type table [Name = text, Account Name= text, Interest = number],
    {
        {"Bob", "US-847263****@", 2.8410},
        {"Leslie", "FR-4648****@**", 3.8392},
        {"Ringo", "DE-2046790@***", 12.6600}
    }),
    #"Trimmed Account" = Table.TransformColumns(Source, {{"Account Name", each Text.TrimEnd(_, {"*", "@"})}})
in
    #"Trimmed Account"
```

Result: 
```powerquery
#table(type table [Name = text, Account Name = text, Interest = number],
{
    {"Bob", "US-847263", 2.841},
    {"Leslie", "FR-4648", 3.8392},
    {"Ringo", "DE-2046790", 12.66}
})
```




## Category
Text.Transformations
