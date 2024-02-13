---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


Wendet Typtransformationen im Format &#34;\{ column, type }&#34; unter Verwendung einer bestimmten Kultur an.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as text
) as table
```


## Remarks

Gibt eine Tabelle auf der Grundlage der Eingabe "<code>table</code>" zurück, indem der Transformationsvorgang unter Verwendung der im optionalen Parameter "<code>typeTransformations</code>" angegebenen Kultur auf die im Parameter "<code>culture</code>" (im Format "\{ column name, type name}") angegebenen Spalten angewendet wird (Beispiel: "de-DE").    Ist die Spalte nicht vorhanden, wird eine Ausnahme ausgelöst.


## Examples

### Example #1 
Transformiert die numerischen Werte in Spalte &#34;[a]&#34; in Textwerte aus der Tabelle &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
```powerquery
Table.TransformColumnTypes(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {"a", type text},
    "en-US"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "1", b = 2],
    [a = "3", b = 4]
})
```




## Category
Table.Transformation
