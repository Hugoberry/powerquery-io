---
title: Number.Mod
---

# Number.Mod


पूर्णांक, दो संख्याओं को विभाजित करता है और शेषफल लौटाता है.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

`number` का `divisor` के द्वारा पूर्णांक विभाजन करने पर प्राप्त शेषफल को लौटाता है. यदि `number` या `divisor` `null` हों, तो यह फ़ंक्‍शन `null` लौटता है.

-   `number`: भाज्‍य/लाभांश.
-   `divisor`: भाजक.
-   `precision`: (वैकल्पिक) पूर्णांक विभाजन की परिशुद्धता. यह पैरामीटर या तो `Double` परिशुद्धता के लिए `Precision.Double` हो सकता है या `Decimal` परिशुद्धता के लिए `Precision.Decimal`. डिफ़ॉल्ट मान `Precision.Double` है.


## Examples

### Example #1
जब आप 5 को 3 से विभाजित करते हैं, तो शेषफल प्राप्त करें.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```


### Example #2
`Double` परिशुद्धता और `Decimal` परिशुद्धता, इन दोनों का उपयोग करके जब आप 10.5 को 0.2 से विभजित करें, तो शेषफल का पता लगाएँ.
```powerquery
let
    Dividend = 10.5,
    Divisor = 0.2,

    #"Use Double Precision" = Number.Mod(Dividend, Divisor, Precision.Double),
    #"Use Decimal Precision" = Number.Mod(Dividend, Divisor, Precision.Decimal),

    // Convert to text to inspect precision
    #"Double To Text" = Number.ToText(#"Use Double Precision", "G"),
    #"Decimal To Text" = Number.ToText(#"Use Decimal Precision", "G"),

    #"Display Result" = [
        DoublePrecision = #"Double To Text",
        DecimalPrecision = #"Decimal To Text"
    ]
in
    #"Display Result"
```

Result: 
```powerquery
[
    DoublePrecision = "0.0999999999999994",
    DecimalPrecision = "0.1"
]
```




## Category
Number.Operations
