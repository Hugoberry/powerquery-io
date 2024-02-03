---
title: Access.Database
---

# Access.Database


## Description

पहुँच डेटाबेस की संरचनात्मक प्रस्तुति लौटाता है.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Details

Access डेटाबेस, <code>database</code> की संरचनात्मक प्रस्तुति लौटाता है. एक वैकल्पिक रिकॉर्ड पैरामीटर, <code>options</code> को निम्नलिखित विकल्पों को नियंत्रण करने के लिए निर्दिष्ट किया जा सकता है:    <ul><li><code>CreateNavigationProperties</code> : तार्किक (सही/गलत) जो यह निर्धारित करता है कि नेविगेशन गुणों को लौटाए गए मानों पर जनरेट करना है या नहीं (डिफ़ॉल्ट गलत है).</li><li><code>NavigationPropertyNameGenerator</code> : एक फ़ंक्शन जिसका उपयोग नेविगेशन गुणों के लिए नामों के निर्माण हेतु उपयोग किया जाता है.</li></ul>    उदाहरण के लिए रिकॉर्ड पैरामीटर को [option1 = value1, option2 = value2...] के रूप में निर्दिष्ट किया जाता है.



## Category
Accessing data
