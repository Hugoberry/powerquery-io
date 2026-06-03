---
title: Logical.From
---

# Logical.From


Maakt van de opgegeven waarde een logische waarde.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

Hiermee wordt een `logical`\-waarde geretourneerd van de opgegeven waarde `value`. Als de opgegeven waarde `value` `null` is, retourneert `Logical.From` `null`. Als de opgegeven waarde `value` `logical` is, wordt `value` geretourneerd. Waarden van de volgende typen kunnen worden omgezet naar een `logical`\-waarde:

-   `text`: een `logical`\-waarde van de tekstwaarde, ofwel `"true"` of `"false"`. Raadpleeg `Logical.FromText` voor meer informatie.
-   `number`: `false` als `value` gelijk is aan `0`, anders `true`.

Als `value` van een ander type is, wordt een fout geretourneerd.


## Examples

### Example #1
Het getal `2` converteren naar een `logical` waarde.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
