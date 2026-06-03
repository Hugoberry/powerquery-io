---
title: Number.FromText
---

# Number.FromText


सामान्य पाठ स्वरूपों ("15", "3,423.10", "5.0E-10") से संख्याएँ बनाता है.


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

दिए गए पाठ मान, `text` से एक `संख्या` मान लौटाता है.

-   `text`: किसी संख्या मान का पाठ प्रस्तुतिकरण. प्रस्तुतिकरण एक सामान्य संख्या स्वरूप में होना चाहिए, जैसे "15", "3,423.10", या "5.0E-10".
-   `culture`: एक वैकल्पिक संस्कृति जो नियंत्रित करती है कि `text` की व्याख्या कैसे की जाए (उदाहरण के लिए, "en-US").


## Examples

### Example #1
`"4"` का संख्या मान प्राप्त करें.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2
`"5.0e-10"` का संख्या मान प्राप्त करें.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
