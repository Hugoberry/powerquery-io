---
title: Logical.From
---

# Logical.From


Erstellt einen logischen Wert auf der Grundlage des angegebenen Werts.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

Gibt einen `logical`\-Wert auf der Grundlage des angegebenen Elements vom Typ „`value`“ zurück. Besitzt das angegebene Element vom Typ „`value`“ den Wert `NULL`, wird von `Logical.From` der Wert `NULL` zurückgegeben. Besitzt das angegebene Element vom Typ „`value`“ den Wert `logical`, wird „`value`“ zurückgegeben. Werte folgender Art können in einen `logical`\-Wert konvertiert werden:

-   `text`: Ein `logical`\-Wert auf der Grundlage des Textwerts (entweder `TRUE` oder `FALSE`). Ausführlichere Informationen finden Sie unter `Logical.FromText`.
-   `number`: `false`, falls „`value`“ den Wert `0` besitzt, andernfalls `true`.

Handelt es sich bei „`value`“ um einen anderen Typ, wird ein Fehler zurückgegeben.


## Examples

### Example #1
Konvertiert `2` in einen `logical`\-Wert.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
