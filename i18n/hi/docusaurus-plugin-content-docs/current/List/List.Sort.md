---
title: List.Sort
---

# List.Sort


## Description

निर्दिष्ट किए गए मापदंड के अनुसार डेटा की सूची को सॉर्ट करता है.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Details

निर्दिष्ट वैकल्पिक मापदंड के आधार पर डेटा की सूची <code>list</code> को सॉर्ट करता है. वैकल्पिक पैरामीटर <code>comparisonCriteria</code> को तुलना मापदंड के रूप में निर्दिष्ट किया जा सकता है. इसमें निम्नलिखित मान हो सकते हैं:    <ul>    <li> ऑर्डर नियंत्रित करने के लिए तुलना मानदंड ऑर्डर एनम मान हो सकता है.. (<code>Order.Descending</code>, <code>Order.Ascending</code>). </li>    <li> सॉर्टिंग के लिए उपयोग की जाने वाली कुंजी का कंप्यूट का उपयोग करने के लिए, 1 तर्क के फ़ंक्शन का उपयोग किया जा सकता है. </li>    <li> कुंजी और नियंत्रण ऑर्डर दोनों का चयन करने के लिए तुलना मानदंड कुंजी और ऑर्डर वाली सूची हो सकती है (<code>\{each 1 / _, Order.Descending}</code>). </li>    <li> तुलना को पूरी तरह से नियंत्रित करने के लिए 2 तर्क के फ़ंक्शन का उपयोग किया जा सकता है. यह फ़ंक्शन सूची में से दो आइटम पास करेगा (कोई भी दो आइटम, किसी भी क्रम में). फ़ंक्शन को निम्नलिखित में से एक मान वापस करना होगा:        <ul>            <li> <code>-1</code>: पहला आइटम दूसरे आइटम से कम है.</li>            <li> <code>0</code>: आइटम बराबर हैं.</li>            <li> <code>1</code>: पहला आइटम दूसरे आइटम से बड़ा है.</li>        </ul>        मान.तुलना विधि है जिसका इस लॉजिक का प्रतिनिधित्व करने के लिए उपयोग किया जा सकता है. </li>    </ul>.


## Examples

### Example #1 
सूची \{2, 3, 1} सॉर्ट करें.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
सूची को \{2, 3, 1} अवरोही क्रम में सॉर्ट करें.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3 
Value.Compare विधि का उपयोग करके सूची \{2, 3, 1} को आरोही क्रम में सॉर्ट करें.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering