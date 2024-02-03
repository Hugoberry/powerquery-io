---
title: Table.FromValue
---

# Table.FromValue


## Description

Tworzy tabelę z kolumną na podstawie dostarczonych wartości.


## Syntax

```powerquery
Table.FromValue(
    value as any,
    optional options as record
) as table
```


## Details

Tworzy tabelę z kolumną zawierającą podaną wartość lub listę wartości — <code>value</code>. Można określić opcjonalny parametr rekordu <code>options</code> w celu kontrolowania następujących opcji:    <ul>    <li> <code>DefaultColumnName</code>: nazwa kolumny używana podczas tworzenia tabeli z listy lub wartości skalarnej.</li>    </ul>  


## Examples

### Example #1 
Utwórz tabelę na podstawie wartości 1.
```powerquery
Table.FromValue(1)
```

Result: 
```powerquery
Table.FromRecords({[Value = 1]})
```


### Example #2 
Utwórz tabelę na podstawie listy.
```powerquery
Table.FromValue({1, "Bob", "123-4567"})
```

Result: 
```powerquery
Table.FromRecords({
    [Value = 1],
    [Value = "Bob"],
    [Value = "123-4567"]
})
```


### Example #3 
Utwórz tabelę na podstawie wartości 1 i z niestandardową nazwą kolumny.
```powerquery
Table.FromValue(1, [DefaultColumnName = "MyValue"])
```

Result: 
```powerquery
Table.FromRecords({[MyValue = 1]})
```




## Category
Table.Table construction
