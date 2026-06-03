---
title: Type.Is
---

# Type.Is


निर्धारित करता है कि क्या प्रथम प्रकार का कोई मान हमेशा द्वितीय प्रकार के साथ संगत होता है.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Remarks

निर्धारित करता है कि क्या `type1` का मान हमेशा `type2` के साथ संगत है. पैरामीटर `type2` एक प्राथमिक (या नल होने योग्य प्राथमिक) प्रकार मान होना चाहिए. अन्यथा, इस फ़ंक्शन का व्यवहार अपरिभाषित है और इस पर निर्भर नहीं रहना चाहिए.


## Examples

### Example #1
निर्धारित करें कि क्या प्रकार नंबर के किसी मान को हमेशा कोई भी प्रकार के रूप में भी माना जा सकता है.
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2
निर्धारित करें कि क्या प्रकार के किसी मान को हमेशा प्रकार नंबर के रूप में भी माना जा सकता है.
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
