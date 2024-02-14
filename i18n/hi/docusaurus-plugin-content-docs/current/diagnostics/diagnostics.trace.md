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

यदि ट्रेसिंग सक्षम है, तो एक ट्रेस <code>message</code> लिखता है, और <code>value</code> वापस करता है. एक वैकल्पिक पैरामीटर <code>delayed</code> निर्दिष्ट करता है कि संदेश को ट्रेस किए जाने तक <code>value</code> के मूल्यांकन को विलंबित करना है या नहीं. <code>traceLevel</code> निम्नलिखित में से किसी एक मान को ले सकता है:    <code>TraceLevel.Critical</code>    <code>TraceLevel.Error</code>,    <code>TraceLevel.Warning</code>,    <code>TraceLevel.Information</code>,    <code>TraceLevel.Verbose</code>.  


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
