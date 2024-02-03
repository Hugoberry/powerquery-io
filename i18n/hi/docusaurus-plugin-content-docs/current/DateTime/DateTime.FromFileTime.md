---
title: DateTime.FromFileTime
---

# DateTime.FromFileTime


## Description

64 बिट लंबी संख्या से एक datetime बनाता है.


## Syntax

```powerquery
DateTime.FromFileTime(
    fileTime as number
) as datetime
```


## Details

<code>fileTime</code> से एक <code>datetime</code> मान बनाता है और उसे स्थानीय समय क्षेत्र में रूपांतरित करता है. फ़ाइल नाम एक Windows फ़ाइल समय मान है जो उन 100-गैर-सेकंड अंतरालों की संख्या दर्शाता है जो मध्यरात्रि 12:00 बजे, 1 जनवरी 1601 ई.प. तक बीत चुके हैं. (C.E.) समन्वित वैश्विक समय (UTC).


## Examples

### Example #1 
&lt;code&gt;129876402529842245&lt;/code&gt; को एक datetime मान में रूपांतरित करें.
```powerquery
DateTime.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetime(2012, 7, 24, 14, 50, 52.9842245)
```




## Category
DateTime
