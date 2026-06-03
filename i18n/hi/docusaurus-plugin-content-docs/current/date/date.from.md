---
title: Date.From
---

# Date.From


दिए गए मान से एक दिनांक बनाता है.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Remarks

दिए गए मान के हिसाब से दिनांक का मान लौटाता है.

-   `value`: वह मान जिसे दिनांक में बदलना है अगर दिया गया मान `null` है, तो यह फ़ंक्शन `null` लौटाता है. अगर दिया गया मान `date` है, तो `value` लौटाया जाता है. निम्न प्रकार के मानों को `date` मान में बदला जा सकता है:
    -   `text`: टेक्स्ट रूप से प्राप्त एक `date` मान. विवरण के लिए `Date.FromText` देखें.
    -   `datetime`: `value` का दिनांक वाला घटक.
    -   `datetimezone`: `value` के स्थानीय datetime के बराबर का दिनांक घटक.
    -   `number`: एक फ़्लोटिंग-पॉइंट संख्या के datetime समतुल्य का दिनांक घटक, जिसका पूर्णांक घटक 30 दिसंबर 1899 की आधी रात से पहले या बाद के दिनों की संख्या है, और जिसका भिन्नात्मक घटक उस दिन के समय को 24 से विभाजित करके दर्शाता है. उदाहरण के लिए, 31 दिसंबर 1899 की आधी रात को 1.0 से दर्शाया जाता है; 1 जनवरी 1900 की सुबह 6 बजे को 2.25 से दर्शाया जाता है; 29 दिसंबर 1899 की आधी रात को -1.0 से दर्शाया जाता है; और 29 दिसंबर 1899 की सुबह 6 बजे को -1.25 से दर्शाया जाता है. आधार मान 30 दिसंबर 1899 की आधी रात है. न्यूनतम मान 1 जनवरी 0100 की आधी रात है. अधिकतम मान 31 दिसंबर 9999 का अंतिम क्षण है.
    -   अगर `value` किसी अन्य प्रकार का है, तो एक त्रुटि लौटाई जाती है.
-   `culture`: दिए गए मान का कल्चर (उदाहरण के लिए, "en-US").


## Examples

### Example #1
निर्दिष्ट दिनांक और समय को दिनांक मान में बदलें.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```


### Example #2
निर्दिष्ट संख्या को दिनांक मान में बदलें.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #3
पोस्ट करने की दिनांकों के कॉलम में जर्मन पाठ दिनांकों को दिनांक मानों में रूपांतरित करें.
```powerquery
let
    Source = #table(type table [Account Code = text, Posted Date = text, Sales = number],
    {
        {"US-2004", "20 Januar 2023", 580},
        {"CA-8843", "18 Juli, 2023", 280},
        {"PA-1274", "12 Januar, 2022", 90},
        {"PA-4323", "14 April 2023", 187},
        {"US-1200", "14 Dezember, 2022", 350},
        {"PTY-507", "4 Juni, 2023", 110}
    }),
    #"Filtered rows" = Table.TransformColumns(
        Source,
        {"Posted Date", each Date.From(_, "de-DE"), type date}
    )
in
    #"Filtered rows"
```

Result: 
```powerquery
#table(type table [Account Code = text, Posted Date = date, Sales = number],
{
    {"US-2004", #date(2023, 1, 20), 580},
    {"CA-8843", #date(2023, 7, 18), 280},
    {"PA-1274", #date(2022, 1, 12), 90},
    {"PA-4323", #date(2023, 4, 14), 187},
    {"US-1200", #date(2022, 12, 14), 350},
    {"PTY-507", #date(2023, 6, 4), 110}
})
```




## Category
Date
