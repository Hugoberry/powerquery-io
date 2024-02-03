---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


## Description

InfoArea द्वारा समूहीकृत SAP व्यवसाय वेयरहाउस सिस्टम में इन्फ़ोक्यूब और क्वेरी लौटायी जाती है.


## Syntax

```powerquery
SapBusinessWarehouse.Cubes(
    server as text,
    systemNumberOrSystemId as text,
    clientId as text,
    optional optionsOrLogonGroup as any,
    optional options as record
) as table
```


## Details

सिस्टम संख्या <code>systemNumberOrSystemId</code> और क्लाइंट आईडी <code>clientId</code> वाले सर्वर <code>server</code> पर SAP व्यवसाय वेयरहाउस इंस्टैंस से InfoArea द्वारा समूहीकृत InfoCubes और क्वेरी की तालिका लौटाता है. निम्न विकल्पों को नियंत्रित करने के लिए वैकल्पिक रिकॉर्ड पैरामीटर <code>optionsOrLogonGroup</code> को निर्दिष्ट किया जा सकता है:        



## Category
Accessing data
