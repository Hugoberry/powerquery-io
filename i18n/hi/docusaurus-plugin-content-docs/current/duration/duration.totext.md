---
title: Duration.ToText
---

# Duration.ToText


"d.h:m:s" स्वरूप का पाठ लौटाता है.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

दिए गए अवधि मान के लिए "day.hour:mins:sec" के रूप में टेक्स्ट प्रस्तुतिकरण लौटता है. `duration`.

-   `duration`: एक `अवधि` जिससे टेक्स्ट के प्रस्तुतिकरण की गणना की जाती है.
-   `format`: अप्रचलित *(वैकल्पिक)* नल न होने पर त्रुटि को बढ़ाएगा.


## Examples

### Example #1
`#duration(2, 5, 55, 20)` को एक पाठ मान में रूपांतरित करें.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
