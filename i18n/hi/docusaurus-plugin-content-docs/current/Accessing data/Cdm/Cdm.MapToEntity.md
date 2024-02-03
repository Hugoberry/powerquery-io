---
title: Cdm.MapToEntity
---

# Cdm.MapToEntity


## Description

सामान्य डेटा मॉडल में किसी निकाय की विशेषताओं के लिए डेटा प्रकारों के साथ-साथ मैप किए गए स्तंभों वाली तालिका को लौटाता है.


## Syntax

```powerquery
Cdm.MapToEntity(
    table as table,
    columnDefinitions as any,
    optional defaultType as type,
    optional defaultCdmClass as text
) as table
```


## Details

सामान्य डेटा मॉडल में किसी निकाय की विशेषताओं के लिए डेटा प्रकारों के साथ-साथ मैप किए गए स्तंभों वाली तालिका को लौटाता है. अगर मैप नहीं किया गया है, तो निकाय परिभाषा से स्तंभों को जोड़ दिया जाएगा और ऐसे सभी स्तंभों को निकाल दिया जाएगा जिन्हें मैप नहीं किया गया हो.


