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

<code>list</code> सूची का एक या अधिक नमूना शतमक लौटाता है. अगर मान <code>percentiles</code> 0.0 और 1.0 के बीच की कोई संख्या है, तो उसे शतमक के रूप में माना जाएगा और परिणाम उस संभाव्यता     से संबंधित एकल मान होगा. अगर मान <code>percentiles</code> 0.0 और 1.0 के बीच के मानों वाली संख्याओं की कोई सूची है, तो परिणाम इनपुट संभाव्यता के संगत शतमकों    की एक सूची होगी. <code>options</code> में PercentileMode विकल्प का उपयोग उन्नत उपयोगकर्ताओं द्वारा अधिक विशिष्ट इंटरपोलेशन विधि चुनने के लिए किया जाएगा लेकिन अधिकांश उपयोगकर्ताओं के लिए इसकी अनुशंसा नहीं की जाती.    पूर्वनिर्धारित प्रतीक <code>PercentileMode.ExcelInc</code> और <code>PercentileMode.ExcelExc</code>Excel फ़ंक्शन     <code>PERCENTILE.INC</code> और <code>PERCENTILE.EXC</code> द्वारा उपयोग की जाने वाली आंतरगणन विधियों से मेल खाते हैं. डिफ़ॉल्ट व्यवहार <code>PercentileMode.ExcelInc</code> से मेल खाता है.     <code>PercentileMode.SqlCont</code> और <code>PercentileMode.SqlDisc</code> प्रतीक क्रमशः <code>PERCENTILE_CONT</code> और    <code>PERCENTILE_DISC</code>के लिए SQL Server व्यवहार से मेल खाते हैं.  


## Examples

### Example #1 
सूची &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt; का पहला क्वार्टाइल ढूँढें.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2 
Excel के &lt;code&gt;PERCENTILE.EXC&lt;/code&gt; से मेल खाने वाली आंतरगणन विधि का उपयोग करके &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt; सूची के क्वार्टाइल्स ढूँढें.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
