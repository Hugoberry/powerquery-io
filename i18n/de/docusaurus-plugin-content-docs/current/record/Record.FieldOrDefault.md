---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


Gibt den Wert des angegebenen Felds in einem Datensatz zurück. Wird das Feld nicht gefunden, wird der Standardwert zurückgegeben.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Remarks

Gibt den Wert des angegebenen Felds (<code>field</code>) im Datensatz "<code>record</code>" zurück. Wird das Feld nicht gefunden, wird der optionale Wert "<code>defaultValue</code>" zurückgegeben.


## Examples

### Example #1 
Ermittelt den Wert des Felds &#34;Phone&#34; im Datensatz oder gibt NULL zurück, wenn das Feld nicht vorhanden ist.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2 
Ermittelt den Wert des Felds &#34;Phone&#34; im Datensatz oder gibt den Standardwert zurück, wenn das Feld nicht vorhanden ist.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
