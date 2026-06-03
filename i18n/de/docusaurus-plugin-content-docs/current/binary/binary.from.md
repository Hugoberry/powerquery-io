---
title: Binary.From
---

# Binary.From


Erstellt einen Binärwert auf der Grundlage des angegebenen Werts.


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Gibt einen `binary`\-Wert auf der Grundlage des angegebenen Elements vom Typ „`value`“ zurück. Besitzt das angegebene Element vom Typ „`value`“ den Wert `NULL`, wird von `Binary.From` der Wert `NULL` zurückgegeben. Besitzt das angegebene Element vom Typ „`value`“ den Wert `binary`, wird „`value`“ zurückgegeben. Werte folgender Art können in einen `binary`\-Wert konvertiert werden:

-   `text`: Ein `binary`\-Wert aus der Textdarstellung. Ausführlichere Informationen finden Sie unter `Binary.FromText`.

Handelt es sich bei „`value`“ um einen anderen Typ, wird ein Fehler zurückgegeben.


## Examples

### Example #1
Ruft den `binary`\-Wert von `"1011"` ab.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
