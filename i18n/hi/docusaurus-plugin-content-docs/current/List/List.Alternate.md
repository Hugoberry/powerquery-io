---
title: List.Alternate
---

# List.Alternate


## Description

एक सूची में सभी विषम संख्या वाले ऑफ़सेट तत्वों से समाविष्ट सूची लौटाता है.


## Syntax

```powerquery
List.Alternate(
    list as list,
    count as number,
    optional repeatInterval as number,
    optional offset as number
) as list
```


## Details

एक सूची में सभी विषम संख्या वाले ऑफ़सेट तत्वों से समाविष्ट सूची लौटाता है. पैरामीटर के आधार पर सूची <code>list</code> के मान लेने और छोड़ने के बीच विकल्प प्रदान करता है.    <ul>    <li><code>count</code>: हर बार छोड़े जाने वाले मानों की संख्या निर्दिष्ट करता है.</li>    <li><code>repeatInterval</code>: यह इंगित करने के लिए एक वैकल्पिक पुनरावर्ती अंतराल कि छोड़े गए मानों के बीच में कितने मान जोड़े जाएँ.</li>    <li><code>offset</code>: आरंभिक ऑफ़सेट में मान छोड़ना शुरू करने के लिए एक वैकल्पिक ऑफ़सेट पैरामीटर.</li>    </ul>


## Examples

### Example #1 
\{1..10} से एक सूची बनाएँ जिसमें पहली संख्या छूट जाती है.
```powerquery
List.Alternate({1..10}, 1)
```

Result: 
```powerquery
{2, 3, 4, 5, 6, 7, 8, 9, 10}
```


### Example #2 
\{1..10} से एक सूची बनाएँ जिसमें हर दूसरी संख्या छूट जाती है.
```powerquery
List.Alternate({1..10}, 1, 1)
```

Result: 
```powerquery
{2, 4, 6, 8, 10}
```


### Example #3 
\{1..10} से एक सूची बनाएँ जो 1 से प्रारंभ होती है और जिसमें हर दूसरी संख्या छूट जाती है.
```powerquery
List.Alternate({1..10}, 1, 1, 1)
```

Result: 
```powerquery
{1, 3, 5, 7, 9}
```


### Example #4 
\{1..10} से एक सूची बनाएँ जो 1 से प्रारंभ होती है, जिसमें एक मान छूट जाता है, दो मान रखे जाते हैं आदि.
```powerquery
List.Alternate({1..10}, 1, 2, 1)
```

Result: 
```powerquery
{1, 3, 4, 6, 7, 9, 10}
```




## Category
List.Selection
