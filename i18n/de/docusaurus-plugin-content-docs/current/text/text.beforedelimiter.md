---
title: Text.BeforeDelimiter
---

# Text.BeforeDelimiter


Text.BeforeDelimiter


## Syntax

```powerquery
Text.BeforeDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Remarks

Gibt den Teil von "`text`" vor Angabe von "`delimiter`" zurück. Ein optionaler numerischer Wert `index` gibt an, welches Vorkommen von "`delimiter`" berücksichtigt werden soll. Ein optionaler Listenwert "`index`" gibt an, welches Vorkommen von "`delimiter`" berücksichtigt werden soll. Außerdem wird angegeben, ob die Indizierung vom Beginn oder vom Ende der Eingabe aus erfolgen soll.


## Examples

### Example #1
Hiermit wird der Teil "111-222-333" vor dem (ersten) Bindestrich abgerufen.
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2
Hiermit wird der Teil "111-222-333" vor dem zweiten Bindestrich abgerufen.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3
Hiermit wird der Teil "111-222-333" vor dem vom Ende aus gesehen zweiten Bindestrich abgerufen.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
