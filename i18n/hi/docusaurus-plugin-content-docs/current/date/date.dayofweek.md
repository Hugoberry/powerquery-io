---
title: Date.DayOfWeek
---

# Date.DayOfWeek


कोई ऐसी संख्या (0 से 6 के बीच) लौटाता है, जो प्रदत्त मान के लिए सप्ताह के दिन को इंगित करती है.


## Syntax

```powerquery
Date.DayOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as Day.Type
```


## Remarks

कोई ऐसी संख्या (0 से 6 के बीच) लौटाता है, जो प्रदत्त <code>dateTime</code> के लिए सप्ताह के दिन को इंगित करती है.  <ul>        <li><code>dateTime</code>: कोई <code>दिनांक</code>, <code>तिथिसमय</code> या <code>datetimezone</code> मान.</li>        <li><code>firstDayOfWeek</code>: <code>दिन</code> का कोई मान, जो इंगित करता हो कि किस दिन को सप्ताह का पहला दिन माना जाए. अनुमत मान हैं दिन.रविवार, दिन.सोमवार, दिन.मंगलवार, दिन.बुधवार, दिन.गुरुवार, दिन.शुक्रवार या दिन.शनिवार. निर्दिष्ट न होने पर, संस्कृति-आधारित डिफ़ॉल्ट का उपयोग किया जाता है.</li>      </ul>


## Examples

### Example #1 
रविवार को सप्ताह का पहला दिन मानते हुए सोमवार, 21 फरवरी 2011 द्वारा दर्शाया गया साप्ताहिक दिन प्राप्त करें.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Sunday)
```

Result: 
```powerquery
1
```


### Example #2 
सोमवार को सप्ताह का पहला दिन मानते हुए सोमवार, 21 फरवरी 2011 द्वारा दर्शाया गया साप्ताहिक दिन प्राप्त करें.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Monday)
```

Result: 
```powerquery
0
```




## Category
Date
