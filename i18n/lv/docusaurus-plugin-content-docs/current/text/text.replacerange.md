---
title: Text.ReplaceRange
---

# Text.ReplaceRange


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


## Remarks

Tiek atgriezts rezultāts, kas iegūts, noņemot rakstzīmju skaitu `count` no teksta vērtības `text`, sākot no pozīcijas `offset`, un pēc tam ievietojot teksta vērtību `newText` tajā pašā pozīcijā `text`.


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
