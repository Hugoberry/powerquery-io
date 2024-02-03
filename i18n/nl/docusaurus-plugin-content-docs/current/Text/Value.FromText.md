---
title: Value.FromText
---

# Value.FromText


## Description

Maakt een sterk getypeerde waarde van een tekstweergave.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Details

Hiermee wordt een waarde gedecoreerd van een tekstweergave, <code>text</code>, en wordt deze geïnterpreteerd als een waarde met een juist type. <code>Value.FromText</code> neemt een tekstwaarde en retourneert een getal, logische waarde, null-waarde, datetime-waarde, duration-waarde of text-waarde. De lege tekstwaarde wordt opgevat als een null-waarde. Er kan ook een optionele <code>culture</code> worden opgegeven (bijvoorbeeld: nl-NL).



## Category
Text.Conversions from and to text
