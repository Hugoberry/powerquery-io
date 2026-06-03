---
title: MicrosoftAzureDataManagerForEnergy.Search
---

# MicrosoftAzureDataManagerForEnergy.Search



## Syntax

```powerquery
MicrosoftAzureDataManagerForEnergy.Search(
    serviceName as text,
    dataPartition as text,
    kind as text,
    query as text,
    optional limit as number,
    optional returnedFields as text
) as table
```


## Remarks

एनर्जी इंस्टेंस के लिए Microsoft Azure Data Manager में रिकॉर्ड के लिए क्वेरीज़


## Examples

### Example #1
एक ऐसा रिकॉर्ड लौटाता है जिसमें क्वेरी को संतुष्ट करने वाले रिकॉर्ड्स की संख्या और रिकॉर्ड्स की एक तालिका होती है जिसे वैकल्पिक रूप से सीमा पैरामीटर द्वारा सीमित किया गया है
```powerquery
MicrosoftAzureDataManagerForEnergy.Search("fb82bc98-a537-4c2b-a4ed-cf7c53eed5f9", "4b12b551-b235-46b3-9f79-6a61adc75b6a", "platform4321", "opendes", "osdu:wks:master-data--Well:1.0.0", "*", 2, null)
```

Result: 
```powerquery
एक नेविगेशन तालिका जिसमें [गणना = 4947, रिकॉर्ड = #table({""Records""}, {{[...]}, {[...]}})] शामिल है
```



