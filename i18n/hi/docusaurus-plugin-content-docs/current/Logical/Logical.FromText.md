---
title: Logical.FromText
---

# Logical.FromText


## Description

पाठ मानों &#34;true&#34; और &#34;false&#34; से एक तार्किक मान बनाता है.


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Details

पाठ मान <code>text</code>, से एक तार्किक मान "true" या "false" बनाता है. अगर <code>text</code> में एक भिन्न स्ट्रिंग है, तो एक अपवाद दिखाया जाता है. पाठ मान <code>text</code>, केस संवेदी है.


## Examples

### Example #1 
पाठ स्ट्रिंग &#34;true&#34; से एक तार्किक मान बनाएँ.
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2 
पाठ स्ट्रिंग &#34;a&#34; से एक तार्किक मान बनाएँ.
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
