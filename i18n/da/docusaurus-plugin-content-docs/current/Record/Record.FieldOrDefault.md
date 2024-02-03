---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


## Description

Returnerer værdien for det angivne felt i en post eller standardværdien, hvis feltet ikke blev fundet.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Details

Returnerer værdien for det angivne felt <code>field</code> i posten <code>record</code>. Hvis feltet ikke blev fundet, returneres den valgfrie værdi <code>defaultValue</code>.


## Examples

### Example #1 
Find værdien for feltet &#34;Phone&#34; i posten, eller returner null, hvis den ikke findes.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2 
Find værdien for feltet &#34;Phone&#34; i posten, eller returner standardværdien, hvis den ikke findes.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
