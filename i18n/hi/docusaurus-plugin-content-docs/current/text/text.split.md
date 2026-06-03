---
title: Text.Split
---

# Text.Split


पाठ को निर्दिष्ट डीलिमिटर के आधार पर पाठ मानों की सूची में विभाजित करता है.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

निर्दिष्ट डिलिमिटर के आधार पर पाठ मान के विभाजित होने के परिणामस्वरूप प्राप्त होने वाले पाठ मानों की सूची लौटाता है.

-   `text`: विभाजित किया जाने वाला पाठ मान.
-   `separator`: पाठ को विभाजित करने के लिए उपयोग किया गया डिलिमिटर. डिलिमिटर या तो एकल वर्ण या वर्णों का अनुक्रम हो सकता है. यदि वर्णों के किसी अनुक्रम का उपयोग किया जाता है, तो पाठ केवल उन आवृत्तियों पर विभाजित होता है जहाँ सटीक अनुक्रम होता है.


## Examples

### Example #1
"|" डिलिमिटेड पाठ मान "Name|Address|PhoneNumber" से सूची बनाएँ.
```powerquery
Text.Split("Name|Address|PhoneNumber", "|")
```

Result: 
```powerquery
{
    "Name",
    "Address",
    "PhoneNumber"
}
```


### Example #2
वर्णों के क्रम का उपयोग करके पाठ मान से एक सूची बनाएँ.
```powerquery
Text.Split("Name, the Customer, the Purchase Date", ", the ")
```

Result: 
```powerquery
{
    "Name",
    "Customer",
    "Purchase Date"
}
```




## Category
Text.Transformations
