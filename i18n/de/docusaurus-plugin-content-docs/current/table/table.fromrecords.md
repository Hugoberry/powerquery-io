---
title: Table.FromRecords
---

# Table.FromRecords


Konvertiert eine Liste mit Datensätzen in eine Tabelle.


## Syntax

```powerquery
Table.FromRecords(
    records as list,
    optional columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Konvertiert eine angegebene Liste mit Datensätzen in eine Tabelle.

-   `records`: Die Liste der Datensätze, die in eine Tabelle konvertiert werden sollen.
-   `columns`: (Optional) Eine Liste der Spaltennamen der Tabelle oder der Tabellentyp.
-   `missingField`: (Optional) Gibt an, wie fehlende Felder in einer Zeile behandelt werden. Verwenden Sie einen der folgenden Werte:
    -   `MissingField.Error`: Fehlende Felder führen zu einem Fehler (Standard).
    -   `MissingField.UseNull`: Fehlende Felder werden als `null`\-Werte eingeschlossen.
      
    Die Verwendung von `MissingField.Ignore` in diesem Parameter erzeugt einen Fehler.


## Examples

### Example #1
Erstellen einer Tabelle aus Datensätzen mithilfe von Datensatz-Feldnamen als Spaltennamen.
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```

Result: 
```powerquery
#table(type table[CustomerID = any, Name = any, Phone = any],
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
})
```


### Example #2
Erstellen einer Tabelle mit typisierten Spalten Auswählen der Zahlenspalten.
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[CustomerID = 1, Name = "Bob"]},
        type table[CustomerID = Number.Type, Name = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"CustomerID"}
```


### Example #3
Erstellen Sie eine Tabelle, die den Vornamen, den mittleren Anfangsbuchstaben und den Nachnamen der Kunden aus den angegebenen Datensätzen enthält. Wenn einer der Werte fehlt, ersetzen Sie ihn durch `NULL`.
```powerquery
Table.FromRecords({
        [CustomerID = 1, FirstName = "Bob", MiddleInitial = "C", LastName = "Smith"],
        [CustomerID = 2, FirstName = "Sarah", LastName = "Jones"],
        [CustomerID = 3, FirstName = "Harry", MiddleInitial = "H"]
    },
    type table [FirstName = nullable text, MiddleInitial = nullable text, LastName = nullable text],
    MissingField.UseNull)
```

Result: 
```powerquery
#table(type table[FirstName = text, MiddleInitial = text, LastName = text],
{
    {"Bob", "C", "Smith"},
    {"Sarah", null, "Jones"},
    {"Harry", "H", null}
})
```




## Category
Table.Table construction
