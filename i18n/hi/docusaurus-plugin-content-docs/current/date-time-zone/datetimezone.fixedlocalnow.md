---
title: DateTimeZone.FixedLocalNow
---

# DateTimeZone.FixedLocalNow


वर्तमान दिनांक और समय को स्थानीय समय क्षेत्र में लौटाता है. यह मान निश्चित होता है और अनुक्रमिक कॉल के साथ नहीं बदलेगा.


## Syntax

```powerquery
DateTimeZone.FixedLocalNow(

) as datetimezone
```


## Remarks

आपके सिस्टम के वर्तमान दिनांक और समय पर सेट <code>datetime</code> मान लौटाता है. लौटाए गए मान में स्थानीय समय क्षेत्र को दर्शाने वाली समय क्षेत्र जानकारी होती है. DateTimeZone.LocalNow के विपरीत, यह मान निश्चित होता है और अनुक्रमिक कॉल के साथ नहीं बदलेगा, जो कि किसी व्यंजक के निष्पादन के दौरान भिन्न मान लौटा सकता है.



## Category
DateTimeZone
