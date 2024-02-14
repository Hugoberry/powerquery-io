---
title: Table.ApproximateRowCount
---

# Table.ApproximateRowCount


तालिका में अनुमानित पंक्तियों की संख्या वापस करता है.


## Syntax

```powerquery
Table.ApproximateRowCount(
    table as table
) as number
```


## Remarks

<code>table</code> में लगभग पंक्तियों की संख्या को, या यदि डेटा स्रोत अनुमान का समर्थन नहीं करता ह, तो किसी त्रुटि को, लौटाता है.


## Examples

### Example #1 
किसी बड़ी तालिका में, जिसका उपयोग कालम्स के लिए कार्डिनालिटी अनुमान के रूप में किया जा सकता है, शहर और राज्य के विशिष्ट संयोजनों की संख्या का अनुमान लगाएँ. कार्डिनालिटी अनुमान पर्याप्त रूप से महत्वपूर्ण होते हैं क्योंकि विभिन्न डेटा स्रोत (जैसे कि SQL Server), अक्सर HyperLog नामक एल्गोरिथ्म का उपयोग करते हुए, इस विशेष अनुमान का समर्थन करते हैं.
```powerquery
Table.ApproximateRowCount(Table.Distinct(Table.SelectColumns(sqlTable, {"city", "state"})))
```

Result: 
```powerquery
number
```




## Category
Table.Information
