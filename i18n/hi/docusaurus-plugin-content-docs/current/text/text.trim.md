---
title: Text.Trim
---

# Text.Trim


निर्दिष्ट किए गए सभी अगले और पीछे आने वाले वर्णों को निकालता है.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

निर्दिष्ट `text` से सभी अगले और पीछे आने वाले वर्णों को निकालने का परिणाम लौटाता है. डिफ़ॉल्ट रूप से, आगे और पीछे आने वाले सभी श्वेत रिक्ति वर्ण निकाल दिए जाते हैं.

-   `text`: वह पाठ जिससे आगे और पीछे आने वाले वर्ण निकाले जाने हैं.
-   `trim`: डिफ़ॉल्ट रूप से ट्रिम किए गए श्वेत रिक्ति वर्णों को ओवरराइड करता है. यह पैरामीटर या तो एकल वर्ण हो सकता है या एकल वर्णों की सूची हो सकता है. जब कोई गैर-ट्रिम किया गया वर्ण सामने आ जाता है तो प्रत्येक अग्रणी और पीछे आने वाली ट्रिम कार्रवाई रुक जाती है.


## Examples

### Example #1
" a b c d " से अगले और पिछले सफेद रिक्त स्थान निकालें.
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```


### Example #2
किसी संख्या के पाठ प्रस्तुतिकरण से अगले और पीछे आने वाले शून्य निकालें.
```powerquery
Text.Trim("0000056.4200", "0")
```

Result: 
```powerquery
"56.42"
```


### Example #3
किसी HTML टैग से अगले और पीछे आने वाले कोष्ठक निकालें.
```powerquery
Text.Trim("<div/>", {"<", ">", "/"})
```

Result: 
```powerquery
"div"
```


### Example #4
लंबित विक्रय स्थिति के आस-पास उपयोग किए गए विशेष वर्णों को निकालें.
```powerquery
let
    Source = #table(type table [Home Sale = text, Sales Date = date, Sales Status = text],
    {
        {"1620 Ferris Way", #date(2024, 8, 22), "##@@Pending@@##"},
        {"757 1st Ave. S.", #date(2024, 3, 15), "Sold"},
        {"22303 Fillmore", #date(2024, 10, 2), "##@@Pending@@##"}
    }),
    #"Trimmed Status" = Table.TransformColumns(Source, {"Sales Status", each Text.Trim(_, {"#", "@"})})
in
    #"Trimmed Status"
```

Result: 
```powerquery
#table(type table [Home Sale = text, Sales Date = date, Sales Status = text],
{
    {"1620 Ferris Way", #date(2024, 8, 22), "Pending"},
    {"757 1st Ave. S.", #date(2024, 3, 15), "Sold"},
    {"22303 Fillmore", #date(2024, 10, 2), "Pending"}
})
```




## Category
Text.Transformations
