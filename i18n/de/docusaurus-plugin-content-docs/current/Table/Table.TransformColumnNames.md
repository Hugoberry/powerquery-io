---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


## Description

Transformiert Spaltennamen unter Verwendung der angegebenen Funktion.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Details

Transformiert Spaltennamen mithilfe der angegebenen <code>nameGenerator</code>-Funktion. Gültige Optionen:    <div>      <code>MaxLength</code> gibt die maximale Länge neuer Spaltennamen an. Wenn die angegebene Funktion in einem längeren Spaltennamen resultiert, wird der lange Name gekürzt.    </div>    <div>      <code>Comparer</code> (Vergleichsfunktion) wird verwendet, um den Vergleich beim Generieren neuer Spaltennamen zu steuern. Vergleichsfunktionen können verwendet werden, um Vergleiche ohne Berücksichtigung der Groß-/Kleinschreibung oder mit Berücksichtigung von Kultur und Gebietsschema bereitzustellen.    </div>    <div>      Die folgenden integrierten Vergleichsfunktionen sind in der Formelsprache verfügbar:    </div>    <ul>      <li><code>Comparer.Ordinal</code>: Wird verwendet, um einen exakten Ordinalvergleich durchzuführen</li>      <li><code>Comparer.OrdinalIgnoreCase</code>: Wird verwendet, um einen exakten Ordinalvergleich ohne Berücksichtigung der Groß-/Kleinschreibung durchzuführen</li>      <li> <code>Comparer.FromCulture</code>: Wird verwendet, um einen Vergleich mit Berücksichtigung der Kultur durchzuführen</li>    </ul>     


## Examples

### Example #1 
Entfernen Sie das &lt;code&gt;#(tab)&lt;/code&gt;-Zeichen aus Spaltennamen.
```powerquery
Table.TransformColumnNames(Table.FromRecords({[#"Col#(tab)umn" = 1]}), Text.Clean)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1]})
```


### Example #2 
Transformiert Spaltennamen, um Namen ohne Berücksichtigung von Groß-/Kleinschreibung der Länge 6 zu generieren.
```powerquery
Table.TransformColumnNames(
    Table.FromRecords({[ColumnNum = 1, cOlumnnum = 2, coLumnNUM = 3]}),
    Text.Clean,
    [MaxLength = 6, Comparer = Comparer.OrdinalIgnoreCase]
)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1, cOlum1 = 2, coLum2 = 3]})
```




## Category
Table.Column operations
