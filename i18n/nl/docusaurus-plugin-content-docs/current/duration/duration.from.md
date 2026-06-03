---
title: Duration.From
---

# Duration.From


Maakt een duur van de opgegeven waarde.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Remarks

Retourneert een duurwaarde van de opgegeven waarde.

-   `value`: de waarde van waaruit de duur wordt afgeleid. Als de opgegeven `value` `null` is, retourneert deze functie `null`. Als de opgegeven `value` een `duration` is, wordt `value` geretourneerd. Waarden van de volgende typen kunnen worden geconverteerd naar een `duration`\- waarde:
    -   `text`: een `duration`\-waarde afgeleid van tekstuele vormen van verstreken tijd (d.u:m:s). Raadpleeg `Duration.FromText` voor meer informatie.
    -   `number`: een `duration` die gelijk is aan het aantal gehele en fractionele dagen dat wordt uitgedrukt door `value`.

Als `value` van een ander type is, wordt er een fout geretourneerd.


## Examples

### Example #1
Zet `2.525` om naar een `duration`waarde.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```


### Example #2
Zet de tekstwaarde `"2.05:55:20.34567"` om naar een `duration`\-waarde.
```powerquery
Duration.From("2.05:55:20.34567")
```

Result: 
```powerquery
#duration(2, 5, 55, 20.3456700)
```




## Category
Duration
