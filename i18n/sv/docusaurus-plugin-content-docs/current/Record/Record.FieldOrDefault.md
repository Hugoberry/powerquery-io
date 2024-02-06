---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


Returnerar värdet på det angivna fältet i en post eller standardvärdet om fältet inte hittas.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Remarks

Returnerar värdet för det angivna fältet <code>field</code> i posten <code>record</code>. Om fältet inte hittas returneras den valfria <code>defaultValue</code>.


## Examples

### Example #1 
Hitta värdet för fältet Phone i posten, eller returnera null om det inte finns.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2 
Hitta värdet för fältet Phone i posten, eller returnera standardvärdet om det inte finns.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
