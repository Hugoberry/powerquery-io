---
title: Value.FromText
---

# Value.FromText


पाठ प्रस्तुतिकरण से पुरज़ोर मान बनाता है.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Remarks

पाठ प्रस्तुति से मान को डिकोड करता है और उचित प्रकार के साथ एक मान के रूप में इसकी व्याख्या करता है.

r-   `text`: व्याख्या करने के लिए टेक्स्ट.
-   `culture`: (वैकल्पिक) टेक्स्ट की व्याख्या करने के लिए उपयोग किया गया विशिष्ट कल्चर (उदाहरण के लिए, "en-US").

यह फ़ंक्शन एक टेक्स्ट मान लेता है और `number`, `logical`, `null`, `datetime`, `duration`, or `text` प्रकार का मान लौटाता है. किसी रिक्त टेक्स्ट मान की व्याख्या `null` मान के रूप में की जाती है.


## Examples

### Example #1
किसी संख्या को दर्शाने वाले टेक्स्ट को उसके संगत संख्या मान में कन्वर्ट करें.
```powerquery
Value.FromText("12345.6789")
```

Result: 
```powerquery
12345.6789
```


### Example #2
किसी प्रतिशत को दर्शाने वाले टेक्स्ट को उसके संगत संख्या मान में कन्वर्ट करें.
```powerquery
Value.FromText("25.4%")
```

Result: 
```powerquery
0.254
```


### Example #3
फ्रेंच यूरो मान को दर्शाने वाले टेक्स्ट को उसके संगत संख्या मान में कन्वर्ट करें.
```powerquery
Value.FromText("€1,190", "fr-FR")
```

Result: 
```powerquery
1.19
```


### Example #4
जर्मन की दिनांक और समय को दर्शाने वाले टेक्स्ट को उसके संगत दिनांक और समय मान में कन्वर्ट करें.
```powerquery
Value.FromText("24 Dez 2024 14:33:20", "de-DE")
```

Result: 
```powerquery
#datetime(2024, 12, 24, 14, 33, 20)
```




## Category
Text.Conversions from and to text
