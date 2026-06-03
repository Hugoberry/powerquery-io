---
title: Time.From
---

# Time.From


दिए गए मान से एक समय बनाता है.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

दिए गए `value` से एक `समय` मान लौटाता है. एक वैकल्पिक `culture` भी प्रदान किया जा सकता है (उदाहरण के लिए, "en-US"). यदि दिया गया `value` `नल` है, तो `Time.From` `नल` लौटाता है. यदि दिया गया `value` `समय` है, तो `value` लौटाया जाता है. निम्न प्रकार के मानों को एक `समय` मान में रूपांतरित किया जा सकता है:

-   `पाठ`: पाठ प्रस्तुतिकरण से एक `समय` मान. विवरण के लिए `Time.FromText` देखें.
-   `तिथिसमय`: `value` का समय घटक.
-   `datetimezone`: `value` के समतुल्य स्थानीय तिथिसमय का समय घटक.
-   `संख्या`: `value` द्वारा व्यक्त आंशिक दिनों की संख्या के समतुल्य `समय`. अगर `value` ऋणात्मक या 1 से बड़ा या उसके बराबर है, तो एक त्रुटि लौटाई जाती है.

अगर `value` किसी भी अन्य प्रकार का है, तो एक त्रुटि लौटाई जाती है.


## Examples

### Example #1
`0.7575` को एक `time` मान में रूपांतरित करें.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2
`#datetime(1899, 12, 30, 06, 45, 12)` को एक `time` मान में रूपांतरित करें.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
