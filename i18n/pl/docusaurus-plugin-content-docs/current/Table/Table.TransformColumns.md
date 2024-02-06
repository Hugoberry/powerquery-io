---
title: Table.TransformColumns
---

# Table.TransformColumns


Przekształca wartości co najmniej jednej kolumny.


## Syntax

```powerquery
Table.TransformColumns(
    table as table,
    transformOperations as list,
    optional defaultTransformation as function,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Przekształca <code>table</code> przez zastosowanie każdej operacji kolumny wymienionej w <code>transformOperations</code> (gdzie format to \{ column name, transformation } lub \{ column name, transformation, new column type }).    Jeśli element <code>defaultTransformation</code> zostanie określony, operacja zostanie zastosowana do wszystkich kolumn niewymienionych w <code>transformOperations</code>.    Jeśli kolumna wymieniona w <code>transformOperations</code> nie istnieje, zgłaszany jest wyjątek, chyba że opcjonalny parametr <code>missingField</code> określa alternatywę (na przykład <code>MissingField.UseNull</code> lub  <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Przekształć wartości tekstowe w kolumnie [A] na wartości liczbowe, a wartości liczbowe w kolumnie [B] na wartości tekstowe.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {
        {"A", Number.FromText},
        {"B", Text.From}
    }
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "2"],
    [A = 5, B = "10"]
})
```


### Example #2 
Przekształć wartości liczbowe w brakującej kolumnie [X] na wartości tekstowe i ignoruj nieistniejące kolumny.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"X", Number.FromText},
    null,
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "1", B = 2],
    [A = "5", B = 10]
})
```


### Example #3 
Przekształć wartości liczbowe w brakującej kolumnie [X] na wartości tekstowe i ustaw wartość null jako wartość domyślną w nieistniejących kolumnach.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"X", Number.FromText},
    null,
    MissingField.UseNull
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "1", B = 2, X = null],
    [A = "5", B = 10, X = null]
})
```


### Example #4 
Zwiększ wartości liczbowe w kolumnie [B] i przekonwertuj je na wartości tekstowe oraz przekonwertuj wszystkie pozostałe kolumny na liczby.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"B", each Text.From(_ + 1), type text},
    Number.FromText
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "3"],
    [A = 5, B = "11"]
})
```




## Category
Table.Transformation
