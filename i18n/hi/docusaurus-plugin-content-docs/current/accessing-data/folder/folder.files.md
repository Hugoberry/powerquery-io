---
title: Folder.Files
---

# Folder.Files


ऐसी तालिका लौटाता है जिसमें निर्दिष्ट फ़ोल्डर और उप-फ़ोल्डर में प्राप्त फ़ाइलों के गुण और उनकी सामग्रियाँ होती हैं.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Remarks

निर्दिष्ट फ़ोल्डर और उसके सभी सबफ़ोल्डर्स में पाई गई प्रत्येक फ़ाइल के लिए एक पंक्ति वाली तालिका लौटाता है.

-   `path`: उस फ़ोल्डर का पथ जहाँ से आप फ़ाइलें पुनर्प्राप्त करना चाहते हैं. दिया गया फ़ोल्डर पथ एक मान्य निरपेक्ष पथ होना चाहिए.
-   `options`: (वैकल्पिक) यह पैरामीटर वर्तमान में केवल आंतरिक उपयोग के लिए है.

लौटाई गई तालिका की प्रत्येक पंक्ति में फ़ाइल के गुण और उसकी सामग्री का लिंक शामिल होता है.


## Examples

### Example #1
ऐसी तालिका लौटाएँ जिसमें C:\\test-examples\\example-folder और इसके सभी सबफ़ोल्डर्स में पाई गईं सभी फ़ाइलें शामिल हों.
```powerquery
Folder.Files("C:\test-examples\example-folder")
```

Result: 
```powerquery
A table containing the files, their properties, and a link to their content.
```




## Category
Accessing data
