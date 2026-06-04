---
title: Text.Insert
---

# Text.Insert


Viena teksta vērtība tiek ievietota citas teksta vērtības noteiktā pozīcijā.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

Tiek atgriezts rezultāts, kas iegūts, ievietojot teksta vērtību `newText` teksta vērtībā `text` pozīcijā `offset`. Pozīcijas sākas ar skaitli 0.


## Examples

### Example #1
Ievietojiet C starp B un D šeit: ABD.
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
