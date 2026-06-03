---
title: Diagnostics.Trace
---

# Diagnostics.Trace


यदि ट्रेसिंग सक्षम है, तो एक ट्रेस प्रविष्टि लिखता है, और मान को वापस करता है.


## Syntax

```powerquery
Diagnostics.Trace(
    traceLevel as number,
    message as any,
    value as any,
    optional delayed as logical
) as any
```


## Remarks

अगर ट्रेसिंग सक्षम है, तो ट्रेस `message`लिखता है और `value` लौटाता है. एक वैकल्पिक पैरामीटर `delayed` निर्दिष्ट करता है कि संदेश का पता लगाने तक `value` के मूल्यांकन में विलंब करना है या नहीं. `traceLevel` निम्न में से कोई एक मान ले सकते हैं:

-   `TraceLevel.Critical`
-   `TraceLevel.Error`
-   `TraceLevel.Warning`
-   `TraceLevel.Information`
-   `TraceLevel.Verbose`


## Examples

### Example #1
Text.From को लागू करने से पहले संदेश को ट्रेस करता है और परिणाम वापस करता है.
```powerquery
Diagnostics.Trace(TraceLevel.Information, "TextValueFromNumber", () => Text.From(123), true)
```

Result: 
```powerquery
"123"
```




## Category
Diagnostics
