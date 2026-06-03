---
title: DateTime.From
---

# DateTime.From


दिए गए मान से एक datetime बनाता है.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

दिए गए `value` से एक `तिथिसमय` मान वापस करता है. वैकल्पिक `culture` भी प्रदान किया जा सकता है (उदाहरण के लिए, "en-US"). यदि दिया गया `value` `नल` है, तो `DateTime.From` `नल` वापस किया जाता है. यदि दिया गया `value` `तिथिसमय` है, तो `value` वापस किया जाता है. निम्न प्रकार के मानों को एक `तिथिसमय` मान में रूपांतरित किया जा सकता है:

-   `पाठ`: पाठ प्रस्तुतिकरण से एक `तिथिसमय` मान. विवरण के लिए `DateTime.FromText` देखें.
-   `तिथि`: तिथि घटक के रूप में `value` और समय घटक के रूप में `12:00:00 AM` वाला `तिथिसमय`.
-   `datetimezone`: `value` के समतुल्य स्थानीय `तिथिसमय`.
-   `समय`: तिथि घटक के रूप में `0` और समय घटक के रूप में `value` के OLE स्वचालन तिथि के समतुल्य तिथि वाला `तिथिसमय`.
-   `संख्या`: `value` द्वारा व्यक्त OLE स्वचालन तिथि के समतुल्य तिथि वाला `तिथिसमय`.

यदि `value` किसी भी अन्य प्रकार का है, तो एक त्रुटि वापस की जाती है.


## Examples

### Example #1
`#time(06, 45, 12)` को एक `datetime` मान में रूपांतरित करें.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2
`#date(1975, 4, 4)` को एक `datetime` मान में रूपांतरित करें.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
