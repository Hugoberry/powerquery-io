---
title: List.Percentile
---

# List.Percentile


दी गई संभावनाओं से संबंधित एक या अधिक नमूना शतमक लौटाता है.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Remarks

सूची `list` का एक या अधिक नमूना शतमक लौटाता है. अगर मान `percentiles` 0.0 और 1.0 के बीच की कोई संख्या है, तो उसे शतमक के रूप में माना जाएगा और परिणाम उस संभाव्यता से संबंधित एकल मान होगा. अगर मान `percentiles` 0.0 और 1.0 के बीच के मानों वाली संख्याओं की कोई सूची है, तो परिणाम इनपुट संभाव्यता के संगत शतमकों की एक सूची होगी.  
  
`options` में PercentileMode विकल्प का उपयोग उन्नत उपयोगकर्ताओं द्वारा अधिक विशिष्ट इंटरपोलेशन विधि चुनने के लिए किया जाएगा लेकिन अधिकांश उपयोगकर्ताओं के लिए इसकी अनुशंसा नहीं की जाती. पूर्वनिर्धारित प्रतीक `PercentileMode.ExcelInc` और `PercentileMode.ExcelExc` द्वारा उपयोग की जाने वाली आंतरगणन विधियों से मेल खाते हैं `PERCENTILE.INC` और `PERCENTILE.EXC`. डिफ़ॉल्ट व्यवहार `PercentileMode.ExcelInc` से मेल खाता है. `PercentileMode.SqlCont` और `PercentileMode.SqlDisc` प्रतीक क्रमशः `PERCENTILE_CONT` और `PERCENTILE_DISC`के लिए SQL Server व्यवहार से मेल खाते हैं.


## Examples

### Example #1
सूची `{5, 3, 1, 7, 9}` का पहला क्वार्टाइल ढूँढें.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2
Excel के `PERCENTILE.EXC` से मेल खाने वाली आंतरगणन विधि का उपयोग करके `{5, 3, 1, 7, 9}` सूची के क्वार्टाइल्स ढूँढें.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
