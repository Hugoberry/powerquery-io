---
title: Text.ReplaceRange
---

# Text.ReplaceRange


## Description

Tiek noņemts rakstzīmju diapazons un tiek ievietota jauna vērtība norādītajā pozīcijā.


## Syntax

```powerquery
Text.ReplaceRange(
    text as text,
    offset as number,
    count as number,
    newText as text
) as text
```


## Details

Tiek atgriezts rezultāts, kas iegūts, noņemot rakstzīmju skaitu <code>count</code> no teksta vērtības <code>text</code>, sākot no pozīcijas <code>offset</code>, un pēc tam ievietojot teksta vērtību <code>newText</code> tajā pašā pozīcijā <code>text</code>.


## Examples

### Example #1 
Viena rakstzīme 2. pozīcija teksta vērtībā ABGF tiek aizstāta ar jaunu teksta vērtību CDE.
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
