---
title: DateTime.LocalNow
---

# DateTime.LocalNow


वर्तमान दिनांक और समय को स्थानीय समय क्षेत्र में लौटाता है.


## Syntax

```powerquery
DateTime.LocalNow(

) as datetime
```


## Remarks

सिस्टम पर वर्तमान तारीख और समय पर सेट किया गया `datetime` मान लौटाता है.  
  
इस फ़ंक्शन द्वारा लौटाया गया मान इस पर निर्भर करता है कि आप अपनी क्वेरी किसी स्थानीय मशीन पर रन कर रहे हैं या ऑनलाइन. उदाहरण के लिए, यदि आप अपनी क्वेरी को U.S. पैसिफ़िक समय क्षेत्र में स्थित किसी सिस्टम पर रन करते हैं, तो Power Query डेस्कटॉप आपकी स्थानीय मशीन पर सेट तारीख और समय लौटाता है. हालाँकि, यदि आप अपनी क्वेरी, क्लाउड पर रन करते हैं, तो Power Query Online UTC समय पर लौटाता है, क्योंकि यह क्लाउड, वर्चुअल मशीनों पर सेट समय को पढ़ रहा होता है, जो सभी UTC पर सेट होते हैं.


## Examples

### Example #1
इस फ़ंक्शन को डेस्कटॉप Power Query चला रही स्थानीय मशीन पर इनवोक करें.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current local date and time.
```


### Example #2
इस फ़ंक्शन को ऑनलाइन Power Query चला रहे क्लाउड पर इनवोक करें.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current online (UTC) date and time.
```




## Category
DateTime
