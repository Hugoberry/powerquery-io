---
title: Guid.From
---

# Guid.From


Gibt einen GUID-Wert aus dem angegebenen Wert zurück.


## Syntax

```powerquery
Guid.From(
    value as text
) as text
```


## Remarks

Gibt einen `Guid.Type`\-Wert aus dem angegebenen `value`\-Wert zurück. Ist der angegebene `value`\-Wert `NULL`, gibt `Guid.From` den Wert `NULL` zurück. Eine Prüfung wird durchgeführt, um zu ermitteln, ob der angegebene `value`\-Wert in einem akzeptablen Format vorliegt. Zulässige Formate werden in den Beispielen aufgeführt.


## Examples

### Example #1
Die GUID kann als 32 aufeinander folgende Hexadezimalziffern angegeben werden.
```powerquery
Guid.From("05FE1DADC8C24F3BA4C2D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #2
Die GUID kann als 32 Hexadezimalziffern angegeben werden, die durch Bindestriche in Blöcke von 8-4-4-4-12 unterteilt sind.
```powerquery
Guid.From("05FE1DAD-C8C2-4F3B-A4C2-D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #3
Die GUID kann als 32 Hexadezimalziffern angegeben werden, die durch Bindestriche getrennt und in geschweifte Klammern eingeschlossen sind.
```powerquery
Guid.From("{05FE1DAD-C8C2-4F3B-A4C2-D194116B4967}")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #4
Die GUID kann als 32 Hexadezimalziffern angegeben werden, die durch Bindestriche getrennt und in Klammern eingeschlossen sind.
```powerquery
Guid.From("(05FE1DAD-C8C2-4F3B-A4C2-D194116B4967)")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```




## Category
Text.Conversions from and to text
