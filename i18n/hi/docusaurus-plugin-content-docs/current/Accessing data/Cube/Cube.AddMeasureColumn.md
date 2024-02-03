---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


## Description

स्तंभ को उस क्यूब में जोड़ता है जिसमें प्रत्येक पंक्ति के पंक्ति संदर्भ में लागू माप के परिणाम होते हैं.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Details

नाम <code>column</code> वाले स्तंभ को <code>cube</code> में जोड़ता है जिसमें प्रत्येक पंक्ति के पंक्ति संदर्भ में लागू माप <code>measureSelector</code> के परिणाम होते हैं. माप अनुप्रयोग, आयाम ग्रैन्युलैरिटी और स्लाइसिंग में परिवर्तन करने से प्रभावित होता है. माप मानों को क्यूब की कुछ कार्रवाइयों को निष्पादित करने के बाद समायोजित किया जाएगा.



## Category
Cube
